import { useNavigate } from "react-router-dom" 


function Startsida({habits }) {

    const navigation = useNavigate()

    const sshabits = [...habits]
    .sort((a,b) => b.rep - a.rep)

    return(
        <>

        <h1>STARTSIDA</h1>

    <div style={{display:"flex", justifyContent:"center"}}>
    
        <div className="Rutiner" style={{border:"solid 2px", width:"150px", padding:"20px", margin:"20px"}}>
            <h2 style={{fontFamily:"fantasy", color:"pink", 
                textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}}>
                    RUTINER</h2>

            {sshabits.slice(0,3).map((habit, i) => <p key = {i}>

                <h5 style={{color:"#080623"}}>
                    <h2 style={{fontFamily:"fantasy", color:"pink", 
                textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}}>{habit.title}</h2>
                    Prio: {habit.priority}
                    <br></br>
                    Pepetitioner: {habit.rep}
                </h5>
            </p>
            )}

            <button style={{margin:"20px"}} onClick={() => navigation("/habits")}>Gå till Rutiner</button>
        
        </div>
            <br></br>

        <div className="Event" style={{border:"solid 2px", width:"150px", padding:"20px", margin:"20px"}}>
                <h2 style={{fontFamily:"fantasy", color:"pink", 
                textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}}>
                    HÄNDELSER</h2>
            <button onClick = {() => navigation("/AddEvent")}> Lägg till händelse</button>
        </div>
            <br></br>

        <div className="Todo" style={{border:"solid 2px", width:"150px", padding:"20px", margin:"20px"}}>
                <h2 style={{fontFamily:"fantasy", color:"pink", 
                    textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}}>
                        ATT GÖRA</h2>
            <button onClick ={() => navigation ("/TodoWrapper")}>Lägg till Todo </button> 
        </div>

    </div>

        
        </>
    )
}

export default Startsida