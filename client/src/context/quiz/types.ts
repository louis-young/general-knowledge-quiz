import type { ReactNode } from "react";
import type { Question } from "../../types/question";
import type { Answer } from "../../types/answer";
import type { Result } from "../../types/result";

export interface QuizContextValue {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  isLoadingQuestions: boolean;
  hasQuestionsError: boolean;
  submitAnswer: (answer: Answer) => void;
  hasFinishedQuiz: boolean;
  results: Result[];
  reinitialiseQuiz: () => void;
}

export interface QuizContextProviderProps {
  children: ReactNode;
}
