import { AnswerButton } from "../AnswerButton";
import { CompletedQuestions } from "../CompletedQuestions";
import type { QuestionProps } from "./types";

export const Question = ({
  category,
  question,
  questionIndex,
  totalQuestions,
  submitAnswer,
}: QuestionProps) => {
  return (
    <article className="bg-white p-12 pb-8 container max-w-md text-left shadow-md rounded-md">
      <h2 className="mb-6 text-xl font-semibold text-gray-900">{category}</h2>

      <p className="text-gray-700">{question}</p>

      <div className="flex gap-10 justify-center items-center">
        <AnswerButton text="True" type="true" onAnswer={submitAnswer} />
        <AnswerButton text="False" type="false" onAnswer={submitAnswer} />
      </div>

      <CompletedQuestions
        currentQuestion={questionIndex + 1}
        totalQuestions={totalQuestions}
      />
    </article>
  );
};
