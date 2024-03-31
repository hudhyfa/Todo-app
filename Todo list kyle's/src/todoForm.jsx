import { useState } from "react";

export function TodoForm({onSubmittingForm}) {

    const[name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(name === "") return
        onSubmittingForm(name)

        setName("");
    }

    return (
        <form className='add-todo-form' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="newTodoTask"> Add new task </label>
                <input type="text" name='newTodoTask' id='newTodoTask' value={name} onChange={handleChange}/>
            </div>
            <button className='add-task-btn'> Add Task </button>
        </form>
    )
}