import './App.css';
import React, { Fragment } from 'react';
import Todo from './components/todo';
import { TodoListProvider } from './context/context';
import { Route, Router, Routes } from 'react-router-dom';
import EditTodos from './components/EditTodo';

function App() {
  return (
  <TodoListProvider>

        <Routes>
          <Route path='/' element={<Todo />}/>
          <Route path='/EditTodo/:id' element={<EditTodos /> } />
        </Routes>
      
  </TodoListProvider> 
  
  );
}

export default App;
