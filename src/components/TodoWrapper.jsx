import { useState } from "react"
import AddTodo from "./AddTodo"
import { v4 as uuidv4 } from 'uuid';
import Todo from "./Todo";


function TodoWrapper() {
    
    const [todos, setTodos] = useState([])

    const addNewTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todos)
    }

    return(
        <div className="todoWrapper">
        <AddTodo addNewTodo={addNewTodo}/>
        {todos.map((todo, index) => (
         <Todo task ={todo} key={index}/>
        ) )}
        </div>  

    )
}

export default TodoWrapper  