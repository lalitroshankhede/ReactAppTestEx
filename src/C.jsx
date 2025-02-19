import React, { useContext } from 'react'
import { GreetContext} from './A'

// If Without useContext() Method
 
/*
const C = () => {
  return (
     <GreetContext.Consumer>{(val)=>{
 
         return(


            <GreetContext2.Consumer>

            {
                (val2)=>{
                    return <h1> Greet: {val} {val2}</h1>
                }

            }

            </GreetContext2.Consumer>

         )   

     }
        }
       
     </GreetContext.Consumer>
  )
}

*/

// With useContext() method 

const C = () => {
    const useCont=useContext(GreetContext)
 
    return (
     <h1> Greet {useCont.greet} {useCont.greet2}  </h1>
    )
  }
export default C
