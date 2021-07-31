import type { Answer } from "../../types/answer";

export interface QuestionProps {
  category: string;
  question: string;
  questionIndex: number;
  totalQuestions: number;
  submitAnswer: (answer: Answer) => void;
}
