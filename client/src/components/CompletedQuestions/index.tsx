import type { CompletedQuestionsProps } from "./types";

export const CompletedQuestions = ({
  question,
  totalQuestions,
}: CompletedQuestionsProps) => {
  return (
    <p className="text-gray-400 text-sm text-center mt-8">
      {question} of {totalQuestions}
    </p>
  );
};
