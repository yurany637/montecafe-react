export default function ClientesForm() {
  return (
    <div>
      <h1>Registrar Cliente</h1>
      <form>
        <label>Nombre:</label>
        <input type="text" name="nombre" />

        <label>Email:</label>
        <input type="email" name="email" />

        <label>Teléfono:</label>
        <input type="text" name="telefono" />

        <label>Dirección:</label>
        <input type="text" name="direccion" />

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}