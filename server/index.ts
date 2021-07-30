import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { questions } from "./routes/questions";

dotenv.config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Application listening on port ${PORT}...`));

app.use("/questions", questions);
