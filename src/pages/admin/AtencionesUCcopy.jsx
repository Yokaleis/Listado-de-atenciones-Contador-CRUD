import { useSelector } from "react-redux"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { deleteUsuario, setUserToEdit } from "../../features/usuarios/usuariosSlice";

import { SlideCounter, SlideCounterInterconsultas } from "../component/SlideCounterComponent";
import { ButtonPrimary } from "../../pages/component/Buttons";
import { BubbleSpan } from '../component/Bubble';
import { Header } from "../component/Header";

/* REACT ICONS */
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";

export function TableHeader() {
  return (
    <>
      <thead className="text-center font-bold lg:text-sm md:text-[9px] max-sm:text-[12px] text-black bg-[#F6F6F6]  dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {/* <th>N° atención</th> */}
            <th scope="col" className="p-3">Nombres y Apellidos</th>
            <th scope="col" className="p-3">Cédula de identidad</th>
            <th scope="col" className="p-3">Edad</th>
            <th scope="col" className="p-3">Aseguradora</th>
            <th scope="col" className="p-3">Servicios</th>
            <th scope="col" className="p-3">Creación</th>
            <th scope="col" className="p-3">Acciones</th>
          </tr>
        </thead>
    </>
  );
}

export function TableBody() {
  const usuarios = useSelector((state) => state.usuarios.usuarios);
  //console.log(usuariosState)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = (index) => {
    dispatch(setUserToEdit({ user: usuarios[index], isEditing: true }));
    navigate(`/editar-atencion/${usuarios[index].id}`);
  };
  const handleDelete = (index) => {
    dispatch(deleteUsuario(index));
    console.log("Eliminando " + handleDelete);
  };

  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <TableHeader />
          {usuarios.length === 0 ? (
            <tr className="text-center">
                <p className="w-[100%] text-[14px] text-black">No hay usuarios en la lista</p>
            </tr>
          ) : (
            <tbody>
              {usuarios.map((user, index) => (
                <tr
                  key={index}
                  className="border border-[#E6EBF1] border-t-0 rounded-sm text-black text-center"
                >
                  <td className="px-6 py-4">{user.nombre}</td>
                  <td className="px-6 py-4">{user.cedula}</td>
                  <td className="px-6 py-4">{user.edad}</td>
                  <td className="px-6 py-4">{user.aseguradora}</td>
                  <td className="px-6 py-4">
                    {user.servicio &&
                      user.servicio.map((servicio, index) => (
                        <BubbleSpan
                          key={`${servicio.value}-${index}`}
                          text={servicio.label || servicio}
                        />
                      ))}
                  </td>
                  <td className="px-6 py-4">{user.creacion}</td>
                  {/* <td>{user.via}</td> */}
                  <td className="px-6 py-4 grid grid-cols-2 gap-1">
                    <button>
                      <HiOutlineTrash onClick={() => handleDelete(index)} />
                    </button>
                    <button onClick={() => handleEdit(index)}>
                      <HiOutlinePencil />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </>
  );
}
export function AntencionesUCcopy() {
  
    return (
        <>
        <Header text="Atenciones Urgent Care"/>
        <div className="grid grid-flow-col grid-cols-2/2 gap-2">
            <SlideCounter />
            <SlideCounterInterconsultas />
          </div>
          <div className="grid justify-items-end mb-10">
            <Link to={"/nueva-atencion"}>
            <ButtonPrimary text="Crear atención"/>
            </Link>
          </div>
        <TableBody/>
        </>
    )
}