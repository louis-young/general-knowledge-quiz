import { useQuery } from "react-query";
import { get } from "../../../api";
import { getQuestionsQueryKey } from "../../../utilities/queryKeys";

const endpoint = process.env.REACT_APP_API_ENDPOINT_URL as string;

export const useQuestionsQuery = () => {
  const queryKey = getQuestionsQueryKey();

  const {
    data: questionsData,
    isLoading: isLoadingQuestions,
    isError: hasQuestionsError,
    refetch: refetchQuestions,
  } = useQuery(queryKey, () => get(endpoint));

  return {
    questionsData,
    isLoadingQuestions,
    hasQuestionsError,
    refetchQuestions,
  };
};
