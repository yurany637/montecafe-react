import React, { useEffect, useState } from 'react';
import AppLayout from '../../components/layout/AppLayout';
import ClienteForm from '../../components/forms/ClienteForm';
import { clientesService } from '../../api/clientesService';
import { useNavigate, useParams } from 'react-router-dom';

export default function ClienteEditPage() {
  const [submitting, setSubmitting] = useState(false);
  const [cliente, setCliente] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    clientesService.getById(id).then(setCliente);
  }, [id]);

  const handleSubmit = async (values) => {
    try {
      setSubmitting(true);
      await clientesService.update(id, values);
      navigate('/clientes');
    } finally {
      setSubmitting(false);
    }
  };

  if (!cliente) return <AppLayout title="Editar Cliente">Cargando...</AppLayout>;

  return (
    <AppLayout title="Editar Cliente">
      <ClienteForm initialValues={cliente} onSubmit={handleSubmit} submitting={submitting} />
    </AppLayout>
  );
}