import react from "react";
import { useNavigate } from "react-router-dom";


function StartPage () {
const navigate = useNavigate();
    return (
    
    <div>
         <header>
           <h1>Startssida</h1>
         </header>
            <button onClick = {() => navigate("/EventForm")}> Lägg till händelse</button>
    </div>
    )
} 

export default StartPage; 
  