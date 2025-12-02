import { useState } from 'react'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import './App.css'

function App() {
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([]);

  function handleAddTodo() {
    if (newTodo.trim() === "") return;
    setTodos([...todos, newTodo]);
    setNewTodo("");
  }

  return (
    <div className='flex flex-col items-center '>
      <h1 className='text-amber-50 text-7xl font-bold m-30'>Ryan KA To-Do App</h1>

      <TodoInput className="" newTodo={newTodo} setNewTodo={setNewTodo} handleAddTodo={handleAddTodo} />

      <TodoList todos={todos} />

    </div>
  );
}

export default App;
