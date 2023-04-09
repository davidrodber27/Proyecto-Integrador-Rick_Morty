import React from 'react';
import SearchBar from '../SearchBar.jsx';
import { Link } from 'react-router-dom';
import styled from './navbar.module.css';




export default function Navbar ({onSearch, addRandomCharacter, logout}){
    return (
       

      <nav className="navbar navbar-expand-lg">
        <style>
        {`
          .navbar-toggler {
            border: 2px solid green;
            border-color: green;
            
          }
        `}
      </style>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation" id="my-toggler-button">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
             <Link className={`nav-item ${styled['lin']}`} to='/home'> Home  </Link>
            </li>
            <li className="nav-item">
             <Link className={`nav-item ${styled['lin']}`} to='/about'> About </Link>
            </li>
            <li className="nav-item">
             <Link className={`nav-item ${styled['lin']}`} to='/favorites'> Favorites </Link>
            </li> 
          </ul>
          <SearchBar onSearch={onSearch} addRandomCharacter={addRandomCharacter} logout={logout} />
        </div>
      </div>
    </nav>   
  )
  
}




