import React, { useState } from 'react';
import "../Saveur/Saveur.css";

import Bissap from "../Westafine-img/imgbissap.JPG";
import Gingembre from "../Westafine-img/imggingembre.JPG";
import GNAMAKOUDJI from "../Westafine-img/imgananas.JPG";

import Header from '../ HeaderFooter/Header';
import Footer from '../ HeaderFooter/Footer';

const Saveur = () => {
  const produits = [
    {
      id: 1,
      title: "BISSAP\nHIBISCUS",
      img: Bissap,
      notes: ["Hibiscus", "Menthe", "Vanille"],
      phrase: "Une composition florale intense aux nuances\nfraîches et veloutées, pensée comme une\nexpérience de dégustation élégante et contemporaine.",
      details: "L’hibiscus s’exprime ici dans une création vibrante et sophistiquée, équilibrée par une fraîcheur végétale et une douceur subtile en finale."
    },
    {
      id: 2,
      title: "GINGEMBRE\nMENTHE\nVANILLIÉ",
      img: Gingembre,
      notes: ["Gingembre", "Menthe", "Citron", "Vanille"],
      phrase: "Une expression raffinée du gingembre,relevée\n par une fraîcheur citronnée et une\n douceur vanillée parfaitement équilibrée.",
      details: "Une expression fraîche et vibrante portée par l’intensité du gingembre, relevée d’accents citronnés et d’une finale doucement vanillée."
    },
    {
      id: 3,
      title: "GNAMAKOUDJI",
      img: GNAMAKOUDJI,
      notes: ["Gingembre", "Ananas", "Citron vert", "Menthe", "Vanille"],
      phrase: "Une signature intense et lumineuse portée par le caractère du gingembre, relevée d’accents\ntropicaux et d’une fraîcheur subtilement mentholée.",
      details: "Une boisson de caractère, solaire et intense, portée par le gingembre, l’ananas et la fraîcheur du citron vert."
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [produitChoisi, setProduitChoisi] = useState(null);

  const ouvrirModal = (produit) => {
    setProduitChoisi(produit);
    setModalOpen(true);
  };

  const fermerModal = () => {
    setModalOpen(false);
    setProduitChoisi(null);
  };

  return (
    <div>
      <Header />

      {produits.map((produit) => (
        <section key={produit.id}>
          <article className="article">
            <div>
              <img
                src={produit.img}
                className="saveurimg"
                alt={produit.title}
              />
            </div>

            <div className="description">
              <h1 className="title-saveur">{produit.title}</h1>

              <p className="phrase">{produit.phrase}</p>

              <h3>Signature aromatique</h3>

              <ul>
                {produit.notes.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>

              <button className="btn-decouvrir" onClick={() => ouvrirModal(produit)}>
                DÉCOUVRIR
              </button>
            </div>
          </article>
        </section>
      ))}

      {modalOpen && produitChoisi && (
        <div className="modal-overlay" onClick={fermerModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={fermerModal}>×</button>

            <div className="modal-image-box">
              <img src={produitChoisi.img} alt={produitChoisi.title} />
            </div>

            <div className="modal-text">
              <p className="modal-small-title">WESTAFINE DRINKS</p>

              <h2>{produitChoisi.title}</h2>

              <div className="modal-separator">
                <span></span>
              </div>

              <p className="modal-phrase">{produitChoisi.details}</p>

              <h4>Notes aromatiques</h4>

              <div className="modal-notes">
                {produitChoisi.notes.map((note, index) => (
                  <span key={index}>{note}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Saveur;