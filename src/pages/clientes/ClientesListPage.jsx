import Button from "../../components/ui/Button";

export default function ClientesListPage() {
  const clientes = [
    { id: 1, nombre: "Juan Pérez", email: "juan@example.com" },
    { id: 2, nombre: "Ana López", email: "ana@example.com" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Clientes</h1>
      <Button onClick={() => alert("Registrar nuevo cliente")}>
        + Nuevo Cliente
      </Button>
      <ul style={{ marginTop: "20px" }}>
        {clientes.map((cliente) => (
          <li key={cliente.id}>
            {cliente.nombre} - {cliente.email}
          </li>
        ))}
      </ul>
    </div>
  );
}