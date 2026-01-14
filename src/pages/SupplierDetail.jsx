import React from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import { PRODUCTS } from '../constants.js';
import ProductCard from '../components/ProductCard.jsx';
import './SupplierDetail.css';

const SupplierDetail = () => {
  const { name } = useParams();
  const { handleAddToCart } = useOutletContext();
  
  const decodedName = decodeURIComponent(name || "");
  const supplierProducts = PRODUCTS.filter(p => p.supplier.name === decodedName);
  const supplierInfo = supplierProducts[0]?.supplier;

  if (!supplierInfo) {
    return <main className="supplier-not-found"><h2>Proveedor no encontrado</h2></main>;
  }

  return (
    <main className="supplier-page">
      <header>
        <section>
          <h1>{supplierInfo.name}</h1>
          <p>{supplierInfo.bio}</p>
        </section>
        <article>
          <span>Ubicación Estratégica</span>
          <b>Guayaquil, EC</b>
        </article>
      </header>

      <nav>
        <h2>Catálogo de {supplierInfo.name}</h2>
      </nav>

      <section className="grid">
        {supplierProducts.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </section>
    </main>
  );
};

export default SupplierDetail;