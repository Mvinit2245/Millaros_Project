import React from 'react'
import Button from './components/Button'

function App() {
  return (
    <div className="p-8 flex gap-4">
      <Button text="Login" color="bg-blue-500 hover:bg-blue-800" />
      <Button text="Reset" color="bg-green-500"/>
      <Button text="Register" color="bg-yellow-500"/>
    </div>
  )
}

export default App
