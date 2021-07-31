import { Link } from "react-router-dom";
import type { ButtonProps } from "./types";

export const Button = ({ text, link }: ButtonProps) => {
  return (
    <Link
      to={link}
      className="inline-block mt-8 px-8 py-3 font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-indigo-400 to-blue-800 hover:from-indigo-600 hover:to-blue-900"
    >
      {text}
    </Link>
  );
};
