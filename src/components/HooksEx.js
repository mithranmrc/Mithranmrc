import { ContactsOutlined, SensorOccupiedOutlined } from '@mui/icons-material'
import React, { useEffect } from 'react'

 function HooksEx() {
 const[count,setCount]=useState(0)
 useEffect(()=>{
    document.tittle="hi";
    setCount(count+0)
    console.log({count})
 }
    
 )
 let inc=()=>{
    setCount(count+1)
 }
  return (
    <div>
        {count}
        <button>onClick={()=>{setCount(count+1)}}</button>
        <button>onClick={()=>{setCount(count-1)}}</button>
    </div>
  )
}
