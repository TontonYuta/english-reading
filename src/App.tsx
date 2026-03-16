/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { LevelGrid } from './components/LevelGrid';
import { PassageList } from './components/PassageList';
import { PassageView } from './components/PassageView';
import { AchievementsView } from './components/AchievementsView';
import { passages } from './data';
import { Level, Passage, UserProgress } from './types';
import { BookOpen, Trophy, RefreshCw, User } from 'lucide-react';
import { APP_VERSION, GOOGLE_SCRIPT_URL } from './config';
import { CapacitorUpdater } from '@capgo/capacitor-updater';

const LEVELS: Level[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'NET'];

const loadProgress = (): UserProgress => {
  const stored = localStorage.getItem('english_reader_progress');
  return stored ? JSON.parse(stored) : { results: {}, unlockedAchievements: [] };
};

export default function App() {
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [selectedPassage, setSelectedPassage] = useState<Passage | null>(null);
  const [showAchievements, setShowAchievements] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [studentName, setStudentName] = useState(
    localStorage.getItem('english_reader_student_name') || ''
  );
  const [progress, setProgress] = useState<UserProgress>(loadProgress());
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateInfo, setUpdateInfo] = useState<{
    version: string;
    message: string;
    updateUrl?: string;
    zipUrl?: string;
    tagName?: string;
    isDownloading?: boolean;
  } | null>(null);

  useEffect(() => {
    localStorage.setItem('english_reader_progress', JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    if (!localStorage.getItem('english_reader_student_name')) {
      setShowProfile(true);
    }
  }, []);

  const handleUpdate = async () => {
    if (isUpdating) return;
    setIsUpdating(true);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL);
      const data = await response.json();

      const latestVersion = data.version ? data.version.replace('v', '') : null;

      if (latestVersion && latestVersion !== APP_VERSION) {
        if (!data.updateUrl) {
          setUpdateInfo({
            version: latestVersion,
            message: 'Không tìm thấy đường dẫn tải xuống bản cập nhật.',
          });
          return;
        }

        setUpdateInfo({
          version: latestVersion,
          message: data.message || 'Đã có bản cập nhật mới, tải xuống ngay!',
          zipUrl: data.updateUrl,
          tagName: latestVersion,
        });
      } else {
        setUpdateInfo({
          version: APP_VERSION,
          message: 'Bạn đang sử dụng phiên bản mới nhất!',
        });
      }
    } catch (error: any) {
      console.error('Lỗi kiểm tra cập nhật:', error);
      setUpdateInfo({
        version: 'Lỗi',
        message: 'Không thể kiểm tra bản cập nhật: ' + error.message,
      });
    } finally {
      setIsUpdating(false);
    }
  };

  const confirmAndDownloadUpdate = async () => {
    if (!updateInfo?.zipUrl || !updateInfo?.tagName) {
      if (updateInfo?.updateUrl) {
        window.open(updateInfo.updateUrl, '_blank');
      }
      setUpdateInfo(null);
      return;
    }

    setUpdateInfo((prev) =>
      prev
        ? {
            ...prev,
            isDownloading: true,
            message: 'Đang tải bản cập nhật mới về máy...',
          }
        : prev
    );

    try {
      const bundle = await CapacitorUpdater.download({
        url: updateInfo.zipUrl,
        version: updateInfo.tagName,
      });

      setUpdateInfo((prev) =>
        prev
          ? {
              ...prev,
              isDownloading: true,
              message: 'Tải xong! Đang áp dụng bản cập nhật...',
            }
          : prev
      );

      await CapacitorUpdater.set({ id: bundle.id });
      await CapacitorUpdater.reload();
    } catch (error: any) {
      console.error('Lỗi tải/cài đặt bản cập nhật:', error);
      setUpdateInfo({
        version: 'Lỗi',
        message: 'Có lỗi xảy ra: ' + error.message,
      });
    }
  };

  const filteredPassages = selectedLevel
    ? passages.filter((p) => p.level === selectedLevel)
    : [];

  const handlePassageComplete = (score: number, total: number) => {
    if (!selectedPassage) return;

    const currentName =
      localStorage.getItem('english_reader_student_name') || 'Học sinh ẩn danh';

    fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify({
        studentName: currentName,
        topicTitle: `[${selectedPassage.level}] ${selectedPassage.title}`,
        score: score,
        totalQuestions: total,
        appVersion: APP_VERSION,
      }),
    }).catch(console.error);

    setProgress((prev) => {
      const newResults = {
        ...prev.results,
        [selectedPassage.id]: {
          score,
          total,
          completedAt: Date.now(),
        },
      };

      const newUnlocked = new Set(prev.unlockedAchievements);
      const totalCompleted = Object.keys(newResults).length;

      if (totalCompleted === 1) newUnlocked.add('first_blood');
      if (score === total) newUnlocked.add('perfect_score');
      if (totalCompleted >= 5) newUnlocked.add('bookworm');

      LEVELS.forEach((level) => {
        const levelPassages = passages.filter((p) => p.level === level);
        const completedInLevel = levelPassages.filter((p) => newResults[p.id]).length;

        if (levelPassages.length > 0 && completedInLevel === levelPassages.length) {
          newUnlocked.add(`${level.toLowerCase()}_master`);
        }
      });

      return {
        results: newResults,
        unlockedAchievements: Array.from(newUnlocked),
      };
    });
  };

  return (
    <div className="flex flex-col h-screen bg-black overflow-hidden font-sans">
      {!selectedLevel && !selectedPassage && !showAchievements && (
        <header className="bg-zinc-950 border-b border-zinc-800 px-4 py-3 flex items-center justify-between shrink-0 relative">
          <button
            onClick={handleUpdate}
            disabled={isUpdating}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-emerald-400 hover:text-emerald-400 text-zinc-400 transition-colors text-xs font-medium disabled:opacity-50 z-10"
            title="Cập nhật phiên bản mới"
          >
            <RefreshCw
              className={`w-4 h-4 ${isUpdating ? 'animate-spin text-emerald-400' : ''}`}
            />
            <span className="hidden sm:inline">
              {isUpdating ? 'Đang cập nhật...' : `v${APP_VERSION}`}
            </span>
          </button>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-yellow-400" />
              <h1 className="text-xl font-bold text-white tracking-tight">English Reader</h1>
            </div>
          </div>

          <div className="flex items-center gap-2 z-10">
            <button
              onClick={() => setShowProfile(true)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 hover:border-emerald-400 hover:text-emerald-400 text-zinc-400 transition-colors"
              title="Thông tin học sinh"
            >
              <User className="w-5 h-5" />
            </button>
            <button
              onClick={() => setShowAchievements(true)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 hover:border-yellow-400 hover:text-yellow-400 text-zinc-400 transition-colors"
              title="Thành tích"
            >
              <Trophy className="w-5 h-5" />
            </button>
          </div>
        </header>
      )}

      {showProfile && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl w-full max-w-sm shadow-2xl">
            <h2 className="text-xl font-bold text-white mb-2">Thông tin học sinh</h2>
            <p className="text-sm text-zinc-400 mb-4">
              Nhập tên của bạn để lưu điểm lên hệ thống.
            </p>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Ví dụ: Nguyễn Văn A..."
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 mb-6"
              autoFocus
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowProfile(false)}
                className="px-4 py-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 font-medium transition-colors"
              >
                Đóng
              </button>
              <button
                onClick={() => {
                  if (studentName.trim()) {
                    localStorage.setItem(
                      'english_reader_student_name',
                      studentName.trim()
                    );
                    setShowProfile(false);
                  }
                }}
                disabled={!studentName.trim()}
                className="px-4 py-2 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Lưu tên
              </button>
            </div>
          </div>
        </div>
      )}

      {updateInfo && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl w-full max-w-sm shadow-2xl text-center">
            <h2 className="text-xl font-bold text-white mb-2">
              {updateInfo.version === APP_VERSION
                ? 'Thông báo'
                : updateInfo.version === 'Lỗi'
                ? 'Lỗi cập nhật'
                : 'Có bản cập nhật mới!'}
            </h2>

            {updateInfo.version !== APP_VERSION && updateInfo.version !== 'Lỗi' && (
              <div className="bg-zinc-800/50 rounded-lg p-3 mb-4 inline-block">
                <span className="text-emerald-400 font-mono font-bold text-lg">
                  v{updateInfo.version}
                </span>
              </div>
            )}

            <p className="text-zinc-300 mb-6">{updateInfo.message}</p>

            <div className="flex flex-col gap-3">
              {updateInfo.version !== APP_VERSION && updateInfo.version !== 'Lỗi' && (
                <button
                  onClick={confirmAndDownloadUpdate}
                  disabled={updateInfo.isDownloading}
                  className="w-full py-3 rounded-xl bg-emerald-500 text-white font-bold hover:bg-emerald-600 disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
                >
                  {updateInfo.isDownloading && (
                    <RefreshCw className="w-5 h-5 animate-spin" />
                  )}
                  {updateInfo.isDownloading ? 'Đang xử lý...' : 'Tải xuống ngay'}
                </button>
              )}

              <button
                onClick={() => setUpdateInfo(null)}
                disabled={updateInfo.isDownloading}
                className="w-full py-3 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 font-medium transition-colors disabled:opacity-50"
              >
                {updateInfo.version === APP_VERSION || updateInfo.version === 'Lỗi'
                  ? 'Đóng'
                  : 'Để sau'}
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="flex-1 flex flex-col overflow-hidden">
        {showAchievements ? (
          <AchievementsView
            progress={progress}
            onBack={() => setShowAchievements(false)}
          />
        ) : !selectedLevel ? (
          <LevelGrid
            levels={LEVELS}
            passages={passages}
            progress={progress}
            onSelectLevel={(level) => setSelectedLevel(level)}
          />
        ) : selectedPassage ? (
          <PassageView
            passage={selectedPassage}
            onBack={() => setSelectedPassage(null)}
            onComplete={handlePassageComplete}
          />
        ) : (
          <PassageList
            level={selectedLevel}
            passages={filteredPassages}
            progress={progress}
            onSelectPassage={setSelectedPassage}
            onBack={() => setSelectedLevel(null)}
          />
        )}
      </main>
    </div>
  );
}