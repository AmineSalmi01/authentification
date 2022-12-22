import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { TodoList } from '../context/context'
const EditTodos = () => {
    const {editTodo, formValue, singltodo ,getSinglTodo, handleChange } = useContext(TodoList);
    const {id} = useParams();

    useEffect(() => {
        getSinglTodo(id);
    }, [])
  return (
    <div>
        <form>
                <input type="text" name="name" value={formValue.name} onChange={handleChange}/>
                <button onClick={editTodo}>update</button>
        </form>
    </div>
  )
}

export default EditTodos