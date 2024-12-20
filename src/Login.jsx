import { useState } from "react"

function Login ({ onLogin }) {

const [username, setUsername] = useState("")
const [password, setPassword] = useState("")

const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users"))
    console.log("Loaded users from localStorage:", users); // Lägg till för felsökning
    console.log("Input username:", username, "Input password:", password); // Kontrollera inmatade värden

    const user = users.find((u) => 
        u.inlog.username.trim() === username.trim() && u.inlog.password.trim() === password.trim())

    if (user) {
    onLogin(user)
} 
    else {
    alert("Fel användarnamn/lösen")
}}


    return(
        <>
        <div>
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