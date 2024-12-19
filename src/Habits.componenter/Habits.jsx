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
                <div style={{border: "solid 2px", backgroundColor:"lightgrey", margin: "10px"}} key={i}>
                    <h2>{habit.title}</h2>
                    Prioritet: {habit.priority}
                    <br/>
                    Antal Repetitioner: {habit.rep}

                    <button onClick={() => radera(i)}>
                        Radera
                        </button>

                    </div>
            ))} 

            <button onClick={() => navigation("/newhabit")}>Skapa ny Rutin</button>
        
        </>
    )
}

export default Habitsx