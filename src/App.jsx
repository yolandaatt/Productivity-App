import { useState } from 'react'
import { useEffect } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom"
import Startsida from './Startsida'
import './App.css'
import Habitsx from './Habits.componenter/Habits'
import NewHabit from './Habits.componenter/NewHabit'
import Navigation from './Componenter/Navigation'
import Events from "./Components/Events";
import TodoWrapper from "./Components/TodoWrapper";
import AddEvent from './Components/AddEvent'
import Login from './Login'
import { v4 as uuidv4 } from 'uuid';



function App() { 
  const navigate = useNavigate()

  const handleLogin = (user) => {
    setCurrentUser(user)
    navigate("/start")
  }

  const handleLogout = () => {
    setCurrentUser(null)
    navigate("/")
  }

  const [currentUser, setCurrentUser] = useState(null);


  const [todos, setTodos] = useState([]);


  const addNewTodo = (todo) => {

    if (!currentUser) {
      alert("You need to sign in first!");
      return;
  }
      const {title, description, timeEstimate, category, deadline, status} = todo
      const parsedDeadline = new Date(deadline)
      const newTodo = {id: uuidv4(), userId: currentUser.userId, task: {title, description, timeEstimate, category, deadline: parsedDeadline, status},
        completed: false,
        isEditing: false
      }
    
      setTodos([...todos, newTodo])
      
  }


  const changeStatus = id => {
    setTodos(prevTodos => prevTodos.map(todo => todo.id === id ? { ...todo, task: { ...todo.task, status: todo.task.status === "Completed" ? "Not started yet" : "Completed"}} : todo)
    );
};


const deleteTodo  = id => {
  setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
};


const reDoTodo = id => {
  setTodos(prevTodos => prevTodos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)
  );
}

const editTask = (task, id) => {
  setTodos(prevTodos => prevTodos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo)
  );
}

const loadTodosFromLocalStorage = (userId) => {
  const savedTodos = localStorage.getItem(`todos_${userId}`)
  if (savedTodos) {
      return JSON.parse(savedTodos)
  }
  return []
}


  const saveTodosToLocalStorage = (userId, todos) => {
  localStorage.setItem(`todos_${userId}`, JSON.stringify(todos)) }

  useEffect(() => {
    if (currentUser) {
      setTodos(loadTodosFromLocalStorage(currentUser.userId));
    }
  }, [currentUser]);

useEffect(() => {
  if (currentUser) {
    saveTodosToLocalStorage(currentUser.userId, todos)
  }
}, [todos, currentUser])



  const defaultusers = [
    {
      profil: "Melissa", 
      userId: 1,
      inlog: {username: "Melissa_96", password:"123"},

    },
    {
      profil: "Ellen", 
      userId: 2,
      inlog: {username: "Ellen_97", password: "456"}
    
    },
    {
      profil: "Yolanda", 
      userId: 3,
      inlog: {username: "Yolanda_98", password: "789"}
    }
  ]

  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users")
    return savedUsers ? JSON.parse(savedUsers) : defaultusers })


  const defaultHabits = [
    {
      title: "Träna",
      priority: "medel",
      rep: 5,
      userId: 1,
  },
  {
      title: "Plugga",
      priority: "hög",
      rep: 4,
      userId: 1,
  },
  {
      title: "Meditera",
      priority: "låg",
      rep: 2,
      userId: 1,
  },
  {
    title: "Läsa",
    priority: "låg",
    rep: 10,
    userId: 2,
  },
  {
    title: "Måla",
    priority: "låg",
    rep: 5,
    userId: 2,
  },
  {
    title: "Mindfullness",
    priority: "medel",
    rep: 2,
    userId: 2,
  },
  {
    title: "Simma",
    priority: "låg",
    rep: 2,
    userId: 3,
  },
  {
    title: "Umgås med kompisar",
    priority: "hög",
    rep: 7,
    userId: 3,
  },
  {
    title: "Lägga sig tidigt",
    priority: "hög",
    rep: 5,
    userId: 3,
  }
  ]


  const [habits, setHabits] = useState(() => {
      const savedHabits = localStorage.getItem("habits")
      return savedHabits ? JSON.parse(savedHabits) : defaultHabits })

  


  useEffect( () => {
    localStorage.setItem("habits", JSON.stringify(habits))
  }, [habits])

  useEffect(() => {
    if (!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify(defaultusers));
    }}, []);

 

  const getUserHabits = () => {
    if(!currentUser) return []
    return habits.filter((habit) => habit.userId === currentUser.userId)
  }
 
  const addHabit = (habit) => {
    setHabits([...habits, habit])
  }

  const [events, setEvents] = useState([]);
    
  const addEvent = (newEvent) => {
      setEvents((prevEvents) => [...prevEvents, newEvent])
  } 

  

  return (
    <>


    <h1 style={{fontFamily:"fantasy", color:"pink", 
      textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}}> 
      Productivity Assistant Application</h1>


    <Navigation/>


    <Routes>
     
    <Route path="/" element = {<Login onLogin={handleLogin}/>} />
      <Route path="/start" element={<Startsida habits={getUserHabits()} todos={todos}/>} />
      <Route path="/habits" element={<Habitsx habits={getUserHabits()} setHabits={setHabits}/>}/>
      <Route path="/newhabit" element={<NewHabit addHabit={addHabit}/>}/>
      
        <Route path = "/AddEvent" element= {<AddEvent addEvent={addEvent} />} />
        <Route path = "/Events" element = {<Events events = {events}/>} /> 
        <Route path = "/TodoWrapper" element = {<TodoWrapper currentUser={currentUser} setTodos={setTodos} addNewTodo={addNewTodo}
        changeStatus = {changeStatus} deleteTodo ={deleteTodo} reDoTodo={reDoTodo} editTask= {editTask} todos={todos}/>} />

    </Routes>

    {currentUser && 
    <div>
      <h2>Välkommen, {currentUser.profil}</h2>
      <button onClick={handleLogout}>Logga ut</button>
    </div>
      
      }

    </>
  )
}
export default App