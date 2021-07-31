import type { Result } from "../types/result";

export const getCorrectAnswers = (results: Result[]) => {
  const correctAnswerCount = results.reduce(
    (accumulator, result) =>
      result.hasAnsweredCorrectly ? accumulator + 1 : accumulator,
    0
  );

  return correctAnswerCount;
};
