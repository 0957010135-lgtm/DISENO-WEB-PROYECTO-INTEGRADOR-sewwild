import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <section className="footer-main">
        <article>
          <h2>SEW<span>WILD</span></h2>
          <p>Equipamiento audaz para la jungla urbana. Nacidos en Guayaquil.</p>
        </article>
        
        <nav>
          <h3>Navegación</h3>
          <Link to="/acerca-de">Acerca de</Link>
          <Link to="/preguntas-frecuentes">FAQs</Link>
          <Link to="/contacto">Contáctanos</Link>
        </nav>
      </section>
      
      <section className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SewWild Apparel. GYE, EC.</p>
      </section>
    </footer>
  );
};

export default Footer;