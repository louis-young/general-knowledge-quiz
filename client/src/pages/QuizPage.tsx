import { pagePaths } from "../constants/pagePaths";
import { useQuizContext } from "../hooks/context/useQuizContext";
import { Question } from "../components/Question";
import { PuffLoader as Loader } from "react-spinners";
import { Button } from "../components/Button";

export const QuizPage = () => {
  const {
    question,
    questionIndex,
    totalQuestions,
    isLoadingQuestions,
    hasQuestionsError,
    submitAnswer,
    hasFinishedQuiz,
  } = useQuizContext();

  if (isLoadingQuestions) {
    return (
      <main className="bg-gray-100 min-h-screen flex justify-center items-center">
        <Loader color="#4338ca" size={75} />
      </main>
    );
  }

  if (hasQuestionsError) {
    return (
      <main className="bg-gray-100 min-h-screen flex justify-center items-center">
        <p className="text-white text-lg bg-red-400 p-6 rounded-md">
          An error occurred loading the questions. Please try again.
        </p>
      </main>
    );
  }

  return (
    <main className="bg-gray-100 min-h-screen flex justify-center items-center">
      {hasFinishedQuiz ? (
        <article className="bg-white p-12 pb-8 container max-w-md text-center shadow-md rounded-md">
          <h1 className="mb-6 tracking-wide font-extrabold text-3xl">
            Finished
          </h1>

          <p className="text-gray-700">You have answered every question.</p>

          <Button text="View Results" link={pagePaths.resultsPage} />
        </article>
      ) : (
        <Question
          category={question.category}
          question={question.question}
          questionIndex={questionIndex}
          totalQuestions={totalQuestions}
          submitAnswer={submitAnswer}
        />
      )}
    </main>
  );
};
