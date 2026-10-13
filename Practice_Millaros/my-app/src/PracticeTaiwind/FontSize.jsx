import React from 'react'

function FontSize() {
  return (
    <div>
      <div className="mx-auto max-w-xl space-y-5 p-8">
      <h1 className="text-4xl font-extrabold tracking-tight text-blue-600">
        Tailwind Typography
      </h1>

      <h2 className="text-2xl font-semibold">
        Learn React
      </h2>

      <p className="text-base leading-8 text-gray-600">
        Practice font sizes, text colors, line spacing, alignment,
        and font weights using Tailwind CSS utilities.
      </p>

      <p className="text-center text-lg font-medium italic">
        Learn by doing!
      </p>
    </div>
    </div>
  )
}

export default FontSize
