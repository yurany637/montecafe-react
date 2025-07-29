import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <div className="sidebar">
      <h2>Montecafe</h2>
      <Link to="/dashboard" className={getLinkClass('/dashboard')}>Inicio</Link>
      <Link to="/proveedores" className={getLinkClass('/proveedores')}>Proveedores</Link>
      <Link to="/materia_prima" className={getLinkClass('/materia_prima')}>Materia Prima</Link>
      <Link to="/inventario" className={getLinkClass('/inventario')}>Inventario</Link>
      <Link to="/ventas" className={getLinkClass('/ventas')}>Ventas</Link>
      <Link to="/clientes" className={getLinkClass('/clientes')}>Clientes</Link>
      {/* Eliminado: <Link to="/reportes" className={getLinkClass('/reportes')}>Reportes</Link> */}
      <Link to="/configuracion" className={getLinkClass('/configuracion')}>Configuración</Link>
    </div>
  );
}