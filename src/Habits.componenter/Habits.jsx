import { useNavigate } from "react-router-dom" 


function Habitsx({habits, setHabits}) {

    const navigation = useNavigate()


    const radera = (index) => {
    
        const uppdaterad = habits.filter((_, i) => i !== index);
        setHabits(uppdaterad);
        localStorage.setItem("habits", JSON.stringify(uppdaterad));
    }


    return(
        <>

     <h2>RUTINER</h2>

        
            {habits.map((habit, i) => (
                <div style={{border: "solid 2px", backgroundColor:"lightpink", margin: "10px"}} key={i}>
                    <h2 style={{fontFamily:"fantasy", color:"pink", 
                        textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}}>{habit.title}</h2>
                    Prioritet: {habit.priority}
                    <br/>
                    Repetitioner: {habit.rep}
                    <br/>
                    <button style={{margin:"10px"}} onClick={() => radera(i)}>
                        Radera
                        </button>

                    </div>
            ))} 

            <button onClick={() => navigation("/newhabit")}>Skapa ny Rutin</button>
        
        </>
    )
}

export default Habitsx