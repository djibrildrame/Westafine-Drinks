import React from 'react';
import Header from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';
import Articles from '../Pvente/Articles';
import "../Pvente/PointVente.css";

const PointVente = () => {
  return (
    <div>
      <Header />
      <Articles />
      <Footer />
    </div>
  )
}

export default PointVente;