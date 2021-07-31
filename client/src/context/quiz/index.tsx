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

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [results, setResults] = useState<Result[]>([]);

  const history = useHistory();

  const questions = questionsData?.questions ?? [];

  const currentQuestion = questions[currentQuestionIndex];

  const totalQuestionCount = questions.length;

  const submitAnswer = (answer: Answer) => {
    const correctAnswer = currentQuestion.answer;

    const hasAnsweredCorrectly = answer === correctAnswer;

    setResults((previousResults) => [
      ...previousResults,
      { question: currentQuestion.question, hasAnsweredCorrectly },
    ]);

    setCurrentQuestionIndex(
      (previousCurrentQuestionIndex) => previousCurrentQuestionIndex + 1
    );

    if (currentQuestionIndex + 1 === totalQuestionCount) {
      history.push(pagePaths.resultsPage);
    }
  };

  return (
    <QuizContext.Provider
      value={{
        currentQuestion,
        currentQuestionIndex,
        totalQuestionCount,
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
