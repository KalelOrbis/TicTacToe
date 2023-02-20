import { useState } from "react";
import { IUser } from "../types/types";
import Axios from "axios";
import Cookies from "universal-cookie";
export const SignUp = () => {
  const cookies = new Cookies();
  const [user, setUser] = useState<IUser>({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });
  const signUp = () => {
    Axios.post("http://localhost:3001/signup", user).then((res) => {
      const { token, userId, firstName, lastName, username, hashedPassword } =
        res.data;
      cookies.set("token", token);
      cookies.set("userId", userId);
      cookies.set("firstName", firstName);
      cookies.set("lastName", lastName);
      cookies.set("username", username);
      cookies.set("hashedPassword", hashedPassword);
    });
  };

  return (
    <div className="signUp">
      <label>Sign Up</label>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
      />
      <input
        type="text"
        name="Lastname"
        placeholder="Lastname"
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
      />
      <input
        type="text"
        name="Username"
        placeholder="Username"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button onClick={signUp}>Sign Up</button>
    </div>
  );
};
