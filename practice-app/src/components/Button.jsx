import React from 'react'

function Button({text, color, onClick}) {
  return (
    <div>
      <button className={`px-4 py-2 rounded-xl text-white ${color} `}>
       {text}
       {onClick()}
      </button>
    </div>
  )
}

export default Button
