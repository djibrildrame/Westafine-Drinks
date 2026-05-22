import React from 'react';
import "../Accueil/Accueil.css";
import Bissap from "../Westafine-img/ChatGPT Image 21 mai 2026, 04_40_02.png";
import Gimgembre from "../Westafine-img/ChatGPT Image 21 mai 2026, 04_37_15.png";

const Saveur = () => {
  return (
    <div>

        <h1 className='saveur'>Nos saveurs</h1>

    <div className="nossaveurs">
  <div className="cardSaveur">
    <img src={Bissap} className="imageSaveur" alt="Bissap Hibiscus" />

    <div className="texteSaveur">
      <h2>BISSAP<br />HIBISCUS</h2>
      <p>Intense, floral<br />et rafraîchissant.</p>
      <button>DÉCOUVRIR</button>
    </div>
  </div>

  <div className="cardSaveur">
    <img src={Gimgembre} className="imageSaveur" alt="Gingembre Menthe Vanillée" />

    <div className="texteSaveur2">
      <h2>GINGEMBRE<br />MENTHE VANILLÉE</h2>
      <p>Une fraîcheur naturelle<br />aux notes raffinées.</p>
      <button>DÉCOUVRIR</button>
    </div>
  </div>
</div>

    </div>
  )
}

export default Saveur