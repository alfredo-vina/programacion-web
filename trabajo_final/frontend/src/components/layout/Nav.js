import React from 'react'
import {NavLink} from "react-router-dom"

const Nav = (props) => {
   return (
       <nav>
        <div >
            <ul>
                <li><NavLink to="/" style={({isActive}) => { return {fontWeight: isActive ? "bold" : ""}}}>Home</NavLink></li>
                <li><NavLink to="/nosotros" style={({isActive}) => { return {fontWeight: isActive ? "bold" : ""}}}>Curriculum Vitae</NavLink></li>
                <li><NavLink to="/libros" style={({isActive}) => { return {fontWeight: isActive ? "bold" : ""}}}>Libros</NavLink></li>
                <li><NavLink to="/contacto" style={({isActive}) => { return {fontWeight: isActive ? "bold" : ""}}}>Contacto</NavLink></li>
            </ul>
        </div>
       </nav>
   );
}

export default Nav;
