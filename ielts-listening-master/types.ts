
export interface Question {
  id: number;
  label: string;
  type: 'table' | 'sentence';
  correctAnswers: string[];
}

export interface UserAnswer {
  questionId: number;
  value: string;
  isCorrect?: boolean;
}

export interface TestState {
  answers: Record<number, string>;
  results: Record<number, boolean | null>;
  isSubmitted: boolean;
}
