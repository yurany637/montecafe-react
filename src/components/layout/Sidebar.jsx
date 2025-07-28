import React from 'react';
import { NavLink } from 'react-router-dom';

// Ajusta estos ítems a los módulos reales del sistema Montecafe
const MENU = [
  { to: '/clientes', label: 'Clientes' },
  { to: '/proveedores', label: 'Proveedores' },
  { to: '/materia-prima', label: 'Materia Prima' },
  { to: '/inventario', label: 'Inventario' },
  { to: '/ventas', label: 'Ventas' },
  { to: '/pedidos', label: 'Pedidos' },
  { to: '/reportes', label: 'Reportes' },
  { to: '/configuracion', label: 'Configuración' },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">Montecafe</div>
      <nav>
        <ul>
          {MENU.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}