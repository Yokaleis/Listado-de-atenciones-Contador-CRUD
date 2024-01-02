import { createSlice } from "@reduxjs/toolkit";
import { people } from "../../mockups/mockupsData";

const initialState = people;
/* const initialState = [
    {
        id: '1',
        atencion: '001244',
        nombre: 'Maria Carolina Cloinas',
        cedula: '8254125',
        edad: '21',
        aseguradora: 'Seguros Caracas',
        servicio: ['Laboratorio', 'Cirugia', 'Procedimiento'],
        creacion: '28/10/2023 - 8:00',
        via: 'OMT'
      },
      {
        id: '2',
        atencion: '001221',
        nombre: 'Calvin Hawkins',
        cedula: '5212012',
        edad: '24',
        aseguradora: 'Seguros Mercantil',
        servicio: ['RayosX', 'Ecografia', 'Laboratorio', 'Procedimiento'],
        creacion: '28/10/2023 - 8:00',
        via: 'OMV'
      },
      {
        id: '3',
        atencion: '001224',
        nombre: 'Yokasta Leis',
        cedula: '5212012',
        edad: '24',
        aseguradora: 'Seguros Horizonte',
        servicio: ['RayosX', 'Ecografia', 'Tratamiento'],
        creacion: '28/11/2023 - 9:00',
        via: 'OMV'
      },
] */
export const usuariosSlice = createSlice({
    name: 'usuarios',
    initialState: initialState,
    reducers: {
        addUsuario: (state, action) => {
            //console.log(state, action)
            state.push(action.payload)
            
        },
        deleteUsuario: (state, action) => {
            //console.log(action.payload)
            const usuarioEliminado = state.find( usuario => usuario.id === action.payload)
            if(usuarioEliminado) {
                state.splice(state.indexOf(usuarioEliminado), 1)
            }
        },
        updateUsuario: (state, action) => {
            const {id, nombre, cedula, edad, aseguradora, creacion, servicio } = action.payload
            const editUsuario = state.find( usuario => usuario.id === id)
            if (editUsuario){
                editUsuario.nombre = nombre
                editUsuario.cedula = cedula
                editUsuario.edad = edad
                editUsuario.aseguradora = aseguradora
                editUsuario.servicio = servicio
                editUsuario.creacion = creacion
            }
        }
    }
})

export default usuariosSlice.reducer;

export const { addUsuario, deleteUsuario, updateUsuario } = usuariosSlice.actions;