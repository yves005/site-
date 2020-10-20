import React from "react";
import { useHistory } from "react-router-dom";
    function Home() {
        const history = useHistory();
        
        
        return(
        <div>
             <h1>Home</h1>
             <button onClick={()=>{history.push("Login")}} >Logout</button>
             <button onClick={()=>{history.push("Cadastro")}} >Casdastre-se</button>
        </div>
        )
    }


    export default Home;