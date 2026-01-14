import React from 'react';
import { useOutletContext, Link, useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cartItems, handleRemoveFromCart, handleUpdateQuantity } = useOutletContext();
  const navigate = useNavigate();
  
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal > 150 || subtotal === 0 ? subtotal : subtotal + 15;

  if (cartItems.length === 0) {
    return (
      <main className="cart-empty">
        <h1>Bolsa Vacía</h1>
        <p>Tu inventario está en cero.</p>
        <button onClick={() => navigate('/colecciones')} className="btn-minimal">Reabastecer</button>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <header>
        <h1>Bolsa de <span>Compras</span></h1>
      </header>

      <section className="cart-layout">
        <section className="cart-items">
          {cartItems.map(item => (
            <article key={item.id} className="cart-item">
              <Link to={`/producto/${item.id}`}>
                <img src={item.image} alt={item.name} />
              </Link>
              
              <section className="item-details">
                <header>
                  <h3>{item.name}</h3>
                  <button onClick={() => handleRemoveFromCart(item.id)} aria-label="Eliminar">&times;</button>
                </header>
                
                <footer>
                  <nav className="quantity-controls">
                    <button onClick={() => handleUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                  </nav>
                  <b>${(item.price * item.quantity).toFixed(2)}</b>
                </footer>
              </section>
            </article>
          ))}
        </section>

        <aside className="cart-summary">
          <h2>Resumen de Carga</h2>
          <section>
            <p>Subtotal <span>${subtotal.toFixed(2)}</span></p>
            <p>Envío GYE <span>{subtotal > 150 ? 'GRATIS' : '$15.00'}</span></p>
            <hr />
            <p className="total">Total <span>${total.toFixed(2)}</span></p>
          </section>
          <button className="btn-minimal">Desplegar Pedido</button>
        </aside>
      </section>
    </main>
  );
};

export default Cart;