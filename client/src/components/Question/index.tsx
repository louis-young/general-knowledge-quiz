import { AnswerButton } from "../AnswerButton";
import { CompletedQuestions } from "../CompletedQuestions";
import type { QuestionProps } from "./types";

export const Question = ({
  currentQuestion,
  currentQuestionIndex,
  totalQuestionCount,
  submitAnswer,
}: QuestionProps) => {
  const { category, question } = currentQuestion;

  return (
    <article className="bg-white p-12 pb-8 container max-w-md text-left shadow-md rounded-md">
      <h2 className="mb-6 text-xl font-semibold text-gray-900">{category}</h2>

      <p className="text-gray-700">{question}</p>

      <div className="flex gap-10 justify-center items-center">
        <AnswerButton
          text="True"
          type="true"
          onClick={() => submitAnswer("true")}
        />
        <AnswerButton
          text="False"
          type="false"
          onClick={() => submitAnswer("false")}
        />
      </div>

      <CompletedQuestions
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={totalQuestionCount}
      />
    </article>
  );
};
