
import { useState } from "react";

function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setError("");
    setSuccess("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name.trim()) {
      setError("Name is required.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Enter a valid email address.");
      return;
    }

    if (form.password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (form.confirmPassword != form.password) {
      setError("Password does not match");
      return;
    }

    setError("");
    setSuccess(`Registration successful for ${form.name}!`);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-md space-y-4 rounded-xl bg-white p-6 shadow-lg"
      >
        <h1 className="text-2xl font-bold">Create Account</h1>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full name"
          className="w-full rounded-lg border p-3"
        />

        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email address"
          className="w-full rounded-lg border p-3"
        />

        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password (minimum 8 characters)"
          className="w-full rounded-lg border p-3"
        />
        <input
          name="confirmPassword"
          type="password"
          value={form.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          className="w-full rounded-lg border p-3"
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 p-3 font-semibold text-white hover:bg-blue-700"
        >
          Register
        </button>

        {error && (
          <p role="alert" className="text-sm text-red-600">
            {error}
          </p>
        )}

        {success && (
          <p role="status" className="text-sm text-green-600">
            {success}
          </p>
        )}
      </form>
    </div>
  );
}

export default RegisterForm;
