import React from "react";
import Header from "../ HeaderFooter/Header";
import Westafineprincipal from "./Westafineprincipal";
import Premium from "./Premium";
import Saveur from "../Accueil/Saveur";
import Footer from "..// HeaderFooter/Footer";
import Video from "./Video";


const Accueil = () => {
  return (
    <div>
      <Header />
      <Westafineprincipal />
      <Premium/>
      <Saveur/>
      <Video/>
      <Footer/>

    </div>
  );
};

export default Accueil;