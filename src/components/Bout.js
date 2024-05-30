import React,{ useState } from "react";
export default function Bout() {
  const [myStyle, setMyStyle] = useState({
    color: 'white',
    backgroundColor: 'black',
  })

  const [btnMy,setbtn] = useState('dark mode')

  
   const togglestyle=() => {
   
    if (myStyle.color === 'white') {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
       
      })
      setbtn("dark mode")
      setInterval(() => {
        document.title='darkmode is amazing'
      }, 200);
      setbtn("dark mode")
      
   
    }
     else {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
      })
      setbtn("light mode")
      setInterval(() => {
        document.title='light is amazing'
      }, 200);
      setbtn("dark mode")
      
        }
  }
  return (
    <>
      <h1 style={myStyle}>hii,i am trying to toggle the content</h1>
      <button onClick={togglestyle}>{btnMy}</button>
    </>
  );
}
