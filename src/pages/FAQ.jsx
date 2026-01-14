import React from 'react';
import './FAQ.css';

const FAQ = () => {
  const faqs = [
    { q: "¿Cuál es el tiempo de entrega?", a: "Nuestros envíos estándar tardan de 2 a 5 días hábiles dentro del territorio nacional." },
    { q: "¿Cómo realizo una devolución?", a: "Tienes 30 días para devolver cualquier artículo en su estado original. El proceso se inicia desde tu panel de cuenta." },
    { q: "¿Tienen tiendas físicas?", a: "Actualmente operamos exclusivamente online para garantizar los precios más competitivos eliminando intermediarios." },
    { q: "¿Qué métodos de pago aceptan?", a: "Aceptamos todas las tarjetas de crédito/débito principales, PayPal y transferencias bancarias directas." }
  ];

  return (
    <main className="faq-page">
      <h1>Preguntas <span>Frecuentes</span></h1>
      <section>
        {faqs.map((faq, index) => (
          <article key={index}>
            <h3>
              <span>0{index + 1}</span>
              {faq.q}
            </h3>
            <p>{faq.a}</p>
          </article>
        ))}
      </section>
    </main>
  );
};

export default FAQ;