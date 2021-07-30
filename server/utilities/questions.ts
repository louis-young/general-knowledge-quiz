import type { UnformattedQuestion } from "../types/question";

export const formatQuestions = (
  unformattedQuestions: UnformattedQuestion[]
) => {
  const formattedQuestions = unformattedQuestions.map(
    (unformattedQuestion) => ({
      category: unformattedQuestion.category,
      question: unformattedQuestion.question,
      answer: unformattedQuestion.correct_answer.toLowerCase(),
    })
  );

  return formattedQuestions;
};
