import './style.css';
import { TodoList } from './TodoList';
import { TodoForm } from './todoForm';
import { Navbar } from './Navbar';
import { useState, useEffect, useRef } from 'react';

export default function App() {

    const[todos, setTodos] = useState(() => {
        const todoTasks = localStorage.getItem('TASKS');
        if(todoTasks === null) return [];
        return JSON.parse(todoTasks);
    });

    const count = useRef(todos.length);
  
    useEffect(() => {
        localStorage.setItem('TASKS', JSON.stringify(todos));
        count.current = todos.length;
        alert("your task count is " + count.current);
    }, [todos]);

    const toggleTodo = (id, completed) => {
        setTodos( currentTodos => {
            return currentTodos.map((todo) => {
                if(todo.id === id) {
                    return { ...todo, completed };
                }
                return todo;
            })
        })
    }


    const deleteTodo = (id) => {
        setTodos((currentTodos) => {
            return currentTodos.filter(currentTodo => currentTodo.id != id);
        })
    }


    const addTodo = (title) => {
        setTodos((currentTodos) => {
            return [
                ...currentTodos,
                {id: crypto.randomUUID(), title, completed: false}
            ]
        })
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <TodoForm onSubmittingForm = { addTodo }/>
                <TodoList todos = { todos } toggleTodo={ toggleTodo } deleteTodo={ deleteTodo } />
            </div>
        </>
            
    )
}