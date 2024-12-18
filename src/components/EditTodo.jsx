import { useState } from "react"


function EditTodo({editTask, task}) {
    const [title, setTitle] = useState(task.task.title)
    const [description, setDescription] = useState(task.task.description)
    const [timeEstimate, setTimeEstimate] = useState(task.task.timeEstimate)
    const [category, setCategory] = useState(task.task.category)
    const [deadline, setDeadline] = useState(task.task.deadline)
    const [status, setStatus] = useState(task.task.status)

    
    const handleSubmit = e => {
        e.preventDefault()
        editTask({title, description, timeEstimate, category, deadline, status}, task.id)

    }

    return(
        <> 
        <form className="editTodo" onSubmit={handleSubmit}>
              <input type="text" className="todoInput" value={title} placeholder="Write your title" onChange={(e) =>(setTitle(e.target.value))}/>
            <input type="text" className="todoInput" value={description} placeholder="Descripe your task" onChange={(e) => (setDescription(e.target.value))}/>
            <input type="text" className="todoInput" value={timeEstimate} placeholder="Time Estimate" onChange={(e) =>(setTimeEstimate(e.target.value))}/>
            <input type="text" className="todoInput" value={category} placeholder="Write the category of the task" onChange={(e) =>(setCategory(e.target.value))}/>
            <input type="date" className="todoInput" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
            <select className="statusInput" value={status} onChange={(e) => setStatus(e.target.value)}>
                 <option value="Not started yet">Not started yet</option> 
                 <option value="In progress">In progress</option> 
                 <option value="Completed">Completed</option>
                 </select>

            <br />

            <button type="submit" className="newTodoBtn">Update Task</button>
        </form>
        </>

    )
}

export default EditTodo                  