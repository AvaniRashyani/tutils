import React from 'react';
import { Todolist } from './Todolist';

export const Todos=(props)=> {
    
  return (
    <div className='container'>
       <h3 >Todo List</h3>
      
    <Todolist todos={props.todos[0]}/>
    </div>
  )
}


