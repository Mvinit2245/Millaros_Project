import React from 'react'
import CardChildren from '../components/CardChildren'


function ChildrenUse() {
  return (
    <div className="min-h-screen bg-red-100 p-8 space-y-5">
      <CardChildren title={"Welcome"} >
        <p className='text-red-500'>
          Welcome to website
        </p>

      </CardChildren>

      <CardChildren title={"Welcome"}>
        <p className='text-green-500'>
          Home Page of the website <br></br>
          We are developing the website using customer requirement
        </p>

      </CardChildren>

      <CardChildren title={"Welcome"}>
        <p className='text-purple-500'>
          New User to website
        </p>

      </CardChildren>
    </div>
  )
}

export default ChildrenUse
