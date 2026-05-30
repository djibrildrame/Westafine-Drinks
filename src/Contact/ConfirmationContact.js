import React from "react";
import Header from "../HeaderFooter/Header";
import Footer from "../HeaderFooter/Footer";
import "./Contact.css";

const ConfirmationContact = () => {
  return (
    <div>
      <Header />

      <section className="confirmation-contact">
        <h1>MESSAGE ENVOYÉ</h1>

        <p>
          Merci pour votre message.
          <br />
          L’équipe Westafine vous répondra dans les meilleurs délais.
        </p>

        <a href="/" className="retour-accueil">
          RETOUR À L’ACCUEIL
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default ConfirmationContact;