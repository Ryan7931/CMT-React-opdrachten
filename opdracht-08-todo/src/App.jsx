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
    <div>
      <h1>To-Do App</h1>

      <TodoInput newTodo={newTodo} setNewTodo={setNewTodo} handleAddTodo={handleAddTodo} />

      <TodoList todos={todos} />

    </div>
  );
}

export default App;
