import './App.css';
import React from 'react';
import Todo from './components/todo';
import { TodoListProvider } from './context/context';

function App() {
  return (
  <TodoListProvider>

    <Todo/>

  </TodoListProvider>
  
  );
}

export default App;
