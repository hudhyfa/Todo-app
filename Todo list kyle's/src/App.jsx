import './style.css';
import { TodoList } from './TodoList';
import { TodoForm } from './todoForm';
import { useState } from 'react';

export default function App() {

    const[todos, setTodos] = useState([]);

    const toggleTodo = (id, completed) => {
        setTodos( currentTodos => {
            return currentTodos.map((todo) => {
                if(todo.id === id) {
                    return { ...todo, completed };
                }
            })
        })
        return todos;
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
            <TodoForm onSubmittingForm = { addTodo }/>
            <TodoList todos = { todos } toggleTodo={ toggleTodo } deleteTodo={ deleteTodo } />
        </>
            
    )
}