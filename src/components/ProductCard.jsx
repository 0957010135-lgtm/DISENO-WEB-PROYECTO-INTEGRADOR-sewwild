import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

/**
 * ProductCard: Representación visual mínima de un producto.
 * Gestiona el cálculo visual de descuentos y enlace a detalle.
 */
const ProductCard = ({ product, onAddToCart }) => {
  const hasDiscount = product.discount > 0;
  const discountedPrice = hasDiscount 
    ? product.price * (1 - product.discount / 100) 
    : product.price;

  return (
    <article className="product-card">
      <Link to={`/producto/${product.id}`}>
        <img src={product.image} alt={product.name} />
        {hasDiscount && <mark>-{product.discount}%</mark>}
      </Link>
      
      <footer>
        <Link to={`/producto/${product.id}`}>
          <h3>{product.name}</h3>
        </Link>
        
        <nav>
          <p>
            {hasDiscount ? (
              <>
                <ins>${discountedPrice.toFixed(2)}</ins>
                <del>${product.price.toFixed(2)}</del>
              </>
            ) : (
              <span>${product.price.toFixed(2)}</span>
            )}
          </p>
          {/* Botón de acción rápida: Añadir al carrito */}
          <button onClick={() => onAddToCart(product)} aria-label="Añadir">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 100-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
            </svg>
          </button>
        </nav>
      </footer>
    </article>
  );
};

export default ProductCard;