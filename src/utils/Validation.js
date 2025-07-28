export function validateCliente(values) {
  const errors = {};
  if (!values.nombre) errors.nombre = 'El nombre es obligatorio';
  if (!values.email) errors.email = 'El email es obligatorio';
  return errors;
}