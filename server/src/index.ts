import express from "express";
import cors from "cors";
import { config } from "dotenv";

config();
const app = express();

app.use(cors());
app.use(express.json());
const api_key = process.env.API_KEY;
const api_secret = process.env.API_SECRET;
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
