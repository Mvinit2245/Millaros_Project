import React from 'react'
import UserCard from '../components/UserCard'

function CardUse() {
  return (
    <div className='p-6 grid grid-cols-1 md:grid-cols-3 gap-4'>
      
      <UserCard 
      name={"Vinit Morankar"}
      email={"vinit@gmail.com"}
      role={"Web Developer"}

      />

      <UserCard
      name={"Vinit Morankar"}
      email={"vinit@gmail.com"}
      role={"Web Developer"}

      />

      <UserCard
      name={"Vinit Morankar"}
      email={"vinit@gmail.com"}
      role={"Web Developer"}

      />

      <UserCard
      name={"Vinit Morankar"}
      email={"vinit@gmail.com"}
      role={"Web Developer"}

      />

      <UserCard
      name={"Vinit Morankar"}
      email={"vinit@gmail.com"}
      role={"Web Developer"}

      />
    </div>
  )
}

export default CardUse
