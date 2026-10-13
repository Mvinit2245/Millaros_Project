import React from 'react'

function ZIndex() {
  return (
    <div>
      <div className="min-h-screen p-20">
      <div className="relative h-64 rounded-xl bg-blue-100 p-4">
        Parent Box

        <div className="absolute right-4 top-4 rounded bg-red-500 p-3 text-white">
          Absolute
        </div>

        <div className="absolute bottom-4 left-4 rounded bg-green-500 p-3 text-white">
          Bottom Left
        </div>
      </div>

      <button className="fixed bottom-5 right-5 z-50 rounded-full bg-blue-600 p-4 text-white shadow-lg">
        Top
      </button>
    </div>
    </div>
  )
}

export default ZIndex
