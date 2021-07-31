import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

export const useQuizContext = () => {
  const quizContext = useContext(QuizContext);

  if (!quizContext) {
    throw new Error("QuizContext must be used within an QuizContextProvider");
  }

  return quizContext;
};
