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
      <div className="hidden md:grid grid-cols-1 md:grid-cols-9 bg-[#F6F6F6] gap-4 p-3 items-center text-center mb-2">
        <h5 className="lg:text-sm md:text-[9px] max-sm:text-[12px] font-bold">
          N° atención
        </h5>
        <h5 className="lg:text-sm md:text-[9px] max-sm:text-[12px] font-bold">
          Nombres y Apellidos
        </h5>
        <h5 className="lg:text-sm md:text-[9px] max-sm:text-[12px] font-bold">
          Cédula de identidad
        </h5>
        <h5 className="lg:text-sm md:text-[9px] max-sm:text-[12px] font-bold">
          Edad
        </h5>
        <h5 className="lg:text-sm md:text-[9px] max-sm:text-[12px] font-bold">
          Aseguradora
        </h5>
        <h5 className="lg:text-sm md:text-[9px] max-sm:text-[12px] font-bold">
          Servicios
        </h5>
        <h5 className="lg:text-sm md:text-[9px] max-sm:text-[12px] font-bold">
          Creación
        </h5>
        <h5 className="lg:text-sm md:text-[9px] max-sm:text-[12px] font-bold">
          Vía
        </h5>
        <h5 className="lg:text-sm md:text-[9px] max-sm:text-[12px] font-bold">
          Acciones
        </h5>
      </div>
    </>
  );
}

export function TableBody() {

  const usuarios = useSelector((state) => state.usuarios.usuarios);
  //console.log(usuariosState)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleEdit = (index) => {
    dispatch(setUserToEdit({ user: usuarios[index], isEditing: true }));
    navigate(`/editar-atencion/${usuarios[index].id}`);
  };
  const handleDelete = (index) => {
    dispatch((
      deleteUsuario(index)
    ))
  }
    return (
      <>
        <TableHeader />
        {usuarios.map((usuario, index) => (
          <div className="grid grid-cols-1 md:grid-cols-9 gap-2 p-3 border border-[#E6EBF1] border-t-0 rounded-sm items-center md:text-center max-sm:p-4">
            <div>
              <h5 className="md:hidden font-bold lg:text-sm md:text-[9px] max-sm:text-[12px]">
                N° atención
              </h5>
              <span>{usuario.atencion}</span>
            </div>
            <div>
              <h5 className="md:hidden font-bold lg:text-sm md:text-[9px] max-sm:text-[12px]">
                Nombres y Apellidos
              </h5>
              <span>{usuario.nombre}</span>
            </div>
            <div>
              <h5 className="md:hidden font-bold lg:text-sm md:text-[9px] max-sm:text-[12px]">
                C.I
              </h5>
              <span>{usuario.cedula}</span>
            </div>
            <div>
              <h5 className="md:hidden font-bold lg:text-sm md:text-[9px] max-sm:text-[12px]">
                Edad
              </h5>
              <span>{usuario.edad}</span>
            </div>
            <div>
              <h5 className="md:hidden font-bold lg:text-sm md:text-[9px] max-sm:text-[12px]">
                Aseguradora
              </h5>
              <span>{usuario.aseguradora}</span>
            </div>
            <div>
              <h5 className="md:hidden font-bold lg:text-sm md:text-[9px] max-sm:text-[12px]">
                Servicios
              </h5>
              <div className="grid w-auto overflow-x-auto">
              {usuario.servicio.map((servicio, index) =>(
                <BubbleSpan key={`${servicio.value}-${index}`} text={servicio.label} />
              ))}
                {/* <BubbleSpan nombreServicio={usuario.servicio} /> */}
              </div>
            </div>
            <div>
              <h5 className="md:hidden font-bold lg:text-sm md:text-[9px] max-sm:text-[12px]">
                Creación
              </h5>
              <span>{usuario.creacion}</span>
            </div>
            <div>
              <h5 className="md:hidden font-bold lg:text-sm md:text-[9px] max-sm:text-[12px]">
                Vía
              </h5>
              <span>{usuario.via}</span>
            </div>
            <div>
              <h5 className="md:hidden font-bold lg:text-sm md:text-[9px] max-sm:text-[12px]">
                Acciones
              </h5>
              <div className="grid grid-cols-2 gap-2 justify-items-center text-gray-400">
              <button onClick={() => handleDelete(index)}><HiOutlineTrash /></button>
              <button onClick={() => handleEdit(index)}>
                <Link><HiOutlinePencil /></Link>
              </button>
              </div>
              
            </div>
          </div>
        ))}
      </>
    );
}
export function AntencionesUC() {
  
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