import { useState } from 'react';

import { people } from '../../mockups/mockupsData'
import { BubbleSpan } from './Bubble';

  
  export function Example() {

    return (
      <>
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
                {people.map((person) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td key={person.email} className="px-6 py-6">{person.atencion}</td>
                <td className="px-6 py-6">{person.nombre}</td>
                <td className="px-6 py-6">{person.cedula}</td>
                <td className="px-6 py-6">{person.edad}</td>
                <td className="px-6 py-6">{person.aseguradora}</td>
                <td className="px-6 py-6">
                <div>
                  <BubbleSpan nombreServicio={person.servicio}/>
                {/* <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                  {person.servicio}
                  </span> */}
                </div>
                </td>
                <td className="px-6 py-6">{person.creacion}</td>
                <td className="px-6 py-6">{person.via}</td>
            </tr>
            ))}
            </tbody>
          </table>
          <span className="flex justify-end text-zinc-500 font-semibold text-md">Total atenciones {people.length}</span>
        </div>
      </>
    );
  }

