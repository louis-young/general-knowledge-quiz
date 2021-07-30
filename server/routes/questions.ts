import express from "express";
import { get } from "../utilities/http";
import { formatQuestions } from "../utilities/questions";

const app = express();

export const questions = app.get("/", async (request, response) => {
  const endpoint = process.env.API_ENDPOINT_URL as string;

  try {
    const data = await get(endpoint);

    const { results: unformattedQuestions } = data;

    const questions = formatQuestions(unformattedQuestions);

    return response.status(200).json({ questions });
  } catch {
    return response.status(500).json({
      error: { message: "Something went wrong. Please try again." },
    });
  }
});
