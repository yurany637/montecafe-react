import React from 'react';
import { useAuth } from '../../hooks/useAuth';

export default function Header({ title }) {
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <h2>{title}</h2>
      <div className="header-actions">
        <span>{user?.name}</span>
        <button className="btn-logout" onClick={logout}>Cerrar sesión</button>
      </div>
    </header>
  );
}