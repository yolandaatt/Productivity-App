import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Events from "./Components/Events";
import EventForm from "./Components/EventForm";
import StartPage from "./Components/StartPage";


function App () {
    const [events, setEvents] = useState([]);
    const addEvent = (newEvent) => {
        setEvents((prevEvents) => [...prevEvents, newEvent])
    }
    
    return (
    
    <div>
        <Routes>
        <Route path = "/" element = {<StartPage/>} />
        <Route path = "/EventForm" element= {<EventForm addEvent={addEvent} />} />
        <Route path = "/Events" element = {<Events events = {events}/>} /> 
        </Routes>
   </div> 
   )
}

export default App