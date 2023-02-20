import { StreamChat } from "stream-chat";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import Cookies from "universal-cookie";

function App() {
  const api_key = "fj8agpx9v38j";
  const cookies = new Cookies();
  const token = cookies.get("token");
  const client = StreamChat.getInstance(api_key);

  if (token) {
    client
      .connectUser(
        {
          id: cookies.get("userId"),
          firstName: cookies.get("firstName"),
          lastName: cookies.get("lastName"),
          username: cookies.get("username"),
          hashedPassword: cookies.get("hashedPassword"),
        },
        token
      )
      .then((user) => {
        console.log(user);
      });
  }
  return (
    <div className="App">
      <SignUp /> <Login />
    </div>
  );
}

export default App;
