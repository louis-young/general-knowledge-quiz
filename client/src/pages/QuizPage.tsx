import { useQuizContext } from "../hooks/context/useQuizContext";
import { Question } from "../components/Question";
import { PuffLoader as Loader } from "react-spinners";

export const QuizPage = () => {
  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestionCount,
    isLoadingQuestions,
    hasQuestionsError,
    submitAnswer,
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
      <Question
        currentQuestion={currentQuestion}
        currentQuestionIndex={currentQuestionIndex}
        totalQuestionCount={totalQuestionCount}
        submitAnswer={submitAnswer}
      />
    </main>
  );
};
