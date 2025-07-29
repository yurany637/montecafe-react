import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// CORRECTED PATHS BELOW:
import AppLayout from "../components/layout/AppLayout";    // From src/pages/ to src/components/layout/
import Spinner from "../components/common/Spinner";         // From src/pages/ to src/components/common/
import clientesService from "../api/clientesService";       // From src/pages/ to src/api/

export default function ClienteListPage() {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchClientes = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await clientesService.getAll();
      setClientes(data);
    } catch (err) {
      console.error("Error al obtener clientes:", err);
      setError("No se pudieron cargar los clientes.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClientes();
  }, []); // Se ejecuta una vez al montar el componente

  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este cliente?")) {
      try {
        await clientesService.delete(id);
        alert('Cliente eliminado exitosamente!');
        // Actualiza el estado para reflejar la eliminación
        setClientes(clientes.filter(cliente => cliente.id !== id));
      } catch (err) {
        console.error("Error al eliminar cliente:", err);
        alert("Error al eliminar el cliente.");
      }
    }
  };

  if (loading) {
    return (
      <AppLayout title="Módulo de Clientes">
        <Spinner />
      </AppLayout>
    );
  }

  if (error) {
    return (
      <AppLayout title="Módulo de Clientes">
        <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
      </AppLayout>
    );
  }

  return (
    <AppLayout title="Módulo de Clientes">
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
        <Link to="/clientes/new" className="button" style={{ textDecoration: 'none', backgroundColor: '#2ecc71', color: 'white', padding: '10px 20px', borderRadius: '5px' }}>
          Registrar Cliente
        </Link>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Email</th>
            <th>Dirección</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody id="tablaClientes">
          {clientes.length === 0 ? (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center' }}>No hay clientes registrados.</td>
            </tr>
          ) : (
            clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nombre}</td>
                <td>{cliente.telefono}</td>
                <td>{cliente.email}</td>
                <td>{cliente.direccion}</td>
                <td className="acciones">
                  <Link to={`/clientes/edit/${cliente.id}`} className="editar">Editar</Link>
                  <button onClick={() => handleDelete(cliente.id)} className="eliminar">Eliminar</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </AppLayout>
  );
}