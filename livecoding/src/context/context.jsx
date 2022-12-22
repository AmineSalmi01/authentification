import React,{ useState } from "react";
import { createContext } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = "http://127.0.0.1:8000/api"

export const TodoList = createContext();

export const TodoListProvider = ({children}) => {
    const [todo, setTodo] = useState([]);
    const [addtodo, setAddtodo] = useState([]);
    const [singltodo, setSingltodo] = useState([]);
    const [formValue, setFormValue] = useState({
        name:""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name , value} = e.target;
        setFormValue({ ...formValue, [name]: value })
    }

    const getTodos = async () => {
        const apiTodo = await axios.get('/home')
        setTodo(apiTodo.data)
    }
    const getSinglTodo = async (id) => {
        const apiSinglTodo = await axios.get('/home/' + id);
    
        setFormValue(apiSinglTodo.data)
    }

    const addTodo = async (e) => {
        e.preventDefault();
        const addApi = await axios.post('/home', formValue);
        setAddtodo(addApi.data);
        getTodos();
    }
    const editTodo = async (e) => {
        e.preventDefault();
        await axios.put(`/home/${formValue.id}`, formValue);
        getTodos();
        navigate('/');
    }

    const deleteTodo = async (id) => {
        await axios.delete(`/home/${id}`);
        getTodos();
    }
    

    return (
        <TodoList.Provider value={
            {
                todo,
                getTodos,
                handleChange,
                formValue,
                addTodo,
                deleteTodo,
                editTodo,
                setSingltodo,
                getSinglTodo,
                singltodo,
            }
        }>
            {children}
        </TodoList.Provider>
    )
}
