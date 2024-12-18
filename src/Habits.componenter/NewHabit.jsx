import { useNavigate } from "react-router-dom";
import { useState } from "react";

function NewHabit({addHabit}) {

    let [title, setTitle] = useState("")
    let [priority, setPriority] = useState("")
    let [rep, setRep] = useState("")

    let nav = useNavigate()

    const handleAddHabit = () => {
        
        if (!title || !priority || !rep) {
            alert("STOP! Alla fält måste vara ifyllda för att lägga till ny rutin!");
            return;
        }

        addHabit({
            title,
            priority,
            rep,
        });
        nav("/habits");
    };

    return(
        <>
        <h2>Ny Rutin</h2>

        <input type="text" placeholder="Titel" 
        onChange= {e => setTitle(e.target.value)}/>
        <br/>
        <input type="text" placeholder="Prio" 
        onChange= {e => setPriority(e.target.value)}/>
        <br/>
        <input type="text" placeholder="Repetitioner"
        onChange= {e => setRep(e.target.value)}/>
        <br/>
        <button onClick={handleAddHabit}>Lägg till Rutin</button>        
        <br></br>
        <button style={{color:"gray", fontSize:"smaller"}} onClick={() => nav(-1)}>Avbryt</button>
        
        </>
    )
}

export default NewHabit