import { useNavigate } from "react-router-dom" 


function Startsida({habits}) {

    const navigation = useNavigate()

    return(
        <>

        <h1>STARTSIDA</h1>
        <div>
            <h2>RUTINER</h2>
            {habits.slice(0,3).map((habit, i) => <p key = {i}>
                <h3>
                    {habit.title}
                    <br/>
                    {habit.priority}
                    <br/>
                    {habit.rep}
                </h3>
            </p>
            )}

            <button onClick={() => navigation("/habits")}>Gå till Rutiner</button>
        </div>
        
        </>
    )
}

export default Startsida