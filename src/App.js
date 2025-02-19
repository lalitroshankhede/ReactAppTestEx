 import { useState } from 'react';
import '../src/App.css'

function App() {

     const [count,setCount]=useState(0);

    

       const handleValChangePlus=()=>{

         setCount(count+1);
       }

       const handleValChangeMinus=()=>{

         if(count>0)
         {
            setCount(count-1);
         }
       
      }

    return (
     
        <div>
            <h1>{count}</h1>
            <button onClick={handleValChangePlus}>+</button>
            <button onClick={handleValChangeMinus}>-</button>
        </div>
             
    )
}


const Hello=()=>{
 
    return(
        <>
        <h1>Welcome Mr. Lalit</h1>
        </>
    )

}

export default App;
 export {Hello}
export const value="Joker";



