import { useState } from 'react'
import { useEffect } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom"
import Startsida from './Startsida'
import './App.css'
import Habitsx from './Habits.componenter/Habits'
import NewHabit from './Habits.componenter/NewHabit'
import Navigation from './Componenter/Navigation'
import Events from "./Components/Events";
import AddEvent from './Components/AddEvent'
import TodoWrapper from "./Components/TodoWrapper";
import Login from './Login'




function App() { 
  const navigate = useNavigate()

  const defaultusers = [
    {
      profil: "Melissa", 
      userId: 1,
      username: "Melissa_96", 
      password:"123",

    },
    {
      profil: "Ellen", 
      userId: 2,
      username: "Ellen_97", 
      password: "456"
    
    },
    {
      profil: "Yolanda", 
      userId: 3,
      username: "Yolanda_98", 
      password: "789",
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

      const addHabit = (habit) => {
        setHabits([...habits, habit])
      }
    
      const addUser = (user) => {
        setUsers([...users, user])
      }

  
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem("currentUser")
    return savedUser ? JSON.parse(savedUser) : null
})

 

  useEffect( () => {
    localStorage.setItem("habits", JSON.stringify(habits))
  }, [habits])

  useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);


  const handleLogin = (user) => {
    setCurrentUser(user)
    navigate("/start")
  } 

  const handleLogout = () => {
    setCurrentUser(null)
    localStorage.removeItem("currentUser")
    navigate("/")
  }

  const getUserHabits = () => {
    if(!currentUser) return []
    return habits.filter((habit) => habit.userId === currentUser.userId)
  }


  return (
    <>


    <h1 style={{fontFamily:"fantasy", color:"pink", 
      textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}}> 
      Productivity Assistant Application</h1>

    {location.pathname !== "/" && location.pathname !== "/reg" && <Navigation/>}

    {currentUser && 
    <div>
      <h2>Välkommen, {currentUser.profil}</h2>
      <Quote/>
    </div>
      
      }
    


    <Routes>
     
    <Route path="/" element = {<Login onLogin={handleLogin}/>} />
      <Route path="/start" element={<Startsida habits={getUserHabits()} events ={getUserEvents()}/>} />
      <Route path="/habits" element={<Habitsx habits={getUserHabits()} setHabits={setHabits}/>}/>
   </Routes>

<br></br>
<br></br>
    {currentUser && 
    <button style={{backgroundColor:"pink", fontFamily:"fantasy"}} onClick={handleLogout}>Logga ut</button>
    }


    </>
  )
}
export default App
