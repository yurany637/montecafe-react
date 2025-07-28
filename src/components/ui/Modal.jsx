import React from 'react';

export default function Modal({ title, isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <header className="modal-header">
          <h3>{title}</h3>
          <button onClick={onClose} aria-label="Cerrar">✕</button>
        </header>
        <section className="modal-body">{children}</section>
      </div>
    </div>
  );
}