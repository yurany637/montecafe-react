import React, { useState, useEffect } from 'react';

export default function ClienteForm({ initialValues, onSubmit, submitting, title }) {
  const [values, setValues] = useState(initialValues || { nombre: '', telefono: '', email: '', direccion: '' });

  // Actualiza los valores del formulario si initialValues cambian (ej. al editar)
  useEffect(() => {
    if (initialValues) {
      setValues(initialValues);
    }
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <div className="form">
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre del cliente</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Ej: Juan Pérez"
            value={values.nombre}
            onChange={handleChange}
            disabled={submitting}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            placeholder="Ej: 3101234567"
            value={values.telefono}
            onChange={handleChange}
            disabled={submitting}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="cliente@email.com"
            value={values.email}
            onChange={handleChange}
            disabled={submitting}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="direccion">Dirección</label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            placeholder="Ej: Calle 123, Bogotá"
            value={values.direccion}
            onChange={handleChange}
            disabled={submitting}
            required
          />
        </div>
        <button type="submit" disabled={submitting}>
          {submitting ? 'Guardando...' : title}
        </button>
      </form>
    </div>
  );
}