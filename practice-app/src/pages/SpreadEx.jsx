import React from 'react'
import { useState } from 'react';
import Button1 from '../components/Button1';

function SpreadEx() {
   const [user, setUser] = useState({
    name: "Vinit",
    age: 22
  });

  function updateAge() {
    alert(`Age Updated`);
    setUser({
      ...user,
      age: 23
      
    });
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>

      <Button1
      text="Update Age"
      onClick={updateAge}
      color='red'
      
      />
    </div>
  );
}

export default SpreadEx;
