import React from 'react'

const Header = (props) => {
    return (
        <header>
            <div className="header">
                <img className="logo" src="./libros.svg" width={100} height={100}/>
                <div className="titulo">

                <h1>Trabajo Final</h1>
                <h2>Diplomatura en programaci&oacute;n web full stack con React JS</h2>
                </div>
            </div>
        </header>
   );
}

export default Header;