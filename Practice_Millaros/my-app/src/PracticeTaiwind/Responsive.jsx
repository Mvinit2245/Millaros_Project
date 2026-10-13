import React from 'react'

function Responsive() {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-12">
      <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
        Responsive Website
      </h1>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded bg-blue-300 p-8">Card 1</div>
        <div className="rounded bg-green-300 p-8">Card 2</div>
        <div className="rounded bg-purple-300 p-8">Card 3</div>
      </div>

      <p className="mt-6 hidden text-gray-700 md:block">
        This text appears at medium screen sizes and above.
      </p>
    </div>
    </div>
  )
}

export default Responsive
