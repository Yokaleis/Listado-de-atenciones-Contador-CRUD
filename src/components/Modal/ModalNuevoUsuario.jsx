import { CrearUsuario } from "../Crear/CrearUsuario";
import { CloseIcon } from "../Icons/iconsSVG";
import '../Modal/Modal.css'



export function ModalNuevoUsuario({setShowModal}){


  
    return(
        <>
            {/* <div className="bg-pink px-4 pb-4 pt-5 w-3/4 h-auto bg-white">
               <div className="container">
               <h1>hola</h1>
            <CrearUsuario/>
            <button type="button" onClick={() => setShowModal(false)}>Cerrar</button>
               </div>
            </div> */}

            <div className="overlay grid justify-items-center">
      <div onClick={(e) => {e.stopPropagation();}} className="w-7/12 modalContainer">
        
        <div className="w-full">
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold mb-10">Crear nueva atención</h1>
              <a onClick={() => setShowModal(false)} className="cursor-pointer"><CloseIcon/></a>
              
            </div>
            <CrearUsuario/>
            {/* <button type="button" onClick={() => setShowModal(false)}
          className="mt-10 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >Cerrar</button> */}
          </div>
          
        </div>
    </div>
        </>
    )
}