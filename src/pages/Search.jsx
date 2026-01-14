import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import { PRODUCTS, SUPPLIERS } from '../constants.js';
import './Search.css';

const Search = () => {
  const { handleAddToCart } = useOutletContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchMode, setSearchMode] = useState('productos');

  const filteredProducts = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredSuppliers = Object.values(SUPPLIERS).filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="search-page">
      <header className="search-header">
        <h1>Explorar</h1>
        <nav className="search-tabs">
          {['productos', 'proveedores'].map(mode => (
            <button 
              key={mode} 
              onClick={() => { setSearchMode(mode); setSearchTerm(''); }} 
              className={searchMode === mode ? 'active' : ''}
            >
              {mode}
            </button>
          ))}
        </nav>
        <section className="search-input-wrapper">
          <input 
            type="text" 
            placeholder={`BUSCAR ${searchMode.toUpperCase()}...`} 
            value={searchTerm} 
            onChange={e => setSearchTerm(e.target.value)} 
          />
        </section>
      </header>

      <section className="results-grid">
        {searchMode === 'productos' ? (
          filteredProducts.length > 0 ? (
            filteredProducts.map(p => <ProductCard key={p.id} product={p} onAddToCart={handleAddToCart} />)
          ) : <p className="no-results">Sin coincidencias en el catálogo.</p>
        ) : (
          filteredSuppliers.length > 0 ? (
            filteredSuppliers.map(s => (
              <article key={s.name} className="supplier-result">
                <Link to={`/proveedor/${encodeURIComponent(s.name)}`}>
                  <header>
                    <small>Artesano Verificado</small>
                    <h3>{s.name}</h3>
                  </header>
                  <p>{s.bio}</p>
                  <footer>Ver Perfil de Taller &rarr;</footer>
                </Link>
              </article>
            ))
          ) : <p className="no-results">Proveedor no localizado.</p>
        )}
      </section>
    </main>
  );
};

export default Search;