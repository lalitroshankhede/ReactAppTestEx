import React, { useEffect, useState } from 'react'

const USEEffectEx = () => {

const[clicked,setClicked]=useState();
const [count,setCount]=useState(0);    


useEffect(()=>{
   
    return(()=>{
        console.log("return of use State")
    })
},[count])

  return (
    <div>
      <button onClick={()=>setClicked('Subscribe')}>Subscribe</button>
      <br/>
      <hr/>
      <button onClick={()=>setClicked('To')}>To</button>
      <br/>
      <hr/>
      <button onClick={()=>setClicked('DropXOut')}>DropXoUt</button>
      <h1>{clicked}</h1>

      <button onClick={()=>setCount(count+1)}>
        Increment
      </button>
      <h1>{count}</h1>
    </div>
  )
}

export default USEEffectEx
