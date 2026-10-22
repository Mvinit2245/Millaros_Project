import React from 'react'
import Button from '../components/Button'

function Login() {
  return (
    <div className=" p-50 flex justify-center gap-5">
      <Button text="Login"  color="bg-blue-500 hover:bg-blue-800 "  />
      <Button text="Reset" color="bg-green-500 hover:bg-green-800"/>
      <Button text="Register" color="bg-orange-500 hover:bg-orange-800"/>
    </div>
  )
}

export default Login
