// Datos de clientes simulados
let mockClientes = [
  { id: 'CL001', nombre: 'Juan Pérez', telefono: '3101234567', email: 'juan@example.com', direccion: 'Calle 45, Bogotá' },
  { id: 'CL002', nombre: 'María Rodríguez', telefono: '3204567890', email: 'maria@correo.com', direccion: 'Cra 10, Medellín' },
];

const clientesService = {
  // Obtener todos los clientes
  getAll: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...mockClientes]); // Devuelve una copia para evitar mutaciones directas
      }, 300); // Simula un retraso de red de 300ms
    });
  },

  // Obtener un cliente por ID
  getById: (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const cliente = mockClientes.find(c => c.id === id);
        resolve(cliente || null); // Devuelve el cliente o null si no lo encuentra
      }, 500); // Simula un retraso de red
    });
  },

  // Crear un nuevo cliente
  create: (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newId = `CL${(mockClientes.length + 1).toString().padStart(3, '0')}`; // Genera un ID simple
        const newCliente = { id: newId, ...values };
        mockClientes.push(newCliente);
        console.log('Cliente creado:', newCliente);
        resolve(newCliente);
      }, 500);
    });
  },

  // Actualizar un cliente existente
  update: (id, values) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = mockClientes.findIndex(c => c.id === id);
        if (index !== -1) {
          mockClientes[index] = { ...mockClientes[index], ...values, id: id };
          console.log('Cliente actualizado:', mockClientes[index]);
          resolve(mockClientes[index]);
        } else {
          reject(new Error('Cliente no encontrado para actualizar.'));
        }
      }, 500);
    });
  },

  // Eliminar un cliente
  delete: (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const initialLength = mockClientes.length;
        mockClientes = mockClientes.filter(c => c.id !== id);
        if (mockClientes.length < initialLength) {
          console.log(`Cliente ${id} eliminado.`);
          resolve({ success: true, message: `Cliente ${id} eliminado.` });
        } else {
          reject(new Error('Cliente no encontrado para eliminar.'));
        }
      }, 300);
    });
  }
};

export default clientesService;