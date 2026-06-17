import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard'
import Clientes from './pages/Clientes'
import Agenda from './pages/Agenda'
import GestionTiempo from './pages/GestionTiempo'
import Contratos from './pages/Contratos'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="clientes" element={<Clientes />} />
          <Route path="agenda" element={<Agenda />} />
          <Route path="tiempo" element={<GestionTiempo />} />
          <Route path="contratos" element={<Contratos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
