import React from 'react';
import Sidebar from '../common/Sidebar'; // Importa el Sidebar

export default function AppLayout({ title, children }) {
  return (
    <div className="layout">
      <Sidebar /> {/* Renderiza el menú lateral */}
      <div className="main-content">
        <div className="header-top">
          <h1>{title}</h1>
          <div className="admin-controls">
            <strong>Admin</strong>
            <a href="/index.html" className="logout-btn" onClick={() => alert('Cerrando sesión...')}>Cerrar sesión</a>
          </div>
        </div>
        <main>
          {children}
        </main>
      </div>
    </div>
  );
}