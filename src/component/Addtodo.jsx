import React from 'react'
import { useState } from 'react'

export const Addtodo = ({addTodo}) => {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
        const submit =(e)=>{
        e.preventDefault();
        if(!title || ! desc)
        {
            alert("Title & Description can't be Blank")
        }
        else{
        addTodo(title,desc);
          setTitle("");
          setDesc("");
        }
    }
  return (
<div className='container my-3'>
    <h3>Add a Todo</h3>
<form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Add a Todo Title</label>
    <input type="text" value ={title} onChange={(e)=>{
        setTitle(e.target.value)
    }}
    className="form-control" id="title" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="descr" className="form-label">Todo description</label>
    <input type="text" value ={desc} onChange={(e)=>{setDesc(e.target.value)
    }} className="form-control" id="desc"/>
  </div>
  <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
</form>
</div>

  )
}
