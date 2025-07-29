import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// CORRECTED PATHS BELOW:
import AppLayout from "../components/layout/AppLayout";    // From src/pages/ to src/components/layout/
import ClienteForm from "../components/forms/ClienteForm";  // From src/pages/ to src/components/forms/
import Spinner from "../components/common/Spinner";         // From src/pages/ to src/components/common/
import clientesService from "../api/clientesService";       // From src/pages/ to src/api/

export default function ClienteEditPage() {
  const { id } = useParams();
  const [cliente, setCliente] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true); // Nuevo estado para la carga inicial
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCliente = async () => {
      setLoading(true);
      setError(null);
      try {
        const fetchedCliente = await clientesService.getById(id);
        if (fetchedCliente) {
          setCliente(fetchedCliente);
        } else {
          setError(`Cliente con ID "${id}" no encontrado.`);
        }
      } catch (err) {
        console.error("Error al cargar cliente:", err);
        setError("Error al cargar los datos del cliente.");
      } finally {
        setLoading(false);
      }
    };
    fetchCliente();
  }, [id]);

  const handleSubmit = async (values) => {
    setError(null);
    try {
      setSubmitting(true);
      await clientesService.update(id, values);
      alert('Cliente actualizado exitosamente!');
      navigate("/clientes"); // Redirige a la lista de clientes después de actualizar
    } catch (err) {
      console.error("Error al actualizar cliente:", err);
      setError("Error al actualizar el cliente. Inténtalo de nuevo.");
    } finally {
      setSubmitting(false);
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
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button onClick={() => navigate('/clientes')}>Volver a la lista de clientes</button>
        </div>
      </AppLayout>
    );
  }

  // Si cliente es null aquí (y no hubo error), significa que no se encontró
  if (!cliente) {
    return (
      <AppLayout title="Módulo de Clientes">
        <p style={{ color: 'orange', textAlign: 'center' }}>Cliente no disponible para edición.</p>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button onClick={() => navigate('/clientes')}>Volver a la lista de clientes</button>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout title="Módulo de Clientes">
      <ClienteForm initialValues={cliente} onSubmit={handleSubmit} submitting={submitting} title="Editar Cliente" />
    </AppLayout>
  );
}