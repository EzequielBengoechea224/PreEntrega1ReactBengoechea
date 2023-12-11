import React from 'react';
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
  return (
    <nav>
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Catalogo</a></li>
            <li><a href="#">Mas Promociones!</a></li>
            <li><CartWidget />
              <span> 2 </span> 
            </li>
        </ul>
    </nav>
  )
}

export default NavBar