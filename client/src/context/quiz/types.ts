import type { ReactNode } from "react";
import type { Question } from "../../types/question";
import type { Answer } from "../../types/answer";
import type { Result } from "../../types/result";

export interface QuizContextValue {
  currentQuestion: Question;
  currentQuestionIndex: number;
  totalQuestionCount: number;
  isLoadingQuestions: boolean;
  hasQuestionsError: boolean;
  submitAnswer: (answer: Answer) => void;
  results: Result[];
}

export interface QuizContextProviderProps {
  children: ReactNode;
}
