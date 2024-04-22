import React from 'react'
import { useState } from 'react';
const Randy = () => {
    const [name, SetName]=useState('Jose')
    const handleNameChange=()=>{
        const names=['bob','marley','ziggy'];
        const a =Math.floor(Math.random() * 3);
        return SetName(names[a]);
    }

    const handleClick=()=>{
        console.log("you clicked it ")
    }
    const handleClick2=(name)=>{
        console.log(`${name} was clicked`)
    }
    const handleClick3=(e)=>{
        console.log(e.target.innerText)
        console.log(e)
        console.log(e.target)
    }
  return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello {name}
        </p>
        <button onClick={handleNameChange}>Change name</button>
        <button onClick={()=>handleClick2('Jose')}>Click it</button>
        <button onClick={(e)=>handleClick3(e)}>Click it</button>
    </main>
  )
}

export default Randy
