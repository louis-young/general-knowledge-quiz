import { Cross } from "../Cross";
import { Tick } from "../Tick";
import type { ResultProps } from "./types";

export const Result = ({ result }: ResultProps) => {
  return (
    <li className="py-5 px-4 hover:bg-gray-50 flex justify-between items-center gap-6">
      <div className="min-w-0 flex-1">
        <p className="mb-2 text-md font-medium text-gray-900 truncate">
          {result.category}
        </p>

        <p className="text-sm text-gray-500 truncate">{result.question}</p>
      </div>

      <div className="flex-shrink-0">
        {result.hasAnsweredCorrectly ? (
          <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-100">
            <Tick />
          </div>
        ) : (
          <div className="flex items-center justify-center h-6 w-6 rounded-full bg-red-100">
            <Cross />
          </div>
        )}
      </div>
    </li>
  );
};
