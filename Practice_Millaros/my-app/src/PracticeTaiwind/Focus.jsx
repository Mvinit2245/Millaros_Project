// Hover, Focus and Active States
// State variants let you change styling when a user interacts with a button or input.
import React from 'react'

function Focus() {
  return (
    <div>
      <div className="space-y-6 p-8">
      <button className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-red-800 active:scale-100">
        Hover or Click Me
      </button>

      <input
        type="text"
        placeholder="Enter your name"
        className="block w-full max-w-sm rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-800 focus:ring-2 focus:ring-blue-200"
      />

      <button className="rounded-lg bg-green-600 px-6 py-3 text-white transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-900">
        Focus Me
      </button>
    </div>
    </div>
  )
}

export default Focus
