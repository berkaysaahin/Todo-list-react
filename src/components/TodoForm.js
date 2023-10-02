import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault()

        addTodo(value)
        setValue("")
    }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' required className='todo-input' value={value} placeholder="What's the task?"
                onChange={(e) => setValue(e.target.value)} />
            <button type='submit' className='add-todo-btn'>Add Task</button>
        </form>
    )


}
export default TodoForm;
