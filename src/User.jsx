import React from 'react'
import {useState} from 'react' 

const User = () => {
  const[count,setCount]= useState(0)
  console.log(count);

  const handleDecrement=()=>{
    console.log("dec")
    setCount(count-1)

  }
  const handleIncrement=()=>{
    setCount(count+1)
  }

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default User
