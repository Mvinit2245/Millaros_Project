import React from 'react'

function Borders() {
  return (
    <div>
      <div className="flex flex-wrap gap-6 bg-gray-100 p-8">
      <div className="rounded border-20 border-blue-500 bg-white p-6">
        Border
      </div>

      <div className="rounded-2xl border border-gray-500 bg-white p-6 shadow-xl">
        Rounded Card
      </div>

      <div className="rounded-full bg-orange-600 px-8 py-4 text-white shadow-xl">
        Pill Button
      </div>
    </div>
    </div>
  )
}

export default Borders
