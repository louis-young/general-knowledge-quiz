import classNames from "classnames";
import type { AnswerButtonProps } from "./types";

export const AnswerButton = ({ text, type, onAnswer }: AnswerButtonProps) => {
  const answerButtonClassNames = classNames({
    "inline-block mt-8 px-8 py-3 font-medium rounded-md shadow-sm text-white bg-gradient-to-r":
      true,
    "from-green-400 to-green-700 hover:from-green-600 hover:to-green-800":
      type === "true",
    "from-red-400 to-red-700 hover:from-red-600 hover:to-red-800":
      type === "false",
  });

  const handleClick = () => {
    onAnswer(type);
  };

  return (
    <button onClick={handleClick} className={answerButtonClassNames}>
      {text}
    </button>
  );
};
