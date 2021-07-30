import { useQuery } from "react-query";
import { get } from "../../../api";
import { getQuestionsQueryKey } from "../../../utilities/queryKeys";

const endpoint = "http://localhost:5000/questions";

export const useQuestionsQuery = () => {
  const queryKey = getQuestionsQueryKey();

  const {
    data: questionsData,
    isLoading: isLoadingQuestions,
    isError: hasQuestionsError,
  } = useQuery(queryKey, () => get(endpoint), { retry: false });

  return { questionsData, isLoadingQuestions, hasQuestionsError };
};
