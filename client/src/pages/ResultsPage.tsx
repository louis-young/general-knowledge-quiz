import { pagePaths } from "../constants/pagePaths";
import { useQuizContext } from "../hooks/context/useQuizContext";
import { getCorrectAnswers } from "../utilities/results";
import { Results } from "../components/Results";
import { Button } from "../components/Button";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const ResultsPage = () => {
  const { hasFinishedQuiz, results, totalQuestions } = useQuizContext();

  const history = useHistory();

  useEffect(() => {
    if (hasFinishedQuiz) {
      return;
    }

    history.push(pagePaths.homePage);
  }, [hasFinishedQuiz, history]);

  const correctAnswers = getCorrectAnswers(results);

  return (
    <main className="bg-gray-100 min-h-screen flex justify-center items-center">
      <section className="bg-white py-10 px-6 container max-w-md text-center shadow-md rounded-md">
        <h1 className="tracking-wide font-extrabold text-3xl">Results</h1>

        <p className="text-gray-600 my-6">
          You got {correctAnswers} answers correct out of {totalQuestions}.
        </p>

        <Results results={results} />

        <Button text="Play Again" link={pagePaths.homePage} />
      </section>
    </main>
  );
};
