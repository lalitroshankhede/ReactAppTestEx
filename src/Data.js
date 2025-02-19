import React, { useState } from 'react'
import datas from "./datas.json";

const Data = () => {

    const [nData,setnData]=useState(datas);
   
 
      const handleRemove=(itemId)=>{
          setnData(nData.filter(item=>item.id!==itemId))

      }

      const handleUpdate=(itemId)=>{
        setnData(nData.map(item=>{
            if(item.id===itemId)
            {
                return{name:"newName"+item.id}
            }
            else{
                return item;
            }
        }))

    }


  return (
    <div>
      <ul>
        {
        nData.map(items=>
          <li key={items.id}>  
            {items.name}
           &nbsp; <button onClick={()=> handleUpdate(items.id)}> Update</button>
           &nbsp; <button onClick={()=> handleRemove(items.id)}> Remove</button>
          </li>
        )
        
        }
      
      </ul>
<button onClick={()=> setnData([])}>Clear</button>

    </div>
  )
}

export default Data
