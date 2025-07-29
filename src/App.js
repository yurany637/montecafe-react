import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ClienteListPage from './pages/ClienteListPage';
import ClienteEditPage from './pages/ClienteEditPage';
import ClienteCreatePage from './pages/ClienteCreatePage';
// Puedes crear componentes dummy para otras rutas si las necesitas
const Dashboard = () => <div style={{padding: '30px'}}><h1>Dashboard de Inicio</h1><p>Contenido del Dashboard.</p></div>;
const Proveedores = () => <div style={{padding: '30px'}}><h1>Módulo de Proveedores</h1><p>Contenido de Proveedores.</p></div>;
const MateriaPrima = () => <div style={{padding: '30px'}}><h1>Módulo de Materia Prima</h1><p>Contenido de Materia Prima.</p></div>;
const Inventario = () => <div style={{padding: '30px'}}><h1>Módulo de Inventario</h1><p>Contenido de Inventario.</p></div>;
const Ventas = () => <div style={{padding: '30px'}}><h1>Módulo de Ventas</h1><p>Contenido de Ventas.</p></div>;
const Configuracion = () => <div style={{padding: '30px'}}><h1>Módulo de Configuración</h1><p>Contenido de Configuración.</p></div>;


function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta por defecto que redirige a /clientes */}
        <Route path="/" element={<Navigate to="/clientes" replace />} />
        
        {/* Rutas para el módulo de Clientes */}
        <Route path="/clientes" element={<ClienteListPage />} />
        <Route path="/clientes/new" element={<ClienteCreatePage />} />
        <Route path="/clientes/edit/:id" element={<ClienteEditPage />} />

        {/* Rutas para otros módulos (pueden ser componentes dummy o reales) */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/proveedores" element={<Proveedores />} />
        <Route path="/materia_prima" element={<MateriaPrima />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/ventas" element={<Ventas />} />
        <Route path="/configuracion" element={<Configuracion />} />

        {/* Puedes añadir una ruta para 404 Not Found */}
        <Route path="*" element={<h2 style={{textAlign: 'center', marginTop: '50px'}}>404 - Página No Encontrada</h2>} />
      </Routes>
    </Router>
  );
}

export default App;