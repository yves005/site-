import React, { useState } from "react";
import {Link} from "react-router-dom"
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import adocao from "../../Assets/adoção.jpg"
import { Menu } from "@material-ui/core";

    function Login() {
        const history = useHistory();
        const [email, setEmail] = useState();
        const [password, setPassword] = useState();

        function Login(){
            if(email === "yves" && password ==="123"){
            alert("bem vindo " + email);
            history.push("Home");
            }
            else alert("Dados incorretos");
        }

        return( 
            <div className= "base">
        <div className="container">
            <img src= {adocao}></img>
            <h1>Login</h1>
            <Form className="inputs">
            <Form.Group controlId="email">
            <Form.Control type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="senha">
            <Form.Control type="password" placeholder="Senha" onChange={(e)=>setPassword(e.target.value)} />
            </Form.Group>
            </Form>
            <Button variant="primary" onClick ={Login}>Login</Button>{' '}
            <Button variant="secondary">Não tem uma conta? cadastre-se</Button>{' '}
           {// <button onClick={()=>{history.push("Home")}} >Login</button>
           //<button onClick={()=>{history.push("Cadastro")}} >Não tem uma conta? cadastre-se</button>
        }</div>    
        </div>
        )
    }


    export default Login;