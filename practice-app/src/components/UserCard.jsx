import React from 'react'

function UserCard({name, role, email}) {
  return (
    <div className='p-5 border rounded-xl shadow-md '>

        <h2 className="text-xl font-bold"> {name}</h2>

        <p className='text-blue-600'>{role}</p>

        <p className='text-green-600'>{email}</p>
      
    </div>
  )
}

export default UserCard
