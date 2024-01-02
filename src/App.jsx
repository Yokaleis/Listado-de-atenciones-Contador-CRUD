
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

import { Sidebar } from './components/Sidebar/SidebarComponents'
import { SlideCounter, SlideCounterInterconsultas } from './components/Slider/SlideCounterComponent'
import { ListaUsuarios } from './components/List/ListaUsuarios'
import { CrearUsuario } from './components/Crear/CrearUsuario'


function App() {

  return (
    <>
     
     <aside  id="sidebar-multi-level-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
     <Sidebar/>
     </aside>
     <main className="p-4 sm:ml-64">
     {/* <header>
      <h1 className="text-3xl font-bold mb-10">Listado de Atenciones</h1>
     </header>
     <div className="grid grid-flow-col grid-cols-2/2 gap-2">
        <SlideCounter/>
        <SlideCounterInterconsultas/>
     </div> */}

     <BrowserRouter>
     <Routes>
      <Route path='/' element={<ListaUsuarios/>}/>
      <Route path='/nueva-atencion' element={<CrearUsuario/>}/>
      <Route path='/editar-atencion/:id' element={<CrearUsuario/>}/>
     </Routes>
     </BrowserRouter>
     </main>
    
     
    
    </>
  )
}



export default App
