import React from 'react';
import Select from 'react-select';


export function SelectServicio({value, onChange}) {

  const serviciosSelect = [
    { value: 'Cirugia', label: 'Cirugia' },
    { value: 'Procedimiento', label: 'Procedimiento' },
    { value: 'RayosX', label: 'RayosX' },
    { value: 'Ecografia', label: 'Ecografia' },
  ];

  return(
        <>
        <Select 
        value={value} 
        onChange={onChange} 
        options={serviciosSelect} 
        placeholder="Seleccione un servicio"
        isMulti/>
        </>
  )
}