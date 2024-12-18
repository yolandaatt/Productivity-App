import { useState } from "react"
import AddTodo from "./AddTodo"
import { v4 as uuidv4 } from 'uuid';
import Todo from "./Todo";
import EditTodo from "./EditTodo";


function TodoWrapper() {
    
    const [todos, setTodos] = useState([])

    const addNewTodo = todo => {
        const {title, description, timeEstimate, category, deadline, status} = todo
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todos)
    }

    const changeStatus = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task: {...todo.task, status: todo.task.status === "Completed" ? "Not started yet" : "Completed"}} : todo ));
    };
    

    const deleteTodo  = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const reDoTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
    }


    return(
        <div className="todoWrapper">
            <h1>Todo List!</h1>
        <AddTodo addNewTodo={addNewTodo}/>
        {todos.map((todo, index) => (
            todo.isEditing  ? (<EditTodo key={index} task={todo} editTask={editTask} />)
            :
         <Todo task ={todo} key={index} changeStatus={changeStatus}  
             deleteTodo = {deleteTodo}  reDoTodo={reDoTodo} 
             editTask ={editTask}/>
        ) )}
        </div>  

    )
}

export default TodoWrapper  