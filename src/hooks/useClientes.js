import { useEffect, useState } from "react";
import { clientesService } from "../api/clientesService";

export function useClientes() {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    clientesService.getAll().then((data) => {
      setClientes(data);
      setLoading(false);
    });
  }, []);

  return { clientes, loading };
}