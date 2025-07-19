import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return; 
    setTodos([...todos, inputValue]);
    setInputValue(""); 
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} placeholder="Add a new todo" onChange={(e)=>setInputValue(e.target.value)}/>
        <button type="submit">Add Todo</button>
      </form>
      {todos.length > 0 && <ul>
        {todos.map((todo,index) => (
          console.log(index),
          <div key={index}>
            <li>{todo}</li>
            <button 
              onClick={
                () => setTodos(todos.filter((_, i) => i !== index))
              }>
                Delete
            </button>
          </div>
        ))}
        </ul>}
    </div>
  )
}

export default TodoList