import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// CORRECTED PATHS BELOW:
import AppLayout from "../components/layout/AppLayout"; // From src/pages/ to src/components/layout/
import ClienteForm from "../components/forms/ClienteForm"; // From src/pages/ to src/components/forms/
import clientesService from "../api/clientesService";     // From src/pages/ to src/api/


export default function ClienteCreatePage() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    setError(null);
    try {
      setSubmitting(true);
      await clientesService.create(values);
      alert('Cliente creado exitosamente!');
      navigate("/clientes"); // Redirige a la lista de clientes
    } catch (err) {
      console.error("Error al crear cliente:", err);
      setError("Error al crear el cliente. Inténtalo de nuevo.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AppLayout title="Módulo de Clientes">
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      <ClienteForm onSubmit={handleSubmit} submitting={submitting} title="Registrar Cliente" />
    </AppLayout>
  );
}