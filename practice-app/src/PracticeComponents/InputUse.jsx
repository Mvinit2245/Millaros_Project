import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

function InputUse() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert("Data Sumitted Successfully");
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-5"
      >
        <h1 className="text-3xl font-bold text-center">
          Login
        </h1>

        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

       <Button text="Login" color="bg-blue-600 hover:bg-blue-700 block mx-auto"
       />
      </form>
    </div>
  );
}

export default InputUse;