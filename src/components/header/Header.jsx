import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './header.css';

class Header extends Component {


   render(){

    return(
        <div className="header">
            <div className="header__wrapper flex jc-sb ai-c">
                <NavLink to="/" className={({ isActive }) =>(isActive ? "active" : "")}>home</NavLink>
                <NavLink to="/about" className={({ isActive }) =>(isActive ? "active" : "")}>about</NavLink>
                <NavLink to="/projects" className={({ isActive }) =>(isActive ? "active" : "")}>projects</NavLink>
                <NavLink to="/cv" className={({ isActive }) =>(isActive ? "active" : "")}>CV</NavLink>
            </div>
        </div>
    )
   }
}

export default Header;
