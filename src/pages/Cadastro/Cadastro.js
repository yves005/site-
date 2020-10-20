import React from "react";
import { useHistory } from "react-router-dom";

    function Cadastro() {
        const history = useHistory();
        return( 
            <div>
         <h1>Cadastro</h1>
         <input></input>
            <input></input>
            <button onClick={()=>{history.push("Home")}} >Cadastrar</button>
         <button onClick={()=>{history.push("Login")}} >Já tem uma conta? Faça o login</button>

            
            </div>
        )
    }


    export default Cadastro;