import React from 'react';
import { Level, UserProgress, Passage } from '../types';
import { BookOpen } from 'lucide-react';

interface LevelGridProps {
  levels: Level[];
  passages: Passage[];
  progress: UserProgress;
  onSelectLevel: (level: Level) => void;
}

const levelDescriptions: Record<Level, string> = {
  A1: 'Beginner',
  A2: 'Elementary',
  B1: 'Intermediate',
  B2: 'Upper Intermediate',
  C1: 'Advanced',
  C2: 'Proficient',
  NET: 'Computer Networking'
};

export function LevelGrid({ levels, passages, progress, onSelectLevel }: LevelGridProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-black">
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {levels.map((level) => {
            const levelPassages = passages.filter(p => p.level === level);
            const total = levelPassages.length;
            const completed = levelPassages.filter(p => progress.results[p.id]).length;
            const progressPercent = total > 0 ? Math.round((completed / total) * 100) : 0;

            return (
              <button
                key={level}
                onClick={() => onSelectLevel(level)}
                className="aspect-square flex flex-col items-center justify-center p-4 bg-zinc-900 rounded-3xl border border-zinc-800 hover:border-yellow-400 hover:bg-zinc-800/80 transition-all focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400 group relative overflow-hidden"
              >
                <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-yellow-400/10 flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-yellow-400" />
                </div>
                <span className="text-2xl md:text-3xl font-bold text-white mb-1">{level}</span>
                <span className="text-xs md:text-sm text-zinc-400 font-medium mb-4">{levelDescriptions[level]}</span>
                
                {/* Progress Bar */}
                <div className="w-full max-w-[120px] mt-auto">
                  <div className="flex justify-between text-[10px] text-zinc-500 mb-1.5 font-bold">
                    <span>{completed}/{total}</span>
                    <span>{progressPercent}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-yellow-400 rounded-full transition-all duration-500"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
