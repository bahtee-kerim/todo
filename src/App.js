import React, { useState } from 'react';
import TodoList from './Todo/TodoList';
import Context from './Context';
import AddTodo from './Todo/AddTodo';

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

  const removeTodo = (id) => {
    setTodos(todos.filter( todo => todo.id !== id ))
  }

  const addTodo = (title) => {
    setTodos(todos.concat([
      {
      title,
      id: Date.now(),
      completed: false
      }
    ]))
  }
  
  return (
    <Context.Provider value={{ removeTodo }}>
    <div className="wrapper">
      <h1>The Best Todo List</h1>
      <AddTodo onCreate={addTodo} />
      {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} /> : 
      <p>No todos!</p>  }
      
    </div>
    </Context.Provider>
  );
}

export default App;
