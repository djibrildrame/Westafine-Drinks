import React from 'react'
import { Link } from "react-router-dom";
import logo from "../Westafine-img/Logo.png";
import "../ HeaderFooter/Header.css";


const Header = () => {
  return (
    <div>
      <div className="rubrique">
        <div>
        <img src={logo} className="logo" alt='logo Westafine'/>
        </div>
        <div className="link">
        <Link to='/'>Accueil</Link>
        <Link to='/Histoire'>Histoire</Link>
        <Link to='/Saveur'>Saveurs</Link>
        <Link>Point de vente</Link>
        <Link>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Header