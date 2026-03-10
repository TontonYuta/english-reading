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
import { BookOpen, Trophy } from 'lucide-react';

const LEVELS: Level[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

const loadProgress = (): UserProgress => {
  const stored = localStorage.getItem('english_reader_progress');
  return stored ? JSON.parse(stored) : { results: {}, unlockedAchievements: [] };
};

export default function App() {
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [selectedPassage, setSelectedPassage] = useState<Passage | null>(null);
  const [showAchievements, setShowAchievements] = useState(false);
  const [progress, setProgress] = useState<UserProgress>(loadProgress());

  // Save progress whenever it changes
  useEffect(() => {
    localStorage.setItem('english_reader_progress', JSON.stringify(progress));
  }, [progress]);

  const filteredPassages = selectedLevel 
    ? passages.filter((p) => p.level === selectedLevel)
    : [];

  const handlePassageComplete = (score: number, total: number) => {
    if (!selectedPassage) return;

    setProgress(prev => {
      const newResults = {
        ...prev.results,
        [selectedPassage.id]: {
          score,
          total,
          completedAt: Date.now()
        }
      };

      const newUnlocked = new Set(prev.unlockedAchievements);
      const totalCompleted = Object.keys(newResults).length;

      // Check Achievements
      if (totalCompleted === 1) newUnlocked.add('first_blood');
      if (score === total) newUnlocked.add('perfect_score');
      if (totalCompleted >= 5) newUnlocked.add('bookworm');

      // Check Level Masters
      LEVELS.forEach(level => {
        const levelPassages = passages.filter(p => p.level === level);
        const completedInLevel = levelPassages.filter(p => newResults[p.id]).length;
        if (levelPassages.length > 0 && completedInLevel === levelPassages.length) {
          newUnlocked.add(`${level.toLowerCase()}_master`);
        }
      });

      return {
        results: newResults,
        unlockedAchievements: Array.from(newUnlocked)
      };
    });
  };

  return (
    <div className="flex flex-col h-screen bg-black overflow-hidden font-sans">
      {!selectedLevel && !selectedPassage && !showAchievements && (
        <header className="bg-zinc-950 border-b border-zinc-800 p-4 flex items-center justify-between shrink-0">
          <div className="w-10"></div> {/* Spacer */}
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-yellow-400" />
            <h1 className="text-xl font-bold text-white tracking-tight">English Reader</h1>
          </div>
          <button 
            onClick={() => setShowAchievements(true)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 hover:border-yellow-400 hover:text-yellow-400 text-zinc-400 transition-colors"
          >
            <Trophy className="w-5 h-5" />
          </button>
        </header>
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
