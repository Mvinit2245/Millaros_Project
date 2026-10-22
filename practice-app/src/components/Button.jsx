import React from 'react'

function Button({text, color}) {
  return (
    <div>
      <button className={`px-4 py-2 rounded-xl text-white ${color} `}>
       {text}
      </button>
    </div>
  )
}

export default Button
