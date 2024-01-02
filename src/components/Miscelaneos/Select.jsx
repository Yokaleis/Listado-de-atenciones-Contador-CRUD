import { useState } from 'react';
import Select from 'react-tailwindcss-select';

const options = [
  { value: "fox", label: "🦊 Fox" },
  { value: "Butterfly", label: "🦋 Butterfly" },
  { value: "Honeybee", label: "🐝 Honeybee" }
];

export function SelectAnimal() {

  const [animal, setAnimal] = useState([]);

    const handleChangeA = value => {
        console.log("value:", value);
        setAnimal(value);
    };
  return(
        <>
        <Select 
        primaryColor={"indigo"} 
        value={animal} 
        onChange={handleChangeA} 
        options={options} 
        placeholder={'Seleccione un servicio'}
        isMultiple={true}/>
        </>
  )
}