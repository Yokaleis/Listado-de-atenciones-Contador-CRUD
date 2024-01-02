import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addUsuario, updateUsuario } from "../../features/usuarios/usuariosSlice"
import { v4 as uuid } from "uuid"
import { useNavigate, Link } from "react-router-dom"

export function CrearUsuario(){
    const params = useParams();
    const usuarios = useSelector( state => state.usuarios)
    const [nuevoUsuario, setNuevoUsuario] = useState({
        id: '',
        atencion: '',
        nombre: '',
        cedula: '',
        edad: '',
        aseguradora: '',
        servicio: [],
        creacion: '',
        via: ''
    })
    const navigate = useNavigate();


    const handleMultiSelectChange = (event) => {
        let value = Array.from(event.target.selectedOptions, option => option.value);
        setNuevoUsuario({
          ...nuevoUsuario,
          servicio: value
        });
      };
/*     const handleSelectChange = ( event ) => {
        console.log('Seleccionado: ', event);
        setNuevoUsuario(event)
      };
    
 */
    const dispatch = useDispatch()
    const handleChange = ( event ) => {
        //console.log(e.target.name, e.target.value)
        setNuevoUsuario({
            ...nuevoUsuario,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (params.id) {
            dispatch(
                updateUsuario(nuevoUsuario)
            )
        } else {
            dispatch(
            addUsuario({
                ...nuevoUsuario,
                id: uuid(),  
            }))
        e.target.reset() 
        }
        
        navigate('/')
        // console.log(nuevoUsuario)
    }
    useEffect(() => {
        console.log('Ha cambiado el contador!')
        if(params.id){
            console.log('Esto es el params ', params)
            setNuevoUsuario(usuarios.find((usuario) => usuario.id === params.id))
        }
      }, [params, usuarios])
        
    return(
        <>
            <div>
            <h1 className="text-3xl font-bold mb-10">Crear nueva atención</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-10">
                <div className="flex gap-6">
                    <div className="mb-6">
                        <input type="text" name="nombre" placeholder="Nombre y Apellido" onChange={handleChange}
                        value={nuevoUsuario.nombre}/>
                    </div>
                    <div className="mb-6">
                        <input type="text" name="cedula" placeholder="Número de cédula" onChange={handleChange}
                        value={nuevoUsuario.cedula}/>
                    </div>
                    <div className="mb-6">
                        <input type="text" name="edad" placeholder="Edad" onChange={handleChange}
                        value={nuevoUsuario.edad}/>
                    </div>
                    <div className="mb-6">
                    <input type="text" name="aseguradora" placeholder="Aseguradora" onChange={handleChange}
                    value={nuevoUsuario.aseguradora}/>
                    </div>
                </div>
                <div className="flex gap-6">
                <div className="mb-6">
                       {/* <input type="text" name="servicio" placeholder="Servicio" onChange={handleChange}/> */}
                       <select name="servicio" multiple="true"  onChange={handleMultiSelectChange} value={nuevoUsuario.servicio}>
                            <option value="">Selecciona...</option>
                            <option value="Laboratorio">Laboratorio</option>
                            <option value="Ecografia">Ecografia</option>
                            <option value="Rayos X">Rayos X</option>
                            <option value="Tratamiento">Tratamiento</option>
                       </select>
                         {/* <Select type="text" name="servicio" options={OptionsSelect.map(option => ({label: option, value: option}))}
                        onChange={handleChange}
                        isMulti/>*/} 
                </div>
                    <div className="mb-6">
                        <input type="date" name="creacion" placeholder="Fecha" onChange={handleChange} 
                        value={nuevoUsuario.creacion}/>
                    </div>
                </div>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-6 rounded focus:outline-none focus:shadow-outline">
                    Guardar 
                </button>
                
                <Link to={"/"}><button type="button" className="bg-gray-500 hover:bg-gray-700 text-black font-bold py-2 px-4 mr-6 rounded focus:outline-none focus:shadow-outline">
                     Cancelar 
                </button></Link>
            </form>
            </div>
        </>
    )
}