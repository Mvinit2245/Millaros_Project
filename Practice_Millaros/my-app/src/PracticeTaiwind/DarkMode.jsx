import { useState } from "react";

function DarkMode() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "min-h-screen bg-gray-900 p-8 text-white" : "min-h-screen bg-gray-100 p-8 text-gray-900"}>
      <button
        onClick={() => setDark(!dark)}
        className="rounded bg-blue-600 px-5 py-3 text-white"
      >
        {dark ? "Light Mode" : "Dark Mode"}
      </button>

      <div className={dark ? "mt-8 rounded-xl bg-gray-800 p-8" : "mt-8 rounded-xl bg-white p-8 shadow"}>
        <h1 className="text-3xl font-bold">Theme Practice</h1>
        <p className={dark ? "mt-3 text-gray-300" : "mt-3 text-gray-600"}>
          Change the theme using the button.
        </p>
      </div>
    </div>
  );
}

export default DarkMode;