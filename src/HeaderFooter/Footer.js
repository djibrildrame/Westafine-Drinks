import React from "react";
import logo from "..//Westafine-img/IMG_3551webp";

const Accueil = () => {
  return (
    <div>
<footer className="footer">
  <div className="footerLogo">
    <img src={logo} alt="Logo Westafine" />
  </div>

  <div className="footerInfos">
    <p>Instagram : @westafinedrinks</p>
    <p>TikTok : @westafinedrinks</p>
    <p>Mail : contact.westafine@gmail.com</p>
  </div>

  <p className="copyright">
    © WESTAFINE DRINKS - TOUS DROITS RÉSERVÉS
  </p>
</footer>
    </div>
  );
};

export default Accueil;