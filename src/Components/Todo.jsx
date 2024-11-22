import React, { useState } from 'react'
import "../index.css";
const Todo = () => {
  const [todos,setTodos]=useState([]);
  const [Input,setInput]=useState("");

  const handleclick=()=>{
    setTodos((todos)=>{
      return todos.concat({
        text:Input, id:Math.floor(Math.random()*10),
      });
    });
    setInput("");
  }
  const removeTodo=(id)=>setTodos((todos)=>todos.filter((t)=>t.id!=id));
  return (
    <div className='container'>
    <input type="text"  placeholder='New Todo' value={Input} onChange={(e)=>setInput(e.target.value)} />  
    <button onClick={handleclick}>Submit</button>
    <ul className="todos-list">
      {todos.map(({text,id})=>(
        <li className="todo" key={id}>
          <span>{text}</span>
          <button className='close' onClick={()=>removeTodo(id)}>X</button>

        </li>
      ))}

    </ul>
    </div>
  )
}

export default Todo