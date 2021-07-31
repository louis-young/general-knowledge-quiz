import type { Question } from "../../types/question";
import type { Answer } from "../../types/answer";

export interface QuestionProps {
  currentQuestion: Question;
  currentQuestionIndex: number;
  totalQuestionCount: number;
  submitAnswer: (answer: Answer) => void;
}
