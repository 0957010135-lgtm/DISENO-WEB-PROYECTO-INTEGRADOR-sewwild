import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import './Account.css';

const Account = () => {
  const { viewedHistory } = useOutletContext();
  const [activeTab, setActiveTab] = useState('perfil');
  const userName = "Edwin Ismael García García";
  const userEmail = "edwin.garcia@sewwild.com";

  const menu = ['perfil', 'pedidos', 'reseñas', 'historial', 'pagos'];

  return (
    <main className="account-page">
      <section className="layout-grid">
        <aside>
          <header>
            <h1>Mi Cuenta</h1>
            <section className="user-badge">
              <b>{userName}</b>
              <p>{userEmail}</p>
            </section>
          </header>
          <nav>
            {menu.map(m => (
              <button 
                key={m} 
                onClick={() => setActiveTab(m)} 
                className={activeTab === m ? 'active' : ''}
              >
                {m}
              </button>
            ))}
            <button className="logout">Cerrar Sesión</button>
          </nav>
        </aside>

        <article className="content-area">
          {activeTab === 'perfil' && (
            <section className="profile-form">
              <h2>Información Personal</h2>
              <form onSubmit={e => e.preventDefault()}>
                <fieldset>
                  <label>Nombre Completo</label>
                  <p>{userName}</p>
                </fieldset>
                <fieldset>
                  <label>Correo Electrónico</label>
                  <p>{userEmail}</p>
                </fieldset>
                <button type="button" className="btn-minimal">Actualizar Datos</button>
              </form>
            </section>
          )}

          {activeTab === 'pedidos' && (
            <section className="orders-section">
              <h2>Mis Pedidos</h2>
              <table>
                <thead>
                  <tr><th>Orden</th><th>Fecha</th><th>Total</th></tr>
                </thead>
                <tbody>
                  <tr><td>#SW-2024-001</td><td>15/02/2024</td><td>$120.00</td></tr>
                </tbody>
              </table>
            </section>
          )}

          {activeTab === 'reseñas' && (
            <section className="user-reviews">
              <h2>Mis Reseñas en Productos</h2>
              {/* Contenido 100% estático sin lógica de filtrado */}
              <article className="review-item">
                <header>
                  <Link to="/producto/1">
                    <h3>Chaqueta de Cuero Urbana</h3>
                  </Link>
                  <span>★★★★★</span>
                </header>
                <p>"Excelente calidad, el corte es perfecto y se siente muy premium."</p>
                <footer>Publicado como: {userName}</footer>
              </article>
            </section>
          )}

          {activeTab === 'pagos' && (
            <section className="payments-section">
              <h2>Método de Pago Predeterminado</h2>
              <article className="payment-card">
                <header>
                  <span>VISA</span>
                  <small>STEALTH BLACK</small>
                </header>
                <section className="card-number">
                  <b>•••• •••• •••• 4422</b>
                </section>
                <footer>
                  <p>EDWIN GARCIA</p>
                  <b>12/26</b>
                </footer>
              </article>
            </section>
          )}

          {activeTab === 'historial' && (
            <section className="view-history">
              <h2>Visto Recientemente</h2>
              <div className="history-grid">
                {viewedHistory.map(p => (
                  <Link key={p.id} to={`/producto/${p.id}`}>
                    <img src={p.image} alt={p.name} />
                    <h4>{p.name}</h4>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </section>
    </main>
  );
};

export default Account;