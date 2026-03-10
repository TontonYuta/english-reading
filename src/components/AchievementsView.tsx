import React from 'react';
import { UserProgress } from '../types';
import { ACHIEVEMENTS } from '../data/achievements';
import { ArrowLeft, Trophy, Star, Footprints, BookOpen, Award, Lock } from 'lucide-react';

interface AchievementsViewProps {
  progress: UserProgress;
  onBack: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  Footprints,
  Star,
  BookOpen,
  Award,
  Trophy
};

export function AchievementsView({ progress, onBack }: AchievementsViewProps) {
  const totalPassages = Object.keys(progress.results).length;
  const totalScore = Object.values(progress.results).reduce((acc, curr) => acc + curr.score, 0);
  const totalQuestions = Object.values(progress.results).reduce((acc, curr) => acc + curr.total, 0);
  const accuracy = totalQuestions > 0 ? Math.round((totalScore / totalQuestions) * 100) : 0;

  return (
    <div className="flex-1 flex flex-col h-full bg-black overflow-hidden">
      <header className="bg-zinc-950 border-b border-zinc-800 px-4 py-3 flex items-center shrink-0 sticky top-0 z-10">
        <button
          onClick={onBack}
          className="p-2 -ml-2 mr-2 rounded-full hover:bg-zinc-800 text-zinc-400 transition-colors shrink-0"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <Trophy className="w-5 h-5 text-yellow-400" />
          Progress & Achievements
        </h2>
      </header>

      <div className="flex-1 overflow-y-auto p-4 md:p-8">
        <div className="max-w-3xl mx-auto space-y-8">
          
          {/* Stats Overview */}
          <section>
            <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-4">Your Stats</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-bold text-white mb-1">{totalPassages}</span>
                <span className="text-xs text-zinc-400">Passages Read</span>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-bold text-yellow-400 mb-1">{accuracy}%</span>
                <span className="text-xs text-zinc-400">Average Accuracy</span>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex flex-col items-center justify-center text-center col-span-2 md:col-span-1">
                <span className="text-3xl font-bold text-emerald-400 mb-1">{progress.unlockedAchievements.length}</span>
                <span className="text-xs text-zinc-400">Achievements Unlocked</span>
              </div>
            </div>
          </section>

          {/* Achievements List */}
          <section>
            <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-4">Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ACHIEVEMENTS.map((achievement) => {
                const isUnlocked = progress.unlockedAchievements.includes(achievement.id);
                const IconComponent = iconMap[achievement.iconName] || Trophy;

                return (
                  <div 
                    key={achievement.id}
                    className={`flex items-start gap-4 p-4 rounded-2xl border transition-all ${
                      isUnlocked 
                        ? 'bg-zinc-900 border-yellow-400/30' 
                        : 'bg-zinc-950 border-zinc-800 opacity-60'
                    }`}
                  >
                    <div className={`flex-shrink-0 h-12 w-12 rounded-full flex items-center justify-center ${
                      isUnlocked ? 'bg-yellow-400/10 text-yellow-400' : 'bg-zinc-800 text-zinc-600'
                    }`}>
                      {isUnlocked ? <IconComponent className="w-6 h-6" /> : <Lock className="w-5 h-5" />}
                    </div>
                    <div>
                      <h4 className={`font-bold ${isUnlocked ? 'text-white' : 'text-zinc-500'}`}>
                        {achievement.title}
                      </h4>
                      <p className={`text-sm mt-0.5 ${isUnlocked ? 'text-zinc-400' : 'text-zinc-600'}`}>
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
