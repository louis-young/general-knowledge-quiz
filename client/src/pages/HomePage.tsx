import { Link } from "react-router-dom";
import { pagePaths } from "../constants/pagePaths";

export const HomePage = () => {
  return (
    <main className="bg-gray-100 h-screen flex justify-center items-center">
      <section className="p-12 container text-center">
        <h1 className="mb-8 tracking-wide font-extrabold text-4xl md:text-5xl">
          General Knowledge Quiz
        </h1>

        <p className="text-gray-700 text-lg">
          You will be presented with 10 true or false questions.
        </p>

        <Link
          to={pagePaths.quizPage}
          className="inline-block mt-8 px-8 py-3 font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-indigo-400 to-blue-800 hover:from-indigo-600 hover:to-blue-900"
        >
          Start Quiz
        </Link>
      </section>
    </main>
  );
};