import React from 'react'

function Grids() { 
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 p-8 sm:grid-cols-2 lg:grid-cols-3">
      <div className="rounded-lg bg-red-200 p-8">Card 1</div>  
      <div className="rounded-lg bg-green-200 p-8">Card 2</div> 
      <div className="rounded-lg bg-blue-200 p-8">Card 3</div>  
      <div className="rounded-lg bg-yellow-200 p-8">Card 4</div>
      <div className="rounded-lg bg-purple-200 p-8">Card 5</div>
      <div className="rounded-lg bg-pink-200 p-8">Card 6</div>
    </div>
    </div>
  )
}

export default Grids

