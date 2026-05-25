import React from 'react';
import "../Histoire/Histoire.css";
import Fleur from "..//Westafine-img/Fleur.webp";

const Introduction = () => {
  return (
    <div className='intro'>
        <div>
            <h1 className='notrehistoire'>NOTRE HISTOIRE</h1>
            <div class="separator">
            <div class="diamond"></div>
            
            </div>
            <p>Inspirée par la richesse des plantes,des fruits<br/> et des traditions africaines, chaque dégustation<br/>est un moment de prestige, de fraîcheur et d’évasion.</p>
            
            <div>
            <div class="separator">
           <span class="diamond"></span>

            </div>
            
           <p>Trois amis sous forme de trois racines originaires de<br/>différents pays du continent Africain qui se sont inspiré de la richesse<br/> de celui-ci afin de les innover et les servir en rafraîchissement. </p>
           <p className='vision'>Des saveurs, une vision, une signature.</p>
            </div>
        </div>
        <div>
           <img src={Fleur} className='fleur' alt='fleur hibiscus'/>
        </div>


    </div>
  )
}

export default Introduction