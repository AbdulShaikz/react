import { useRef, useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import './todoDisplayStyles.css';

const TodoDisplay = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  const handleAddTodo = () => {
    if(input.trim()!==''){
      setTodos([...todos,input]);
      setInput('');
    }
  }

  const handleEditTodo = (index) => {
    inputRef.current.focus();
    const updatedTodos = [...todos];
    setInput(updatedTodos[index]);
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  }

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  }

  return (
    <div className = 'container'>
      <h1>Todo App</h1>
      <div className='todo-app-container'>
        <div className='todo-input-container'>
          <input type="text" ref={inputRef} value={input} onChange={handleInputChange} placeholder="Add a new todo" className="todo-input"/>
          <button className='btn' onClick={handleAddTodo}>Add Todo</button>
        </div>
        {
          todos.length > 0 ? (
            <div className="todo-list-container">
              <ul className='todo-items'>
                {
                  todos.map((todo,index) => (
                    <div className='todo-item-container' key={index}>
                      <li className='todo-item'>{todo}</li>
                      <MdEdit className='edit-icon' onClick={() => {handleEditTodo(index)}} />
                      <MdDelete className='delete-icon' onClick={() => {handleDeleteTodo(index)}} />
                    </div>
                  ))
                }
              </ul>
            </div>
          ) : (
            <p className='no-todos'>No todos added yet!</p>
          )
        }
      </div>
    </div>
  );
}

export default TodoDisplay;