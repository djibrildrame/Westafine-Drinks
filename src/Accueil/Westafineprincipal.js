import React from "react";
import { Link } from "react-router-dom";
import Soleil from "../Westafine-img/ChatGPT Image 20 mai 2026, 04_39_21.webp";
import "../Accueil/Accueil.css";

const Westafineprincipal = () => {
  return (
    <section className="hero">
  <img src={Soleil} className="heroImg" alt="Westafine plage" />

  <div className="heroText">
    <h1>WESTAFINE</h1>
    <p>L'ESSENCE DE L'AFRIQUE, LA FRAÎCHEUR EN HÉRITAGE.</p>

    <div className="heroTags">
      <span>NATUREL</span>
      <span>•</span>
      <span>PREMIUM</span>
      <span>•</span>
      <span>RAFFRAÎCHISSANT</span>
    </div>

    <div className="heroButtons">
     <Link to="Histoire"><button>Découvrir</button></Link>
     
      <Link to="Saveur">
      <button className="outline">Nos saveurs</button>
      </Link>
    </div>
  </div>
</section>
  );
};

export default Westafineprincipal;