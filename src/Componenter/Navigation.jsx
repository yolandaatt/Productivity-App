import { Link } from "react-router-dom";

const Navigation = () => {

    return(
        <>
        <nav>
      
                <Link to="/start">Startsida</Link>
                <br></br>
                <Link to="/">Inloggning</Link>
                
        </nav>
        </>
    )
}

export default Navigation
