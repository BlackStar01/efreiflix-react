import React from "react";
import logo from "./logo.svg";
import "./Menu.css";

function Header() {
  return (
    <div>
      <div className="menu-container">
        <img src={logo} alt="Logo" className="logo" />
        <div className="menu-items">
          <a href="/" className="menu-item">Accueil</a>
          <a href="/series" className="menu-item">Mes séries</a>
          <a href="#" className="menu-item">Item 3</a>
          <a href="/connexion" className="menu-item">Connexion</a>
        </div>
      </div>
    </div>
    
    
  );
}

export default Header;
