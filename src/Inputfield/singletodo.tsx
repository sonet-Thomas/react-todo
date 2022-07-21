import React, {  useEffect, useRef, useState } from 'react'
import {Todo} from './inputInterface'
import {AiFillEdit,AiFillDelete} from "react-icons/ai"
import {MdDone} from "react-icons/md"
import './styles.css';
type props={
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
const Singletodo = ({ todo, todos, setTodos }: props) => {
    const [edit,setEdit]=useState<boolean>(false);
    const [editTodo,setEditTodo]=useState<string>(todo.todo);
    const handleDone = (id: number) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
    };
const handleDelete=(id:number)=>{
    setTodos(todos.filter((todo)=>todo.id!==id));
};
const handleInput=(e:React.FormEvent,id:number)=>{
e.preventDefault();
setTodos(todos.map((todo)=>todo.id===id?{...todo,todo:editTodo}:todo));
setEdit(false);
}

const inputel=useRef<HTMLInputElement>(null);
useEffect(()=>{
    inputel.current?.focus();
},[edit]) 
  return (
    <div>
      <form className="todo_single" onSubmit={(e)=>handleInput(e,todo.id)}>
        {edit?(<input 
        ref={inputel}
        value={editTodo} onChange={(e)=>setEditTodo(e.target.value)}/>):(todo.isDone?(<s>{todo.todo}</s>):(
            <span className="todo_sngle_text">{todo.todo}
            </span>))}
        
            
            
        
            <span onClick={()=>{
                if(!edit && !todo.isDone){
                    setEdit(!edit)
                }
            }}><AiFillEdit/></span>
            <span onClick={()=>{handleDelete(todo.id)}}><AiFillDelete/></span>
            <span onClick={()=>{handleDone(todo.id)}}><MdDone/></span>
        
      </form>
    </div>
  )
}

export default Singletodo 
