import { useClientes } from "../../hooks/useClientes";
import { clientesService } from "../../api/clientesService";
import ClienteForm from "../../components/forms/ClienteForm";

export default function ClientesListPage() {
  const { clientes, setClientes, loading } = useClientes();

  const handleAdd = async (cliente) => {
    const nuevo = await clientesService.create(cliente);
    setClientes((prev) => [...prev, nuevo]);
  };

  if (loading) return <p>Cargando clientes...</p>;

  return (
    <div className="clientes-page">
      <h1>Lista de Clientes</h1>
      <ClienteForm onSubmit={handleAdd} />
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
  {clientes.map((c) => (
    <tr key={c.id}>
      <td data-label="Nombre">{c.nombre}</td>
      <td data-label="Email">{c.email}</td>
      <td data-label="Teléfono">{c.telefono}</td>
      <td data-label="Dirección">{c.direccion}</td>
      <td data-label="Estado">{c.estado}</td>
    </tr>
  ))}
</tbody>
      </table>
    </div>
  );
}