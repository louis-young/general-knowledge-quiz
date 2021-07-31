import { createContext, useState } from "react";
import { useQuestionsQuery } from "../../hooks/queries/useQuestionsQuery";
import type { QuizContextProviderProps, QuizContextValue } from "./types";
import type { Answer } from "../../types/answer";
import type { Result } from "../../types/result";

export const QuizContext = createContext<QuizContextValue | undefined>(
  undefined
);

export const QuizContextProvider = ({ children }: QuizContextProviderProps) => {
  const { questionsData, isLoadingQuestions, hasQuestionsError } =
    useQuestionsQuery();

  const [questionIndex, setQuestionIndex] = useState(0);

  const [results, setResults] = useState<Result[]>([]);

  const [hasFinishedQuiz, setHasFinishedQuiz] = useState(false);

  const questions = questionsData?.questions ?? [];

  const question = questions[questionIndex];

  const totalQuestions = questions.length;

  const submitAnswer = (answer: Answer) => {
    const correctAnswer = question.answer;

    const hasAnsweredCorrectly = answer === correctAnswer;

    setResults((previousResults) => [
      ...previousResults,
      {
        category: question.category,
        question: question.question,
        hasAnsweredCorrectly,
      },
    ]);

    setQuestionIndex((previousQuestionIndex) => previousQuestionIndex + 1);

    const hasAnsweredLastQuestion = questionIndex + 1 === totalQuestions;

    if (!hasAnsweredLastQuestion) {
      return;
    }

    setHasFinishedQuiz(true);
  };

  return (
    <QuizContext.Provider
      value={{
        question,
        questionIndex,
        totalQuestions,
        isLoadingQuestions,
        hasQuestionsError,
        submitAnswer,
        hasFinishedQuiz,
        results,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
