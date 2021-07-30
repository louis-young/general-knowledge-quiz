import { Question } from "../components/Question";
import { useQuestionsQuery } from "../hooks/queries/useQuestionsQuery";

const category = "Science and Nature";
const question =
  "The value of one Calorie is different than the value of one calorie.";
const currentQuestion = 7;
const totalQuestions = 10;

export const QuizPage = () => {
  const { questionsData, isLoadingQuestions, hasQuestionsError } =
    useQuestionsQuery();

  console.log(questionsData);

  return (
    <main className="bg-gray-100 h-screen flex justify-center items-center">
      <Question
        category={category}
        question={question}
        currentQuestion={currentQuestion}
        totalQuestions={totalQuestions}
      />
    </main>
  );
};
