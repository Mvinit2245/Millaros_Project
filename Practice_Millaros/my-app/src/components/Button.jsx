import React from 'react'


function Buttons({text,color}) {
  return (
    <div>
      <button 
       className={`px-5 py-2 rounded-lg text-white font-medium
        hover:opacity-80 transition ${color}`}
        >
        
        {text}
      </button>
    </div>
  )
}

export default Buttons
