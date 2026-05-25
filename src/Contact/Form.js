import React from 'react';
import "./Contact.css";
import Hibiscus from "../Westafine-img/hibiscus.png";


const Form = () => {
  return (
    <div>
        <h1 className='contact'>CONTACT</h1>
         <div className="ornement-luxe">
        <span></span>
      </div>
      
      <div className='form'>
      <div className='form2'>
       <h2 className='ecrire'>ÉCRIVEZ-NOUS</h2>

       <form className='formulaire'>

        <input type='text'  placeholder='Nom'/>
        <input type='text'  placeholder='Prénom'/>
        <input type='text'  placeholder='Email'/>
        <input type='text'  placeholder='Sujet'/>
        <input type='text' className='message' placeholder='Message'/>
        <input type='submit' className='submit' value="ENVOYER" />


       </form>
      </div>

       <div className="separator2">
        <span></span>
      </div>


      <div className='yes'>
 

        <div className="reseaux">
            <h2 className='coordonne'>NOS COORDONNÉES</h2>


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
    <h2 className='Partenariat'>PARTENARIAT</h2>
    <p>Restaurateurs, distributeurs, événements, mariage, inauguration</p>
  </div>

  <img className='fleurhibiscus' src={Hibiscus} alt='Hibiscus'/>

</div>

      </div>
     
      </div>
    </div>
  )
}

export default Form;