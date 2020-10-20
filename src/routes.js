import React from "react";
import {BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Menu from "./pages/Menu";

function Routes(){
return(
    <BrowserRouter>
    <Switch>
        <Route path="/Login" component={Login}/>
        <Route path="/Cadastro" component={Cadastro}/>
        <Route path="/" component={UserMenu}/>
    </Switch>
    </BrowserRouter>
);

}

function UserMenu(){
    return(
    <Menu>
    <Switch>
    <Route path="/home" component={Home}/>
    <Route component={()=> <Redirect to="/login"/>}/>
</Switch>
 </Menu>
    )
}

export default Routes;