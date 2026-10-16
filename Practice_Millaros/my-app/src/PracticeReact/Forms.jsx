import { useState } from "react";

function Forms() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    alert(`Name: ${name}\nEmail: ${email}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Registration Form</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <br /><br />

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />

      <br /><br />

      <button type="submit">Register</button>
    </form>
  );
}

export default Forms;