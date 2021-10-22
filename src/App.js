import React, { useState } from 'react';
import TodoList from './Todo/TodoList';

function App() {

  const [todos, setTodos] = useState([
    {id: 1, completed: false, title: 'Buy butter'},
    {id: 2, completed: false, title: 'Buy bread'},
    {id: 3, completed: false, title: 'Buy milk'}
  ])

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }
  
  return (
    <div className="wrapper">
      <h1>The Best Todo List</h1>
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}

export default App;
