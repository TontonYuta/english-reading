import React, { useState } from 'react';
import { Passage, Question } from '../types';
import { ArrowLeft, CheckCircle2, XCircle, BookOpen, HelpCircle } from 'lucide-react';

interface PassageViewProps {
  passage: Passage;
  onBack: () => void;
  onComplete: (score: number, total: number) => void;
}

export function PassageView({ passage, onBack, onComplete }: PassageViewProps) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleBack = () => {
    onBack();
  };

  const handleSelectAnswer = (questionId: string, optionIndex: number) => {
    if (showResults) return;
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmit = () => {
    setShowResults(true);
    onComplete(score, passage.questions.length);
  };

  const score = Object.keys(answers).reduce((acc, qId) => {
    const question = passage.questions.find((q) => q.id === qId);
    if (question && answers[qId] === question.correctAnswerIndex) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return (
    <div className="flex-1 flex flex-col h-screen bg-black overflow-hidden">
      <header className="bg-zinc-950 border-b border-zinc-800 px-4 py-3 flex items-center justify-between shrink-0 sticky top-0 z-10">
        <div className="flex items-center gap-3 overflow-hidden">
          <button
            onClick={handleBack}
            className="p-2 -ml-2 rounded-full hover:bg-zinc-800 text-zinc-400 transition-colors shrink-0"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="text-lg font-bold text-yellow-400 truncate">{passage.title}</h2>
        </div>
        <span className="inline-flex items-center rounded-md bg-yellow-400/10 px-2 py-1 text-xs font-bold text-yellow-400 ring-1 ring-inset ring-yellow-400/20 shrink-0 ml-2">
          Level {passage.level}
        </span>
      </header>

      <div className="flex-1 overflow-y-auto p-4 lg:p-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Reading Section */}
          <div className="space-y-6">
            <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-5 lg:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-yellow-400" />
                  <h3 className="text-lg font-bold text-white">Reading Passage</h3>
                </div>
              </div>
              <div className="prose prose-invert max-w-none">
                {passage.content.map((paragraph, idx) => (
                  <p key={idx} className="text-zinc-300 leading-relaxed mb-4 text-sm md:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {passage.vocabulary.length > 0 && (
              <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-5 lg:p-8">
                <h3 className="text-lg font-bold text-white mb-4">Vocabulary</h3>
                <ul className="space-y-3">
                  {passage.vocabulary.map((vocab, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm md:text-base">
                      <span className="font-bold text-yellow-400 shrink-0">{vocab.word}:</span>
                      <span className="text-zinc-300">{vocab.meaning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Quiz Section */}
          <div className="space-y-6">
            <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-5 lg:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-yellow-400" />
                  <h3 className="text-lg font-bold text-white">Comprehension Check</h3>
                </div>
                {showResults && (
                  <span className="text-sm font-bold text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full">
                    Score: {score} / {passage.questions.length}
                  </span>
                )}
              </div>

              <div className="space-y-8">
                {passage.questions.map((question, qIdx) => (
                  <div key={question.id} className="space-y-4">
                    <p className="font-medium text-white text-sm md:text-base">
                      {qIdx + 1}. {question.text}
                    </p>
                    <div className="space-y-2">
                      {question.options.map((option, oIdx) => {
                        const isSelected = answers[question.id] === oIdx;
                        const isCorrect = question.correctAnswerIndex === oIdx;
                        
                        let optionClass = "w-full text-left px-4 py-3 rounded-xl border transition-all text-sm md:text-base ";
                        
                        if (showResults) {
                          if (isCorrect) {
                            optionClass += "bg-emerald-500/10 border-emerald-500 text-emerald-400";
                          } else if (isSelected && !isCorrect) {
                            optionClass += "bg-red-500/10 border-red-500 text-red-400";
                          } else {
                            optionClass += "bg-zinc-950 border-zinc-800 text-zinc-500 opacity-50";
                          }
                        } else {
                          if (isSelected) {
                            optionClass += "bg-yellow-400/10 border-yellow-400 text-yellow-400 ring-1 ring-yellow-400";
                          } else {
                            optionClass += "bg-zinc-950 border-zinc-800 text-zinc-300 hover:border-yellow-400/50 hover:bg-zinc-800";
                          }
                        }

                        return (
                          <button
                            key={oIdx}
                            onClick={() => handleSelectAnswer(question.id, oIdx)}
                            disabled={showResults}
                            className={optionClass}
                          >
                            <div className="flex items-center justify-between">
                              <span>{option}</span>
                              {showResults && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 ml-2" />}
                              {showResults && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-500 shrink-0 ml-2" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                    {showResults && (
                      <div className="mt-3 p-4 bg-zinc-950 rounded-xl border border-zinc-800">
                        <p className="text-sm text-zinc-300">
                          <span className="font-bold text-yellow-400">Explanation:</span> {question.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {!showResults && (
                <button
                  onClick={handleSubmit}
                  disabled={Object.keys(answers).length !== passage.questions.length}
                  className="mt-8 w-full bg-yellow-400 text-black font-bold py-3 px-4 rounded-xl hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Check Answers
                </button>
              )}
              
              {showResults && (
                <button
                  onClick={() => {
                    setAnswers({});
                    setShowResults(false);
                  }}
                  className="mt-8 w-full bg-zinc-800 text-white font-bold py-3 px-4 rounded-xl hover:bg-zinc-700 transition-colors"
                >
                  Try Again
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
