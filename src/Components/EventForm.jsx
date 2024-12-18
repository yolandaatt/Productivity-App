import react from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Events from "./Events";
import { use } from "react";

function EventForm ({addEvent}) {
    const [name, setName] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const navigate = useNavigate();
 
    const handleSubmit = (event) => {
        event.preventDefault ();
    
    if (name && startTime && endTime && startDate && endDate) {
        const newEvent = {name, startTime, endTime, startDate, endDate};
        addEvent(newEvent)

        setName("");
        setStartTime("");
        setEndTime("");
        setStartDate("");
        setEndDate("");

        navigate("/Events");
        
    } else {
        alert("Fyll i alla fält!")
    }
    }

    return (
        <div>
            <h1>Formulär sida</h1>
            <form onSubmit ={handleSubmit}>

                <label> 
                    Ny händelse:
                    <input 
                    type = "text" 
                    value = {name} 
                    onChange={(e) => setName (e.target.value)}
                    />
                    <br></br>

                    Starttid:
                    <input
                    type = "time"
                    value = {startTime}
                    onChange = {(e) => setStartTime (e.target.value)}
                    />
                    
                    <input
                    type= "date"
                    value= {startDate}
                    onChange = {(e) => setStartDate (e.target.value)}
                    />
                    <br></br>

                    Sluttid:
                    <input
                    type = "time"
                    value = {endTime}
                    onChange = {(e) => setEndTime (e.target.value)}
                    />

                    <input
                    type= "date"
                    value= {endDate}
                    onChange = {(e) => setEndDate (e.target.value)}
                    />

                    <br></br>
                    
                    <button type="submit"> Spara händelse</button>

                </label>
            </form>
        </div>
    )
}

export default EventForm;
