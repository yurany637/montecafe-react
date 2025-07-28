import { useState } from "react";

export default function ClienteForm({ onSubmit }) {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    estado: "ACTIVO",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      nombre: "",
      email: "",
      telefono: "",
      direccion: "",
      estado: "ACTIVO",
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Registrar Cliente</h2>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={form.nombre}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="telefono"
        placeholder="Teléfono"
        value={form.telefono}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="direccion"
        placeholder="Dirección"
        value={form.direccion}
        onChange={handleChange}
        required
      />
      <select name="estado" value={form.estado} onChange={handleChange}>
        <option value="ACTIVO">ACTIVO</option>
        <option value="INACTIVO">INACTIVO</option>
      </select>
      <button type="submit">Guardar</button>
    </form>
  );
}