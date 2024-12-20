import { useState } from 'react'
import { useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import Startsida from './Startsida'
import Habitsx from './Habits.componenter/Habits'
import NewHabit from './Habits.componenter/NewHabit'
import Navigation from './Componenter/Navigation'
import Events from "./Components/Events";
import TodoWrapper from "./Components/TodoWrapper";
import AddEvent from './Components/AddEvent'
import "./App.css"




function App() { 


  const defaultHabits = [
    {
      title: "Träna",
      priority: "medel",
      rep: 5,
  },
  {
      title: "Plugga",
      priority: "hög",
      rep: 4,
  },
  {
      title: "Meditera",
      priority: "låg",
      rep: 2,
  },
  {
    title: "Läsa",
    priority: "låg",
    rep: 10,
  },
  {
    title: "Måla",
    priority: "låg",
    rep: 5,
  }
  ]


  const [habits, setHabits] = useState(() => {
      const savedHabits = localStorage.getItem("habits")
      return savedHabits ? JSON.parse(savedHabits) : defaultHabits })


  useEffect( () => {
    localStorage.setItem("habits", JSON.stringify(habits))
  }, [habits]
  )
 
  const addHabit = (habit) => {
    setHabits([...habits, habit])
  }

  const [events, setEvents] = useState([]);
    
  const addEvent = (newEvent) => {
      setEvents((prevEvents) => [...prevEvents, newEvent])
  } 

  return (
    <>


    <h1> Productivity Assistant Application</h1>


    <Navigation/>


    <Routes>
     
      <Route path="/" element={<Startsida habits={habits}/>} />
      <Route path="/habits" element={<Habitsx habits={habits} setHabits={setHabits}/>}/>
      <Route path="/newhabit" element={<NewHabit addHabit={addHabit}/>}/>
      <Route path = "/AddEvent" element= {<AddEvent addEvent={addEvent} />} />
      <Route path = "/TodoWrapper" element = {<TodoWrapper/>} />

    </Routes>

    </>
  )
}
export default App