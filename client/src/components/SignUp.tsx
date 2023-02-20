import { useState } from "react";
import { IUser } from "../types/types";

export const SignUp = () => {
  const [user, setUser] = useState<IUser>({
    firstName: "",
    lastName: "",
    password: "",
  });
  const signUp = () => {};

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
        type="password"
        name="password"
        placeholder="Password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button onClick={signUp}>Sign Up</button>
    </div>
  );
};
