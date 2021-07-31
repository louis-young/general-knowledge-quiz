import { pagePaths } from "../constants/pagePaths";
import { Button } from "../components/Button";

export const HomePage = () => {
  return (
    <main className="bg-gray-100 min-h-screen flex justify-center items-center">
      <section className="p-12 container text-center">
        <h1 className="mb-8 tracking-wide font-extrabold text-4xl md:text-5xl">
          Quiz
        </h1>

        <p className="text-gray-700 text-lg">
          You will be presented with 10 true or false questions.
        </p>

        <Button text="Start Quiz" link={pagePaths.quizPage} />
      </section>
    </main>
  );
};
