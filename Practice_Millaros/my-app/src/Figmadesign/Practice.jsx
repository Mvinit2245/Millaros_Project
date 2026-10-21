
import { useState } from "react";

const initialItems = [
  { id: 1, label: "Complete daily tasks", avatar: "✓", color: "bg-violet-100 text-violet-700" },
  { id: 2, label: "Learn React and Tailwind", avatar: "R", color: "bg-blue-100 text-blue-700" },
  { id: 3, label: "Practice JavaScript", avatar: "J", color: "bg-amber-100 text-amber-700" },
  { id: 4, label: "Build a new project", avatar: "P", color: "bg-pink-100 text-pink-700" },
  { id: 5, label: "Review today's progress", avatar: "★", color: "bg-emerald-100 text-emerald-700" },
  { id: 6, label: "Read documentation", avatar: "D", color: "bg-cyan-100 text-cyan-700" },
  { id: 7, label: "Push code to GitHub", avatar: "G", color: "bg-orange-100 text-orange-700" },
  { id: 8, label: "Prepare for interviews", avatar: "I", color: "bg-indigo-100 text-indigo-700" },
  { id: 9, label: "Improve UI design", avatar: "U", color: "bg-rose-100 text-rose-700" },
  { id: 10, label: "Take a short break", avatar: "☕", color: "bg-teal-100 text-teal-700" },
  { id: 11, label: "Plan tomorrow's tasks", avatar: "T", color: "bg-purple-100 text-purple-700" },
];

function Practice() {
  const [items, setItems] = useState(
    initialItems.map((item) => ({ ...item, checked: false }))
  );

  const completed = items.filter((item) => item.checked).length;
  const progress = Math.round((completed / items.length) * 100);

  function toggleItem(id) {
    setItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function resetTasks() {
    setItems((current) =>
      current.map((item) => ({ ...item, checked: false }))
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 px-4 py-10 sm:py-16">
      <section className="mx-auto max-w-xl overflow-hidden rounded-3xl border border-white/70 bg-white shadow-2xl shadow-indigo-200/50">

        {/* Header */}
        <div className="bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 px-6 py-8 text-white sm:px-8">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-2xl shadow-inner">
              ✓
            </div>

            <span className="rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-semibold tracking-wider">
              MY WORKSPACE
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            My Daily Tasks
          </h1>

          <p className="mt-2 text-sm text-indigo-100 sm:text-base">
            Small steps every day lead to big results.
          </p>

          {/* Progress */}
          <div className="mt-7 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-medium">Your progress</span>
              <span className="text-lg font-bold">{progress}%</span>
            </div>

            <div
              className="h-2.5 overflow-hidden rounded-full bg-white/25"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="h-full rounded-full bg-white transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="mt-3 text-xs text-indigo-100">
              {completed} of {items.length} tasks completed
            </p>
          </div>
        </div>

        {/* List heading */}
        <div className="flex items-center justify-between px-6 pb-3 pt-6 sm:px-8">
          <div>
            <h2 className="text-lg font-bold text-gray-800">Your checklist</h2>
            <p className="mt-1 text-xs text-gray-500">
              Select a task when it's done
            </p>
          </div>

          <button
            type="button"
            onClick={resetTasks}
            className="rounded-xl px-3 py-2 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50 active:scale-95"
          >
            Reset
          </button>
        </div>

        {/* Tasks */}
        <ul className="space-y-2 px-4 pb-6 sm:px-6">
          {items.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                role="checkbox"
                aria-checked={item.checked}
                onClick={() => toggleItem(item.id)}
                className={`group flex w-full items-center gap-4 rounded-2xl border p-3.5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:p-4 ${
                  item.checked
                    ? "border-emerald-100 bg-emerald-50/70"
                    : "border-gray-100 bg-white hover:border-indigo-200 hover:bg-indigo-50/40"
                }`}
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg font-bold ${item.color}`}
                >
                  {item.avatar}
                </span>

                <span className="min-w-0 flex-1">
                  <span
                    className={`block text-sm font-semibold transition sm:text-base ${
                      item.checked
                        ? "text-gray-400 line-through"
                        : "text-gray-800"
                    }`}
                  >
                    {item.label}
                  </span>
                  <span className="mt-1 block text-xs text-gray-400">
                    Task #{String(item.id).padStart(2, "0")}
                  </span>
                </span>

                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border-2 transition-all duration-200 ${
                    item.checked
                      ? "scale-105 border-emerald-500 bg-emerald-500 text-white"
                      : "border-gray-300 bg-white group-hover:border-indigo-500"
                  }`}
                >
                  {item.checked && (
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path
                        d="m4 10 4 4 8-8"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
              </button>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <footer className="border-t border-gray-100 bg-gray-50 px-6 py-5 text-center">
          <p className="text-sm font-medium text-gray-600">
            {completed === items.length
              ? "🎉 Amazing! You completed every task!"
              : completed === 0
                ? "✨ A fresh start. Let's make today count!"
                : "💪 Keep going! You're making great progress."}
          </p>
          <p className="mt-1 text-xs text-gray-400">
            Stay focused • Stay consistent • Keep growing
          </p>
        </footer>
      </section>
    </main>
  );
}

export default Practice;
