import { useQuizContext } from "../hooks/context/useQuizContext";

export const ResultsPage = () => {
  const { results } = useQuizContext();

  return (
    <main className="bg-gray-100 min-h-screen flex justify-center items-center">
      <section className="p-12 container text-center">
        <h1 className="mb-8 tracking-wide font-extrabold text-4xl md:text-5xl">
          Results
        </h1>

        <ul>
          {results.map((result) => (
            <li key={result.question}>
              <p>{result.question}</p>
              <p>{String(result.hasAnsweredCorrectly)}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};
