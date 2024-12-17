import { useState } from "react"


function AddTodo({addNewTodo}) {
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        addNewTodo(value)

        setValue('')

    }

    return(
        <> 
        <form className="addTodo" onSubmit={handleSubmit}>
            <input type="text" className="todoInput" value={value} placeholder="Write a new task" onChange={(e) =>(setValue(e.target.value))}/>
            <button type="submit" className="newTodoBtn">Add Task</button>
        </form>
        </>

    )
}

export default AddTodo        