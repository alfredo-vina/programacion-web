import React from 'react'
import {NavLink} from "react-router-dom"

const Nav = (props) => {
   return (
       <nav id="sidebar">
        <div>
            <ul>
                <li><NavLink to="/" style={({isActive}) => { return {fontWeight: isActive ? "bold" : ""}}}>Home</NavLink></li>
                <li><NavLink to="/nosotros" style={({isActive}) => { return {fontWeight: isActive ? "bold" : ""}}}>Nosotros</NavLink></li>
                <li><NavLink to="/novedades" style={({isActive}) => { return {fontWeight: isActive ? "bold" : ""}}}>Novedades</NavLink></li>
                <li><NavLink to="/contacto" style={({isActive}) => { return {fontWeight: isActive ? "bold" : ""}}}>Contacto</NavLink></li>
            </ul>
            
        </div>
       </nav>
   );
}

export default Nav;
