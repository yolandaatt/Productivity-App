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
import Login from './Login'
import Registrera from './Registrera'
import Quote from './Componenter/Randome'





function App() { 
  const navigate = useNavigate()

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
    const savedHabits = localStorage.getItem("habits");
    return savedHabits ? JSON.parse(savedHabits) : defaultHabits;
  });

  const [currentUser, setCurrentUser] = useState(null);

  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem("events");
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const handleLogin = (user) => {
    setCurrentUser(user);
    navigate("/start");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    navigate("/");
  };

  const getUserHabits = () => {
    return currentUser ? habits.filter((habit) => habit.userId === currentUser.userId) : [];
  };

  const getUserEvents = () => {
    return currentUser ? events.filter((event) => event.userId === currentUser.userId) : [];
  };

  const addEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  const addHabit = (habit) => {
    setHabits ([...habits, habit])
  }

  const newHabitId = () => {
    return currentUser ? currentUser.userId : null
  }

  const newEventId = () => {
    return currentUser ? currentUser.userId: null
   };
 


  return (
    <>


    <h1 style={{fontFamily:"fantasy", color:"pink", 
      textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}}> 
      Productivity Assistant Application</h1>


    <Navigation/>


    <Routes>
     
    <Route path="/" element = {<Login onLogin={handleLogin}/>} />
      <Route path="/start" element={<Startsida habits={getUserHabits()} events ={getUserEvents()}/>} />
      <Route path="/habits" element={<Habitsx habits={getUserHabits()} setHabits={setHabits}/>}/>
      <Route path="/newhabit" element={<NewHabit addHabit={addHabit} newHabitId={newHabitId}/>}/>
      
        
        <Route path = "/Events" element = {<Events events = {getUserEvents()} currentUser= {currentUser} addEvent={addEvent()} newEventId={newEventId}/>} /> 
        
        
        <Route path = "/TodoWrapper" element = {<TodoWrapper/>} />
        <Route path = "/reg" element= {<Registrera addUser={addUser}/>}/>

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
