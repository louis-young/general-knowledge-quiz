import type { CompletedQuestionsProps } from "./types";

export const CompletedQuestions = ({
  currentQuestion,
  totalQuestions,
}: CompletedQuestionsProps) => {
  return (
    <p className="text-gray-400 text-sm text-center mt-8">
      {currentQuestion} of {totalQuestions}
    </p>
  );
};
