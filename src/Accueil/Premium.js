import React from 'react';
import gimgembre from "../Westafine-img/gimgembre.png";

const Premium = () => {
  return (
    <div>
        <div className='part2'>
        <div className='experience'>
        <h2>UNE EXPÉRIENCE<br/>PREMIUM</h2>
        <p>Westafine revisite les saveurs naturelles africaines dans une version moderne,<br/>raffinée et élégante.<br/><br/>Pensée pour offrir fraicheur, authenticité<br/> et sophistication à chaque dégustation.</p>
        <button className='savoirplus'>EN SAVOIR PLUS</button>
        </div>
        <div>
        <img src={gimgembre} className='gimgembre' alt='Westafine gimgembre'/>
        </div>
        </div>
    </div>
  )
}

export default Premium