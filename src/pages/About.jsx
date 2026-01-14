import React from 'react';
import './About.css';

const About = () => {
  return (
    <main className="about-page">
      <header>
        <small>Nuestra Herencia</small>
        <h1>Nacidos en la <br/>jungla <span>urbana</span></h1>
      </header>
      
      <article>
        <p>
          SewWild no es solo una marca de ropa; es un manifiesto visual de resistencia contra la uniformidad. Fundada en Guayaquil en 2023, nuestra misión es equipar a los exploradores modernos con prendas que fusionan la elegancia técnica y la audacia callejera.
        </p>
        <blockquote>
          "La moda es la armadura para sobrevivir a la realidad de la jungla cotidiana."
        </blockquote>
        <p>
          Cada costura, cada fibra y cada terminación es seleccionada bajo estándares de alta precisión para garantizar que nuestras piezas no solo luzcan impecables hoy, sino que se conviertan en artefactos de estilo atemporales.
        </p>
      </article>
    </main>
  );
};

export default About;