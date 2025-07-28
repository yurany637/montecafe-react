const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

export const clientesService = {
  async getAll() {
    const response = await fetch(`${API_URL}/clientes`);
    return response.json();
  },

  async create(cliente) {
    const response = await fetch(`${API_URL}/clientes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cliente),
    });
    return response.json();
  },

  async update(id, cliente) {
    const response = await fetch(`${API_URL}/clientes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cliente),
    });
    return response.json();
  },

  async remove(id) {
    await fetch(`${API_URL}/clientes/${id}`, { method: "DELETE" });
  },
};