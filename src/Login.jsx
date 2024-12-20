import { useState } from "react"
import { Link } from "react-router-dom";

function Login ({ onLogin }) {

const [username, setUsername] = useState("")
const [password, setPassword] = useState("")

const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users"))

    const user = users.find((u) => 
        u.username.trim() === username.trim() && u.password.trim() === password.trim())

    if (user) {
    onLogin(user)
} 
    else {
    alert("Fel användarnamn/lösen")
}}


    return(
        <>
        <div>
        <Link to = "reg">Registrera</Link>
        <br></br>
        <h2>Logga in</h2>
        <input type="text" value={username}
        onChange={(e) => setUsername(e.target.value)}/>

        <input type="password" value={password}
        onChange={(e) => setPassword(e.target.value)}/>

        <button onClick={handleLogin}
        >Logga in</button> 
        </div>


        
        </>
    )
 }




export default Login