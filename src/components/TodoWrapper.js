import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import EditTodoForm from './EditTodoFrom'
import Todo from './Todo'
import TodoForm from './TodoForm'
uuidv4()

const TodoWrapper = () => {

    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])

    useEffect(() => {
         localStorage.setItem("todos", JSON.stringify(todos))
       
    }, [todos])


    const addTodo = (todo) => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]) //spreading

    }

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.competed } : todo))
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))

    }
    const editTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))

    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))

    }

    const deleteAll = (todos) => {
        setTodos(todos => [])

    }
    return (
        <div className='TodoWrapper'>
            <h1>Get Things Done!</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo} />
                ) : (
                    <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
                )


            ))}
            <button className='todo-btn' onClick={deleteAll}>Delete All Tasks</button>
        </div>
    )
}

export default TodoWrapper