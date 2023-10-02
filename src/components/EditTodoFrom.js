import React, { useState } from 'react'

const EditTodoForm = ({ editTodo, task}) => {
  const [value, setValue] = useState(task.task)

  const handleSubmit = e => {
    e.preventDefault()

    editTodo(value, task.id)
    setValue("")
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' className='todo-input' value={value}
        placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)} required />
      <button type='submit' className='add-todo-btn'>Update Task</button>
    </form>
  )


}
export default EditTodoForm;
