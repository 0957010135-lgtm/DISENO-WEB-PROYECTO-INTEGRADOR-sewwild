import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const hasDiscount = product.discount > 0;
  const discountedPrice = hasDiscount 
    ? product.price * (1 - product.discount / 100) 
    : product.price;

  return (
    <article className="product-card">
      <Link to="/">
        <img src={product.image} alt={product.name} />
        {hasDiscount && <mark>-{product.discount}%</mark>}
      </Link>
      
      <footer>
        <Link to="/">
          <h3>{product.name}</h3>
        </Link>
        
        <div className="product-price-info">
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
        </div>
      </footer>
    </article>
  );
};

export default ProductCard;