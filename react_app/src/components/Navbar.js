import "./NavStyle.css";
import {Link} from "react-router-dom"
import { MenuItems } from "./Menuitem";
import { useState } from "react";

const Navbar = () => {

    const [state,setState] = useState({clicked: false});
    const handleClick = () =>{
        setState({clicked: !state.clicked})
    }

    return (
        <nav className="navbar-item">
            <h1 className="navbar-logo"><i>Tour & Travel</i></h1>
            <div className="menu-icon" onClick={handleClick}>
                <i className={state.clicked ? "fa-solid fa-xmark" :"fa-solid fa-bars"}></i>
            </div>

            <ul className={state.clicked ? "navebar-menu active" : "navebar-menu"} >
                {MenuItems.map((item,index)=>{
                    return(
                        <li key={index}>
                        <Link to={item.url} className={item.cName}>
                        <i className ={item.icon}></i>
                        <b>{item.title}</b>
                        </Link>
                    </li>
                    )
                })}
                <button type="button" className="btn">Sign Up</button>
               

            </ul>
            
         
        </nav>
    )
}

export default Navbar
