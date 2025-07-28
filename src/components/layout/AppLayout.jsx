import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
// IMPORTA TU CSS GLOBAL REAL:
import '../../assets/css/styles.css'; // <-- ajusta esta ruta a tu CSS original

export default function AppLayout({ children, title }) {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="app-content">
        <Header title={title} />
        <main className="app-main">{children}</main>
      </div>
    </div>
  );
}