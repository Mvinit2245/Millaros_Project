import React from 'react'

function UserCard({
  name, 
  role, 
  email, 
  salary
}) {
  return (
    <div className='p-5 border rounded-xl shadow-md '>

        <h2 className="text-xl font-bold"> {name}</h2>

        <p className='text-blue-600'>{role}</p>

        <p className='text-green-600'>{email}</p>
        <p className='text-red-600'>{salary}</p>
      
    </div>
  )
}

export default UserCard
