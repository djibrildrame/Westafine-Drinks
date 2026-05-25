import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Contact.css";
import Hibiscus from "../Westafine-img/hibiscus.webp";

const Form = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5050/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        navigate("/confirmation-contact");
      } else {
        alert(result.message || "Erreur lors de l'envoi");
      }

    } catch (error) {
      alert("Erreur serveur");
    }
  };

  return (
    <div>
      <h1 className="contact">CONTACT</h1>

      <div className="ornement-luxe">
        <span></span>
      </div>

      <div className="form">
        <div className="form2">
          <h2 className="ecrire">ÉCRIVEZ-NOUS</h2>

          <form className="formulaire" onSubmit={handleSubmit}>
            <input
              type="text"
              name="nom"
              placeholder="Nom"
              value={formData.nom}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="prenom"
              placeholder="Prénom"
              value={formData.prenom}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="telephone"
              placeholder="Téléphone"
              value={formData.telephone}
              onChange={handleChange}
            />

            <input
              type="text"
              name="sujet"
              placeholder="Sujet"
              value={formData.sujet}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              className="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <input
              type="submit"
              className="submit"
              value="ENVOYER"
            />
          </form>
        </div>

        <div className="separator2">
          <span></span>
        </div>

        <div className="yes">
          <div className="reseaux">
            <h2 className="coordonne">NOS COORDONNÉES</h2>

            <div className="social-item">
              <i className="fa-regular fa-envelope"></i>
              <p>contact.westafine@gmail.com</p>
            </div>

            <div className="social-item">
              <i className="fa-brands fa-instagram"></i>
              <p>@westafinedrinks</p>
            </div>

            <div className="social-item">
              <i className="fa-brands fa-tiktok"></i>
              <p>@westafinedrinks</p>
            </div>

            <div>
              <h2 className="Partenariat">PARTENARIAT</h2>
              <p>Restaurateurs, distributeurs, événements, mariage, inauguration</p>
            </div>

            <img className="fleurhibiscus" src={Hibiscus} alt="Hibiscus" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;