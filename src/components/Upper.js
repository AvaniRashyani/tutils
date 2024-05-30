import React from 'react'

export default function Upper() {
    let mystyle={
        color:'black',
        backgroundColor:'black',
        display:'flex',
        padding:'4px',
        margin:'2px',
    }
    let st={
        padding:'7px',
        margin:'10px'

    }
  return (
    <div>
        <nav style={mystyle}>
      <li style={st}><a href='#'>HOME</a></li>
      <li style={st}><a href='#'>TODO-LIST</a></li>
      <li style={st}><a href='#'>ABOUTUS</a></li>
      <li style={st}>
        <input type='text'></input>
        <button>click</button>
      </li>
      </nav>
    </div>
  )
}
