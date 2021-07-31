import type { Answer } from "../../types/answer";

export interface AnswerButtonProps {
  text: string;
  type: Answer;
  onAnswer: (answer: Answer) => void;
}
