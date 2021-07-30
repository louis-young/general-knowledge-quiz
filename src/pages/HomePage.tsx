import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <article className="p-12 container text-center">
        <h2 className="text-indigo-500 text-xl font-bold">
          Can you score 100%?
        </h2>

        <h1 className="pt-6 pb-8 tracking-wide font-extrabold text-4xl md:text-5xl">
          Welcome to the Quiz
        </h1>

        <p className="text-gray-700 text-lg">
          You will be presented with 10 true or false questions.
        </p>

        <Link
          to="/quiz"
          className="inline-block mt-8 px-8 py-3 font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-indigo-400 to-blue-800 hover:from-indigo-600 hover:to-blue-900"
        >
          Start Quiz
        </Link>
      </article>
    </section>
  );
};
