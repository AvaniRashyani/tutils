import React, { useState } from 'react'
function Darrklightmode() {
 const[userstyle,setMyStyle]=useState({
  color:'white',
  backgroundColor:'black'

 })
 
 const togglestyle=() => {
  if (userstyle.color === 'white') {
    setMyStyle({
      color: 'black',
      backgroundColor: 'white',
    })
  
  }
   else {
    setMyStyle({
      color: 'white',
      backgroundColor: 'black',
    })
   
      }
}
  return (
    <div>
        
  <input  type="checkbox" onClick={togglestyle} />

       <div style={userstyle}>
        hii
       </div>
    </div>
  )
}
export default Darrklightmode
