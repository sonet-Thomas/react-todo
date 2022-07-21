import React, { useRef } from 'react'
import './styles.css';
interface Props{
    todo:string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd:(e:React.FormEvent)=>void;
}

const InputField:React.FC<Props>=({todo,setTodo,handleAdd})=> {
    const inp=useRef<HTMLInputElement>(null);
  return (
    <form className='input' onSubmit={(e)=>{handleAdd(e)
    inp.current?.blur();
    }}>
      <input type="input" placeholder='Enter a task' className="input_box"onChange={(e)=>setTodo(e.target.value)}
      value={todo}
      />
      <button className="input_submit" type="submit">Go</button>
    </form>
  )
}

export default InputField
