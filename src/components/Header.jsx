import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ cartCount }) => {
  return (
    <header className="site-header">
      <nav>
        <section>
          <Link to="/" className="logo">SEW<span>WILD</span></Link>
          <Link to="/">Inicio</Link>
          <Link to="/colecciones">Colecciones</Link>
          <Link to="/buscar">Buscar</Link>
        </section>

        <section>
          <Link to="/cuenta">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </Link>
          <Link to="/carrito" className="cart-link">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && <span>{cartCount}</span>}
          </Link>
        </section>
      </nav>
    </header>
  );
};

export default Header;