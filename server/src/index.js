import express from "express";
import cors from "cors";
import { StreamChat } from "stream-chat";
import { v4 as uuidv4 } from "uuid";
import bycrpt from "bcrypt";

const app = express();

app.use(cors());
app.use(express.json());
const api_key = "fj8agpx9v38j";
const api_secret =
  "j787tjv8h2me57x5yckd562t9fn37dfg9gbj3m92cccc85hgqyhytctxrcass5ze";
const serverClient = StreamChat.getInstance(api_key, api_secret);

app.post("/signup", async (request, result) => {
  try {
    const { firstName, lastName, username, password } = request.body;
    const userId = uuidv4();
    const hashedPassword = await bycrpt.hash(password, 10);
    const token = serverClient.createToken(userId);
    result.json({
      token,
      userId,
      firstName,
      lastName,
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
