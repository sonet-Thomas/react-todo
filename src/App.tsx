import React, { useState } from 'react';
import './App.css';
import InputField from './Inputfield/InputField';
import { Todo } from './Inputfield/inputInterface';
import Todolist from './Inputfield/todolist';
// let age1 :number | string="sonet";
// function name(name:any){
//   return(
//     <div>
//     {name}
//     </div>
//   )
// }

const App:React.FC=()=> {
  const [todo,setTodo]=useState<string>("");
  const [todos,setTodos]=useState<Todo[]>([]);
  const handleadd=(e:React.FormEvent)=>{
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo,isDone:false}])
      setTodo("");
    }
  };
  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleadd}/>
      <Todolist todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
