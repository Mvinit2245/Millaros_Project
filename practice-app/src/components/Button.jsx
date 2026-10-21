import React from 'react'

function Button({text, color, hover}) {
  return (
    <div>
      <button className={`px-4 py-2 rounded-lg text-white ${color} ${hover}`}>
       {text}
      </button>
    </div>
  )
}

export default Button
