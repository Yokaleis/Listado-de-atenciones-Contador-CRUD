import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

import { AdminLayout } from "./layouts/AdminLayout"

import { ListaUsuarios } from './components/List/ListaUsuarios'
import { CrearUsuario } from './components/Crear/CrearUsuario'

import { Home } from "./pages/admin/Home";
import { ListadoAtenciones } from "./pages/admin/ListadoAtenciones";
import { AProgramadas } from './pages/admin/AtenProgramadas'
import { GestionServicios } from './pages/admin/GestionServicios'
import { GestionServiciosDashboard } from './pages/admin/ServiciosGestion'
import { AntencionesUC } from './pages/admin/AtencionesUC'
import { ModalCrearyEditar } from './pages/component/ModalCrearEditarUsuario'
import { AntencionesUCcopy } from './pages/admin/AtencionesUCcopy'



function App() {
  const [currentItem, setCurrentItem] = useState(null);
  
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<AdminLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/atenciones' element={<ListadoAtenciones/>}/>
      <Route path='/ateprogramadas' element={<AProgramadas/>}/>
      <Route path='/gservicios' element={<GestionServiciosDashboard/>}/>
      <Route path='/aurgentcare' element={<AntencionesUCcopy/>}/>
      <Route path='/nueva-atencion' element={<ModalCrearyEditar/>}/>
      <Route path='/editar-atencion/:id' element={<ModalCrearyEditar/>}/>
      </Route>
      
     </Routes>
     </BrowserRouter>
  )
}



export default App
