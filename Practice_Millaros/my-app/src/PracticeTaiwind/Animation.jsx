import React from 'react'

function Animation() {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-8 p-8">
      <button className="rounded-lg bg-blue-600 px-6 py-3 text-white transition-all duration-300 hover:scale-110 hover:bg-blue-800">
        Smooth Hover
      </button>

      <div className="size-20 animate-spin rounded-lg border-4 border-blue-500 border-t-transparent"></div>

      <div className="size-16 animate-pulse rounded-xl bg-purple-500"></div>

      <div className="size-16 animate-bounce rounded-full bg-green-500"></div>
    </div>
    </div>
  )
}

export default Animation



