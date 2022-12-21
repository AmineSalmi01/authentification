import React from "react";
import { useContext } from "react";
import { TodoList } from "../context/context";
import { useEffect } from "react";


const Todo = () => {
    const { todo , getTodos , handleChange , formValue , addTodo } = useContext(TodoList);
    useEffect(() => {
        getTodos();
    }, [])
    console.log(todo);
  return (
    <div>
        <div>
            <form>
                <input type="text" name="" onChange={handleChange} />
                <button onClick={addTodo} >Add</button>
            </form>
        </div>
            {todo.map((item) =>
                <ul key={item.id}>
                    <li>{item.name}</li>
                </ul>
            )}
    </div>
  )
}

export default Todo

