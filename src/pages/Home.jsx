import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import { PRODUCTS } from '../constants.js';
import './Home.css';

const Home = () => {
  const specialProducts = [
    { product: [...PRODUCTS].sort((a,b) => b.salesCount - a.salesCount)[0], label: 'El más vendido' },
    { product: [...PRODUCTS].sort((a,b) => b.rating - a.rating)[0], label: 'El más favorito' },
    { product: [...PRODUCTS].sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))[0], label: 'El más reciente' }
  ];

  return (
    <main className="home-page">
      <header className="hero">
        <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop" alt="Hero" />
        <section>
          <h1>Moda sin<br/>límites</h1>
          <p>Nueva Colección 2024</p>
          <Link to="/" className="btn-minimal">Explorar</Link>
        </section>
      </header>

      <section className="featured">
        <nav>
          <h2>Selección Especial</h2>
          <Link to="/">Ver todo</Link>
        </nav>
        <section className="product-grid">
          {specialProducts.map(({ product, label }) => (
            <article key={product.id}>
              <small>{label}</small>
              <ProductCard product={product} />
            </article>
          ))}
        </section>
      </section>

      <section className="home-offers-banner">
        <Link to="/">
          <article className="offers-banner">
            <header>
              <small>Oportunidades de inventario</small>
              <h2>Liquidación Táctica</h2>
            </header>
            <footer>
              <span>Explorar ofertas &rarr;</span>
            </footer>
          </article>
        </Link>
      </section>
    </main>
  );
};

export default Home;