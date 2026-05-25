import React from 'react';
import "../Pvente/PointVente.css";
import Tremblay from "../Westafine-img/carrefour-tremblay.webp";

const Articles = () => {
  const pventes = [
    {
      id: 1,
      region: "Paris",
      adresse: "Centre commercial Vert Galant",
      ville: "93290 Tremblay-en-France",
      horaires: "Lundi-Samedi : 8H30-21H00",
      picture: Tremblay
    }
  ];

  return (
    <div>
      <h1 className="vente">NOS POINTS DE VENTES</h1>

      <div className="ornement-luxe">
        <span></span>
      </div>

      <p className="pv">
        Retrouvez prochainement Westafine
        <br />
        dans ces différents points de vente partenaires.
      </p>

      {pventes.map((pvente) => (
  <section className="point-section" key={pvente.id}>
    <article className="point-card">

      <div className="point-info">
        

        <h2>{pvente.region}</h2>

        <p className="shop-name">{pvente.adresse}</p>
        <p>{pvente.ville}</p>

        <div className="small-line"></div>

        <p className="hours">{pvente.horaires}</p>
      </div>

      <div className="point-image">
        <img src={pvente.picture} alt={pvente.region} />
      </div>

    </article>
  </section>
))}


    </div>
  );
};

export default Articles;