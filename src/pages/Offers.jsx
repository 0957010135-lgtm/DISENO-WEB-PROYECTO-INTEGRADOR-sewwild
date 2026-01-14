import React from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import { PRODUCTS } from '../constants.js';
import './Offers.css';

const Offers = () => {
  const { handleAddToCart } = useOutletContext();
  const navigate = useNavigate();

  const discountedProducts = PRODUCTS
    .filter(product => (product.discount || 0) > 0)
    .sort((a, b) => (b.discount || 0) - (a.discount || 0));

  return (
    <main className="offers-page">
      <header>
        <section>
          <small>Oportunidades Limitadas</small>
          <h1>Venta de <span>Ofertas</span></h1>
        </section>
        <button onClick={() => navigate('/')}>&larr; Volver</button>
      </header>

      {discountedProducts.length > 0 ? (
        <section className="grid">
          {discountedProducts.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </section>
      ) : (
        <article className="empty">
          <p>No hay ofertas activas en este momento.</p>
          <button onClick={() => navigate('/colecciones')}>Ver toda la colección</button>
        </article>
      )}

      <footer className="urgency">
        <section>
          <h2>Drop Táctico en Curso</h2>
          <p>Las ofertas caducan al cierre de inventario.</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="TU EMAIL AQUÍ..." />
            <button type="submit">Suscribirse</button>
          </form>
        </section>
        <b>SALE</b>
      </footer>
    </main>
  );
};

export default Offers;