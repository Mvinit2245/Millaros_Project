import React from 'react'

function BgColor() {
  return (
    <div>
      <div className="min-h-screen space-y-5 p-8">
      <div className="rounded-xl bg-blue-600 p-8 text-white">
        Solid Background
      </div>

      <div className="rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 p-8 text-white">
        Horizontal Gradient
      </div>

      <div className="rounded-xl bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 p-8 text-white">
        Multi-Color Gradient
      </div>
    </div>
    </div>
  )
}

export default BgColor
