import React from 'react'
import { Todo } from './inputInterface'
import Singletodo from './singletodo';
import './styles.css';
interface Props{
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
const Todolist=({todos,setTodos}:Props)=>{
  return (
    <div className='todos'>
      {todos.map((todo)=>(
        <Singletodo todo={todo}
        key={todo.id}
        todos={todos}
        setTodos={setTodos}/>
      ))}
    </div>
  )
}

export default Todolist
