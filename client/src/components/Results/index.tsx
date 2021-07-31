import { Result } from "../Result";
import type { ResultsProps } from "./types";

export const Results = ({ results }: ResultsProps) => {
  return (
    <ul className="text-left divide-y divide-gray-200 max-h-96 overflow-y-scroll">
      {results.map((result) => (
        <Result result={result} key={result.question} />
      ))}
    </ul>
  );
};
