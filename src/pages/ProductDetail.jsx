import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link, useOutletContext } from 'react-router-dom';
import { PRODUCTS } from '../constants.js';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { handleAddToCart, handleAddToHistory } = useOutletContext();
  const product = PRODUCTS.find(p => p.id === Number(id));

  const [userRating, setUserRating] = useState(0);
  const [userComment, setUserComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (product) handleAddToHistory(product);
  }, [product]);

  const handleBack = () => {
    window.history.length > 1 ? navigate(-1) : navigate('/colecciones');
  };

  const handleMockSubmit = (e) => {
    e.preventDefault();
    if (userRating === 0) return alert("Selecciona una calificación.");
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setUserRating(0);
      setUserComment('');
      alert("¡Gracias por tu reseña!");
    }, 1200);
  };

  if (!product) return <main className="product-not-found"><h2>No encontrado</h2></main>;

  return (
    <main className="product-detail">
      <nav className="breadcrumb">
        <button onClick={handleBack}>&larr; Regresar</button>
      </nav>

      <section className="product-grid">
        <figure className="product-image">
          <img src={product.image} alt={product.name} />
        </figure>

        <aside className="product-info">
          <header>
            <h1>{product.name}</h1>
            <Link to={`/proveedor/${encodeURIComponent(product.supplier.name)}`} className="supplier-tag">
              Origen: {product.supplier.name}
            </Link>
          </header>

          <section className="price-box">
            <b>${product.price.toFixed(2)}</b>
          </section>
          
          <article className="description">
            <h3>Ficha Técnica</h3>
            <p>{product.description}</p>
          </article>

          <button onClick={() => handleAddToCart(product)} className="btn-minimal full-width">
            Adquirir Pieza
          </button>

          <section className="reviews-section">
            <header>
              <h3>Reseñas de Campo</h3>
            </header>
            
            <form className="review-form" onSubmit={handleMockSubmit}>
              <nav className="star-rating">
                {[1, 2, 3, 4, 5].map(star => (
                  <button key={star} type="button" onClick={() => setUserRating(star)} className={userRating >= star ? 'active' : ''}>★</button>
                ))}
              </nav>
              <textarea placeholder="Tu reporte sobre esta prenda..." value={userComment} onChange={e => setUserComment(e.target.value)} required />
              <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Enviando...' : 'Publicar Reporte'}</button>
            </form>

            <section className="reviews-list">
              {product.reviews.map((rev, i) => (
                <article key={i} className="review-card">
                  <nav className="stars">{'★'.repeat(rev.rating)}</nav>
                  <p>"{rev.comment}"</p>
                  <footer>— {rev.user}</footer>
                </article>
              ))}
            </section>
          </section>
        </aside>
      </section>
    </main>
  );
};

export default ProductDetail;