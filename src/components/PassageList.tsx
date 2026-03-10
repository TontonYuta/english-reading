import React from 'react';
import { Passage, Level, UserProgress } from '../types';
import { FileText, ChevronRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface PassageListProps {
  level: Level;
  passages: Passage[];
  progress: UserProgress;
  onSelectPassage: (passage: Passage) => void;
  onBack: () => void;
}

export function PassageList({ level, passages, progress, onSelectPassage, onBack }: PassageListProps) {
  return (
    <div className="flex-1 flex flex-col h-full bg-black overflow-hidden">
      <header className="bg-zinc-950 border-b border-zinc-800 px-4 py-3 flex items-center shrink-0 sticky top-0 z-10">
        <button
          onClick={onBack}
          className="p-2 -ml-2 mr-2 rounded-full hover:bg-zinc-800 text-zinc-400 transition-colors shrink-0"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-bold text-white">Level {level} Passages</h2>
      </header>

      <div className="flex-1 overflow-y-auto p-4 md:p-8">
        <div className="max-w-3xl mx-auto">
          {passages.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20">
              <FileText className="h-12 w-12 text-zinc-700 mb-4" />
              <h3 className="text-base font-medium text-zinc-300">No passages</h3>
              <p className="mt-1 text-sm text-zinc-500">There are no reading passages for this level yet.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {passages.map((passage) => {
                const result = progress.results[passage.id];
                const isCompleted = !!result;

                return (
                  <button
                    key={passage.id}
                    onClick={() => onSelectPassage(passage)}
                    className="w-full flex items-center justify-between p-4 md:p-5 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-yellow-400/50 hover:bg-zinc-800/80 transition-all focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex-shrink-0 h-12 w-12 rounded-full flex items-center justify-center ${isCompleted ? 'bg-emerald-500/10' : 'bg-yellow-400/10'}`}>
                        {isCompleted ? (
                          <CheckCircle2 className="h-6 w-6 text-emerald-500" />
                        ) : (
                          <FileText className="h-6 w-6 text-yellow-400" />
                        )}
                      </div>
                      <div className="text-left">
                        <p className="text-base font-medium text-zinc-100">{passage.title}</p>
                        <div className="flex items-center gap-3 mt-0.5">
                          <p className="text-sm text-zinc-400">{passage.questions.length} Questions</p>
                          {isCompleted && (
                            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                              Score: {result.score}/{result.total}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-zinc-600" />
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
