
import { useState } from "react";

function RegisterForm() {
  const [isLogin, setIsLogin] = useState(false);

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

    if (!isLogin && !form.name.trim()) {
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

    if (!isLogin && form.confirmPassword !== form.password) {
      setError("Passwords do not match.");
      return;
    }

    setError("");

    if (isLogin) {
      setSuccess("Login form submitted successfully!");
    } else {
      setSuccess(`Account created successfully for ${form.name}!`);
    }
  }

  function toggleForm() {
    setIsLogin(!isLogin);
    setError("");
    setSuccess("");
    setForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-4">

      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl sm:p-10">

        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-3xl text-white shadow-lg">
            {isLogin ? "👋" : "🚀"}
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-gray-800">
            {isLogin ? "Welcome Back!" : "Create Account"}
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            {isLogin
              ? "Login to continue to your account"
              : "Sign up and start your journey with us"}
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="mb-6 grid grid-cols-2 rounded-xl bg-gray-100 p-1">
          <button
            type="button"
            onClick={() => {
              setIsLogin(true);
              setError("");
              setSuccess("");
            }}
            className={`rounded-lg py-3 font-semibold transition ${
              isLogin
                ? "bg-white text-indigo-600 shadow"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => {
              setIsLogin(false);
              setError("");
              setSuccess("");
            }}
            className={`rounded-lg py-3 font-semibold transition ${
              !isLogin
                ? "bg-white text-indigo-600 shadow"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            Register
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {!isLogin && (
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                Full Name
              </label>

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
              />
            </div>
          )}

          <div>
            <label className="mb-1.5 block text-sm font-semibold text-gray-700">
              Email Address
            </label>

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-semibold text-gray-700">
              Password
            </label>

            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Minimum 8 characters"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                Confirm Password
              </label>

              <input
                name="confirmPassword"
                type="password"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter your password"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
              />
            </div>
          )}

          {isLogin && (
            <div className="text-right">
              <button
                type="button"
                onClick={() => {
                  setError("Password recovery is not connected yet.");
                  setSuccess("");
                }}
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-800"
              >
                Forgot Password?
              </button>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <p
              role="alert"
              className="rounded-lg bg-red-50 p-3 text-sm text-red-600"
            >
              {error}
            </p>
          )}

          {/* Success Message */}
          {success && (
            <p
              role="status"
              className="rounded-lg bg-green-50 p-3 text-sm text-green-700"
            >
              {success}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 py-3.5 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl active:translate-y-0"
          >
            {isLogin ? "Login to Account →" : "Create Account →"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-7 text-center text-sm text-gray-500">
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          <button
            type="button"
            onClick={toggleForm}
            className="ml-1 font-bold text-indigo-600 hover:text-purple-700"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>

        <p className="mt-6 text-center text-xs text-gray-400">
          © 2026 Your App. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default RegisterForm;
