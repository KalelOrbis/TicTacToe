import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { StreamChat } from "stream-chat";
import { generateUUIDv4 as uuidv4 } from "stream-chat/dist/types/utils";
import bycrpt from "bcrypt";

config();

const app = express();

app.use(cors());
app.use(express.json());
const api_key = process.env.API_KEY!;
const api_secret = process.env.API_SECRET!;
const serverClient = StreamChat.getInstance(api_key, api_secret);

app.post("/signup", async (request, result) => {
  try {
    const { firstname, lastname, username, password } = request.body;
    const userId = uuidv4();
    const hashedPassword = await bycrpt.hash(password, 10);
    const token = serverClient.createToken(userId);
    result.json({
      token,
      userId,
      firstname,
      lastname,
      username,
      hashedPassword,
    });
  } catch (error) {
    result.json(error);
  }
});
app.post("/login");
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
