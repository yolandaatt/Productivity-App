import react from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Events ({events}) {
    const navigate = useNavigate();
    
    const [updatedEvents, setEvents] = useState(events || [])

    const handleDelete = (deleteEvent) => {
        const removedEvents = updatedEvents.filter ((_, index) => index !== deleteEvent)
        setEvents(removedEvents); 

    }
    
    let content;

    if (updatedEvents.length > 0 ){
        content = (
             <ol>
              {updatedEvents.map((event, index) => ( 
                  <li key= {index}>
                  {event.name} 
                  <br/>
                  Starttid: {event.startTime} {event.startDate}
                  <br/>
                  Sluttid: {event.endTime} {event.endDate}
                 <button onClick = {() => handleDelete(index)} >Ta bort</button>
                 </li>
                  )
                )}
            </ol>
        )
    } else {
        content = <p>Du har inga kommande händelser.</p>
    }

    return ( 
        <div>
            <h2>Händelser: </h2>
            {content}
            <button onClick = {() => navigate("/EventForm")}> Lägg till ny händelse</button>
        </div>
        )}



export default Events