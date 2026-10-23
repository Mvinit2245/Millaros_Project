import React from 'react'

function CardChildren(props) {
  return (
    <div className='bg-white p-6 rounded-xl shadow-md border border-black-200 hover:bg-blue-200' >
        <h2 className='text-xl font-bold text-gray-800 mb-3'>
            {props.title}
        </h2>

        {props.children}
      
    </div>
  )
}

export default CardChildren
