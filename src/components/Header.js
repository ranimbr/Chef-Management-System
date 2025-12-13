import React from 'react'
import { NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <div>  
      <header className="main_menu home_menu">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="index.html"> 
                  <img src="img/logo.png" alt="logo" /> 
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                  aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse main-menu-item justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup-chef">Sign up chef</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup-client">Sign up client</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/add-dish">Add Plats</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/dish-list">Plats</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/users-list">Chefs & Client</NavLink>
        </li>
      </ul>
    </div>
                
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
