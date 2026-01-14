import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Collections from './pages/Collections.jsx';
import Search from './pages/Search.jsx';
import Offers from './pages/Offers.jsx';
import Cart from './pages/Cart.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import SupplierDetail from './pages/SupplierDetail.jsx';
import Account from './pages/Account.jsx';
import About from './pages/About.jsx';
import FAQ from './pages/FAQ.jsx';
import Contact from './pages/Contact.jsx';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="colecciones" element={<Collections />} />
            <Route path="buscar" element={<Search />} />
            <Route path="ofertas" element={<Offers />} />
            <Route path="carrito" element={<Cart />} />
            <Route path="producto/:id" element={<ProductDetail />} />
            <Route path="proveedor/:name" element={<SupplierDetail />} />
            <Route path="cuenta" element={<Account />} />
            <Route path="acerca-de" element={<About />} />
            <Route path="preguntas-frecuentes" element={<FAQ />} />
            <Route path="contacto" element={<Contact />} />
          </Route>
        </Routes>
      </HashRouter>
    </React.StrictMode>
  );
}