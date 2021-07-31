import { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { useQuestionsQuery } from "../../hooks/queries/useQuestionsQuery";
import { pagePaths } from "../../constants/pagePaths";
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

  const history = useHistory();

  const questions = questionsData?.questions ?? [];

  const question = questions[questionIndex];

  const totalQuestions = questions.length;

  const submitAnswer = (answer: Answer) => {
    const correctAnswer = question.answer;

    const hasAnsweredCorrectly = answer === correctAnswer;

    setResults((previousResults) => [
      ...previousResults,
      { question: question.question, hasAnsweredCorrectly },
    ]);

    setQuestionIndex((previousQuestionIndex) => previousQuestionIndex + 1);

    if (questionIndex + 1 === totalQuestions) {
      history.push(pagePaths.resultsPage);
    }
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
        results,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
