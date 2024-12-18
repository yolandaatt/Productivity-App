import { useState } from "react"


function AddTodo({addNewTodo}) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [timeEstimate, setTimeEstimate] = useState('')
    const [category, setCategory] = useState('')
    const [deadline, setDeadline] = useState('')
    const [status, setStatus] = useState('Not started yet')

    const handleSubmit = e => {
        e.preventDefault()
        addNewTodo({title, description, timeEstimate, category,deadline, status})

        setTitle('')
        setDescription('')
        setTimeEstimate('')
        setCategory('')
        setDeadline('')
        setStatus('Not started yet')

    }

    return(
        <> 
        <form className="addTodo" onSubmit={handleSubmit}>
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
            <button type="submit" className="newTodoBtn">Add Task</button>
        </form>
        </>

    )
}

export default AddTodo                  