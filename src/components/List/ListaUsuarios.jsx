import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { BubbleSpan } from '../../pages/component/Bubble';
import { useDispatch } from "react-redux";
import { deleteUsuario } from "../../features/usuarios/usuariosSlice";

import { people } from "../../mockups/mockupsData";
import { SlideCounter, SlideCounterInterconsultas } from "../../pages/component/SlideCounterComponent";
import { ButtonPrimary } from "../../pages/component/Buttons";

export function ListaUsuarios() {
    console.log('usuariosState')
    const usuariosState = useSelector( state => state.usuarios)
    //console.log(usuariosState)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
      dispatch((
        deleteUsuario(id)
      ))
    }

    return (
      <>
        <div>
          <header>
            <h1 className="text-3xl font-bold mb-10">Atenciones Urgent Care</h1>
          </header>
          <div className="grid grid-flow-col grid-cols-2/2 gap-2">
            <SlideCounter />
            <SlideCounterInterconsultas />
          </div>
          <div className="grid justify-items-end mb-10">
            <Link to={"/nueva-atencion"}>
              <ButtonPrimary text="Crear nuevo" />
            </Link>
          </div>
          <div>
            <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Número de atención
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nombres y Apellidos
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Cédula de identidad
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Edad
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Aseguradora
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Servicio
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Creación
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Vía
                  </th>
                </tr>
              </thead>
              <tbody>
                {usuariosState.map((usuario) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td key={usuario.id} className="px-6 py-6">
                      {usuario.id}
                    </td>
                    <td className="px-6 py-6">{usuario.nombre}</td>
                    <td className="px-6 py-6">{usuario.cedula}</td>
                    <td className="px-6 py-6">{usuario.edad}</td>
                    <td className="px-6 py-6">{usuario.aseguradora}</td>
                    <td className="px-6 py-6">
                      <div>
                        <BubbleSpan nombreServicio={usuario.servicio} />
                        {/*  <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                  {usuario.servicio}
                  </span>*/}
                      </div>
                    </td>
                    <td className="px-6 py-6">{usuario.creacion}</td>
                    <td className="px-6 py-6">{usuario.via}</td>
                    <td className="px-6 py-6">
                      <button onClick={() => handleDelete(usuario.id)}>
                        Eliminar
                      </button>
                      <button>
                        <Link to={`/editar-atencion/${usuario.id}`}>
                          Editar
                        </Link>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <span className="flex justify-end text-zinc-500 font-semibold text-md">
              Total atenciones {usuariosState.length}
            </span>
          </div>
        </div>
      </>
    );
}