import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import { PRODUCTS } from '../constants.js';
import './Collections.css';

/**
 * Collections: Catálogo completo con filtrado por pestañas.
 */
const Collections = () => {
  const { handleAddToCart } = useOutletContext();
  const [activeTab, setActiveTab] = useState('Favoritos');

  // Mapeo de funciones de ordenado para evitar condicionales complejos
  const sortingLogic = {
    'Favoritos': (a, b) => b.salesCount - a.salesCount,
    'Novedades': (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    'Top': (a, b) => b.rating - a.rating
  };

  const filteredProducts = [...PRODUCTS].sort(sortingLogic[activeTab]);

  return (
    <main className="collections-page">
      <header>
        <h1>Colecciones</h1>
        <nav>
          {Object.keys(sortingLogic).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={activeTab === tab ? 'active' : ''}
            >
              {tab}
            </button>
          ))}
        </nav>
      </header>

      <section className="catalog-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </section>
    </main>
  );
};

export default Collections;