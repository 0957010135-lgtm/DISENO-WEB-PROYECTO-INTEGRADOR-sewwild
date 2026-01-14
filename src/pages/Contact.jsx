import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <main className="contact-page">
      <header>
        <small>Canales de Enlace</small>
        <h1>Hablemos</h1>
        <p>
          Si tienes dudas sobre tu equipamiento, colaboraciones o simplemente quieres conectar con la marca, estamos disponibles.
        </p>
      </header>
      
      <section>
        <article>
          <small>Correo Electrónico</small>
          <a href="mailto:support@sewwild.com">support@sewwild.com</a>
        </article>
        
        <article>
          <small>Atención Telefónica</small>
          <a href="tel:+59342123456">+593 4 212 3456</a>
        </article>
        
        <article>
          <small>Base de Operaciones</small>
          <p>Guayaquil, <span>EC</span></p>
        </article>
      </section>

      <footer>
        <h3>Soporte Estratégico</h3>
        <p>Lunes a Viernes: 09:00 - 18:00 (GMT-5)</p>
        <b>GYE</b>
      </footer>
    </main>
  );
};

export default Contact;