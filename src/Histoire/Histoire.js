import React from 'react';
import Header from '../HeaderFooter/Header';
import Footer from "../HeaderFooter/Footer";
import Introduction from './Introduction';
import Explication from './Explication';
import Citron from './Citron';


const Histoire = () => {
  return (
    <div>
        <Header/>
        <Introduction/>
        <Explication/>
        <Citron/>
        <Footer/>

    </div>
  )
}

export default Histoire