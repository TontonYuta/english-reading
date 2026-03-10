export type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface Vocabulary {
  word: string;
  meaning: string;
}

export interface Passage {
  id: string;
  title: string;
  level: Level;
  content: string[];
  vocabulary: Vocabulary[];
  questions: Question[];
}

export interface PassageResult {
  score: number;
  total: number;
  completedAt: number;
}

export interface UserProgress {
  results: Record<string, PassageResult>;
  unlockedAchievements: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  iconName: string;
}