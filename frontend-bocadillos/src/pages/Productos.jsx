import React, { useEffect, useState } from 'react';
import api from '../services/api';

function Productos() {
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');

  // Cargar productos desde Java
  const cargarProductos = async () => {
    try {
      const response = await api.get('/productos');
      setProductos(response.data);
    } catch (error) {
      console.error('Error al cargar productos:', error);
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  // Guardar nuevo producto
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/productos', { nombre, precio: parseFloat(precio) });
      setNombre('');
      setPrecio('');
      cargarProductos();
    } catch (error) {
      console.error('Error al guardar producto:', error);
    }
  };

  // Eliminar producto
  const handleEliminar = async (id) => {
    if (window.confirm('¿Seguro que deseas eliminar este producto?')) {
      try {
        await api.delete(`/productos/${id}`);
        cargarProductos();
      } catch (error) {
        console.error('Error al eliminar producto:', error);
      }
    }
  };

  return (
    <div style={{ padding: '30px', maxWidth: '800px', margin: '0 auto', color: '#333' }}>
      <h2>Gestión de Productos - Fábrica de Bocadillos</h2>

      {/* Formulario */}
      <form onSubmit={handleSubmit} style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', marginBottom: '25px', border: '1px solid #ddd' }}>
        <h3 style={{ marginTop: 0 }}>Agregar Nuevo Producto</h3>
        <div style={{ marginBottom: '12px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Nombre:</label>
          <input 
            type="text" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
            required 
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Precio:</label>
          <input 
            type="number" 
            value={precio} 
            onChange={(e) => setPrecio(e.target.value)} 
            required 
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', background: '#27ae60', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
          Guardar Producto
        </button>
      </form>

      {/* Tabla */}
      <h3>Listado de Productos</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ background: '#2c3e50', color: 'white' }}>
            <th style={{ padding: '10px' }}>ID</th>
            <th style={{ padding: '10px' }}>Nombre</th>
            <th style={{ padding: '10px' }}>Precio</th>
            <th style={{ padding: '10px' }}>Acción</th>
          </tr>
        </thead>
        <tbody>
          {productos.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ padding: '15px', textAlign: 'center', color: '#777' }}>No hay productos registrados o el Backend de Java está apagado.</td>
            </tr>
          ) : (
            productos.map((prod) => (
              <tr key={prod.id} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '10px' }}>{prod.id}</td>
                <td style={{ padding: '10px' }}>{prod.nombre}</td>
                <td style={{ padding: '10px' }}>${prod.precio}</td>
                <td style={{ padding: '10px' }}>
                  <button onClick={() => handleEliminar(prod.id)} style={{ padding: '5px 10px', background: '#e74c3c', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Productos;