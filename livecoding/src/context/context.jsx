import React,{ useState } from "react";
import { createContext } from "react";
import Todo from "../components/todo";
import axios from 'axios';

axios.defaults.baseURL = "http://127.0.0.1:8000/api"

export const TodoList = createContext();

export const TodoListProvider = ({children}) => {
    const [todo, setTodo] = useState([]);
    const [addtodo, setAddtodo] = useState([]);
    const [formValue, setFormValue] = useState([]);

    const handleChange = (e) => {
        const {name , value} = e.target;
        setFormValue({...formValue, [name]: value})
    }

    const getTodos = async () => {
        const apiTodo = await axios.get('/home')
        setTodo(apiTodo.data)
    }

    const addTodo = async (e) => {
        e.preventDefault();
        const addApi = await axios.post('/home', formValue)
        setAddtodo(addApi);
    }
    

    return (
        <TodoList.Provider value={
            {
                todo,
                getTodos,
                handleChange,
                formValue,
                addTodo,
            }
        }>
            {children}
        </TodoList.Provider>
    )
}
