import React, { useState } from "react"
import { Form } from "react-bootstrap";
import { Avatar, Drawer, formatMs, IconButton, List, ListItem, ListItemText, Typography } from "@material-ui/core";
import {MdHome} from "react-icons/md";
import { IconContext } from "react-icons/lib";
import { useHistory } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { FiMenu, Fimenu } from "react-icons/fi"

function Menu  (props)  {
    const history = useHistory();
    const [currentPage, setCurrentPage] = useState("/home");
    const [open, setOpen] = useState("/home");
    function handleClick(pathName){
        history.push(pathName);
        setCurrentPage(pathName);
    }

    function handleDrawer(isOpen){
        setOpen(isOpen);
    }
    const pages = [
        {
            pathName: "/home",
            icon: <MdHome  />,
            text: "Home",
        },
        {
        pathName: "/login",
        icon: <MdHome  />,
        text: "login",
    },
    {
        pathName: "/cadastro",
        icon: <MdHome  />,
        text: "cadastro",
    },
    {
        pathName: "/catalogo",
        icon: <MdHome  />,
        text: "catalogo",
    },
    {
        pathName: "/perfil",
        icon: <MdHome  />,
        text: "perfil",
    },

]
    return(
        <divi>
        <AppBar position="static">
            {props.children}
        <Toolbar>
        <IconButton edge="start" aria-label="menu" onClick={()=>handleDrawer(!open)}>
      <FiMenu/>
    </IconButton>
    <Typography>Elimar gonzales</Typography>
    <Avatar alt="Elimar gonzales" src="/Assets/pessoa.jpg" />
        </Toolbar>

        </AppBar>
         <Drawer open={open} onClose={()=> handleDrawer(false)} >
             <List className="list">
                 {pages.map((item) => (
                
                <ListItem   
                key={item}
                button
                selected ={currentPage === item.pathName}
                onClick={() => handleClick(item.pathName)}>
                <IconContext.Provider value= {{size: "2.0em"}}>
                    {item.icon}
                    </IconContext.Provider>
                    <ListItemText className ="ListItemText">
                    <Typography >{item.text}</Typography>


                    </ListItemText>
                </ListItem>
                 ))}
             </List>
         </Drawer>
         </divi>
    )
}

export default Menu;