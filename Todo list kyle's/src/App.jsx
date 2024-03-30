import './style.css';
import { useState } from 'react';
export default function App() {

    const[name, setName] = useState("");
    const[todos, setTodos] = useState([]);

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setTodos( (currentTodos) => {
            return [...currentTodos, {id: crypto.randomUUID(), title: name, completed: false}]
        });
    }

    return (
        <>
            <form className='add-todo-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="newTodoTask"> Add new task </label>
                    <input type="text" name='newTodoTask' id='newTodoTask' value={name} onChange={handleChange}/>
                </div>
                <button className='add-task-btn'> Add Task </button>
            </form>

            <h2 className='todo-header'>Todo List</h2>
            <ul className='todo-lists'>
                {todos.map((todo) => {
                    return <li key={todo.id}>
                                <label>
                                    <input type="checkbox" checked ={todo.completed}/>
                                    {todo.title}
                                </label>
                                <button className='delete-btn'>Delete</button>
                            </li>
                })}
            </ul>
        </>
            
    )
}