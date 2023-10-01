import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoForm from './TodoForm'
uuidv4()

const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todos)
    }
  return (
    <div className='TodoWrapper'>
        <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default TodoWrapper