import React from "react";
import { useContext } from "react";
import { TodoList } from "../context/context";
import { useEffect } from "react";
import { Link } from "react-router-dom"

const Todo = () => {
    const { todo , getTodos , handleChange  , addTodo, deleteTodo } = useContext(TodoList);
    useEffect(() => {
        getTodos();
    }, [])
    console.log(todo);
  return (
    <div>
        <div>
            <form onSubmit={addTodo}>
                <input type="text" name="name" onChange={handleChange} />
                <button>Add</button>
            </form>
        </div>
            {todo.map((item) =>
                <ul key={item.id}>
                    <li>{item.name}</li>
                    <Link to={`/EditTodo/${item.id}`}><button>Edit</button></Link>
                    <Link onClick={() => deleteTodo(item.id)} ><button>Delete</button></Link>
                </ul>
            )}
    </div>

  )
}

export default Todo

