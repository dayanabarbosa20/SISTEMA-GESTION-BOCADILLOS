import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Productos from './pages/Productos';

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Bienvenido al Sistema de Gestión de Bocadillos</h2>
      <p>Selecciona una opción del menú para comenzar.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif' }}>
        <nav style={{ background: '#2c3e50', padding: '15px' }}>
          <Link to="/" style={{ color: 'white', marginRight: '20px', textDecoration: 'none', fontWeight: 'bold' }}>
            Inicio
          </Link>
          <Link to="/productos" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
            Gestión de Productos
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;