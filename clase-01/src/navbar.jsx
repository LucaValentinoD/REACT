import React from 'react';
import './navbar.css';
import Search from './search.jsx';
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header>
        <div className='nav1'>Envíos a todo el mundo | 3 cuotas sin interés a partir de $50.000</div>
        <nav className='nav'>
        <Link to="/Inicio">
        <img src='.\src\assets\logo.png' alt="Logo" className='logo' />
        </Link>
          <Search/>
          <div className="deco">|</div>
          <Link className="links" to="/Inicio">INICIO</Link>
          <div className="deco">|</div>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle custom-dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              FUTBOL
            </a>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item custom-dropdown-item" to="/category/hombre">Hombre</Link></li>
              <li><Link className="dropdown-item custom-dropdown-item" to="/category/mujer">Mujer</Link></li>
              <li><Link className="dropdown-item custom-dropdown-item" to="/category/calzados">Calzados</Link></li>
            </ul>
          </li>
          <div className="deco">|</div>
          <Link to="/info" className="links">ENVÍOS Y CAMBIOS</Link>
          <div className="deco">|</div>
          <Link to="/contacto" className="links">CONTACTO</Link>
          <Link to="/Carrito">
        <img src='.\src\assets\carrito-de-compras.png' alt="Logo" className='logo2' />
        </Link>
        </nav>
      </header>
    </>
  );
}
