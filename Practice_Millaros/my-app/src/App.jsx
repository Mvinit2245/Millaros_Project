
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "min-h-screen bg-gray-900 p-8 text-white" : "min-h-screen bg-gray-100 p-8 text-gray-900"}>

      <nav className="flex items-center justify-between rounded-lg bg-blue-600 p-4 text-white">
        <h1 className="text-2xl font-bold">My Website</h1>
        <button
          onClick={() => setDark(!dark)}
          className="rounded bg-white px-4 py-2 text-black"
        >
          Change Theme
        </button>
      </nav>

      <div className="mx-auto mt-10 max-w-md rounded-xl bg-white p-6 text-center shadow-lg">
        <h2 className="text-3xl font-bold text-blue-600">
          Hello React!
        </h2>

        <p className="mt-3 text-gray-600">
          Practice Tailwind CSS classes.
        </p>

        <div className="mt-5 flex items-center justify-center gap-4">
          <button
            onClick={() => setCount(count - 1)}
            className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-700"
          >
            -
          </button>

          <span className="text-2xl font-bold">{count}</span>

          <button
            onClick={() => setCount(count + 1)}
            className="rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-700"
          >
            +
          </button>
        </div>

        <button className="mt-6 w-full rounded-lg bg-blue-600 p-3 text-white hover:bg-blue-800">
          Get Started
        </button>
      </div>

    </div>
  );
}

export default App;
