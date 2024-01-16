import React, { useState } from 'react'

const App = () => {
  let [name,setName]=useState("")
  let [email,setEmail]=useState("")
  let [roll,setRoll]=useState("")
  let [reg,setReg]=useState("")

  let handleSubmit=()=>{
    console.log(name);
    console.log(email);
    console.log(roll);
    console.log(reg);
  }
  return (
    <div>
      <input onChange={(e)=>setName(e.target.value)} placeholder='Name' className='border boreder-solid border-black' type="text" />
      <input onChange={(e)=>setEmail(e.target.value)} placeholder='Email' className='border boreder-solid border-black' type="text" />
      <input onChange={(e)=>setRoll(e.target.value)} placeholder='Roll' className='border boreder-solid border-black' type="text" />
      <input onChange={(e)=>setReg(e.target.value)} placeholder='Registration' className='border boreder-solid border-black' type="text" />
      <button className='bg-blue-400 px-10 py-3 rounded ' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default App