import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import { PRODUCTS } from '../constants.js';
import './Home.css';

/**
 * Home: Página de aterrizaje.
 * Filtra productos por éxito de ventas, calificación y fecha para la "Selección Especial".
 */
const Home = () => {
  const { handleAddToCart } = useOutletContext();

  // Generamos los 3 destacados basados en criterios específicos
  const specialProducts = [
    { product: [...PRODUCTS].sort((a,b) => b.salesCount - a.salesCount)[0], label: 'El más vendido' },
    { product: [...PRODUCTS].sort((a,b) => b.rating - a.rating)[0], label: 'El más favorito' },
    { product: [...PRODUCTS].sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))[0], label: 'El más reciente' }
  ];

  // Comprobar si existen productos con descuento para mostrar el banner
  const hasOffers = PRODUCTS.some(p => p.discount > 0);

  return (
    <main className="home-page">
      <header className="hero">
        <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop" alt="Hero" />
        <section>
          <h1>Moda sin<br/>límites</h1>
          <p>Nueva Colección 2024</p>
          <Link to="/colecciones" className="btn-minimal">Explorar</Link>
        </section>
      </header>

      {/* Sección de productos destacados con etiquetas dinámicas */}
      <section className="featured">
        <nav>
          <h2>Selección Especial</h2>
          <Link to="/colecciones">Ver todo</Link>
        </nav>
        <section className="product-grid">
          {specialProducts.map(({ product, label }) => (
            <article key={product.id}>
              <small>{label}</small>
              <ProductCard product={product} onAddToCart={handleAddToCart} />
            </article>
          ))}
        </section>
      </section>

      {/* Banner de acceso a ofertas (si existen) */}
      {hasOffers && (
        <section className="home-offers-banner">
          <Link to="/ofertas">
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
      )}
    </main>
  );
};

export default Home;