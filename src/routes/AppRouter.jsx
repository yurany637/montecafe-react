import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientesListPage from "../pages/clientes/ClientesListPage";
import ClientesForm from "../pages/clientes/ClientesForm";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientesListPage />} />
        <Route path="/clientes/nuevo" element={<ClientesForm />} />
      </Routes>
    </BrowserRouter>
  );
}