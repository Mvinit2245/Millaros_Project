import React from 'react'
import UserCard from '../components/UserCard'

function Mapuse() {

    const users=[
        {id:1,  name:"Vinit", role:"Developer", email:"vin@gmail.com", salary:"50000"},
        {id:2,  name:"Raj", role:"Tester", email:"raj@gmail.com", salary:"60000"},
        {id:3,  name:"Ritesh", role:"Debugger",email:"rit@gmail.com", salary:"70000"},
    ]
  return (
    <div>
        {users.map((user)=>(
            <UserCard
            key={user.id}
            name={ `Name = ${user.name}`}
            role={user.role}
            email={user.email}
            salary={user.salary}
            />
        )

        )}
      
    </div>
  )
}

export default Mapuse
