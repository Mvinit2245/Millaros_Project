import React from 'react'

export default function FlexBox() {
  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-100 p-8">
      <div className="flex w-full max-w-lg items-center justify-between rounded-lg bg-white p-4 shadow">
        <span>Logo</span>
        <button className="rounded bg-blue-600 px-4 py-2 text-white">
          Login
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <div className="rounded bg-red-400 p-8">Box 1</div>
        <div className="rounded bg-green-400 p-8">Box 2</div>
        <div className="rounded bg-blue-400 p-8">Box 3</div>
      </div>
    </div>
    </div>
  )
}
