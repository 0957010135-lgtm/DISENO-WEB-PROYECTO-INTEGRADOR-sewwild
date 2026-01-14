import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

/**
 * App: Componente raíz que gestiona el estado global.
 * Utiliza Context (vía Outlet) para proveer funciones a las páginas hijas.
 */
const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [viewedHistory, setViewedHistory] = useState([]);

  // Carga inicial desde LocalStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('sewwild-cart');
    const savedHistory = localStorage.getItem('sewwild-history');
    if (savedCart) try { setCartItems(JSON.parse(savedCart)); } catch (e) {}
    if (savedHistory) try { setViewedHistory(JSON.parse(savedHistory)); } catch (e) {}
  }, []);

  // Sincronización automática con LocalStorage al cambiar estados
  useEffect(() => { localStorage.setItem('sewwild-cart', JSON.stringify(cartItems)); }, [cartItems]);
  useEffect(() => { localStorage.setItem('sewwild-history', JSON.stringify(viewedHistory)); }, [viewedHistory]);

  // Lógica: Añadir al carrito (incrementa cantidad si ya existe)
  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      return existing 
        ? prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...prev, { ...product, quantity: 1 }];
    });
  };

  // Lógica: Historial de navegación (evita duplicados y limita a 10 items)
  const handleAddToHistory = (product) => {
    setViewedHistory(prev => {
      if (prev[0]?.id === product.id) return prev;
      return [product, ...prev.filter(p => p.id !== product.id)].slice(0, 10);
    });
  };

  const handleRemoveFromCart = (id) => setCartItems(prev => prev.filter(item => item.id !== id));
  const handleUpdateQuantity = (id, quantity) => setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="app-layout">
      <Header cartCount={totalItems} />
      <Outlet context={{ 
        cartItems, viewedHistory, handleAddToCart, 
        handleAddToHistory, handleRemoveFromCart, handleUpdateQuantity
      }} />
      <Footer />
    </div>
  );
};

export default App;