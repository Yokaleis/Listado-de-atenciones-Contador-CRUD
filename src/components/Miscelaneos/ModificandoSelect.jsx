import { useState } from 'react';
import Select from 'react-tailwindcss-select';

let nextId = 0;
const options = [
  { value: 'fox', label: '🦊 Fox' },
  { value: 'Butterfly', label: '🦋 Butterfly' },
  { value: 'Honeybee', label: '🐝 Honeybee' },
];


export function SelectAnimal() {
  //ESTADO PARA EL SELECT
  const [animal, setAnimal] = useState([]);
  //ESTADO PARA MAPEAR LA LISTA
  const [listaAnimal, setListaAnimal] = useState([]);

  const handleChangeA = (value) => {
    //console.log('value:', value);
    setAnimal(value);
  };

  const agregarLista = (e) => {
    setListaAnimal([...listaAnimal, {id: nextId++, animal: animal } ]);
  };
  console.log('Click ' + animal.length)
  return (
    <>
      <Select
        primaryColor={'indigo'}
        value={animal}
        onChange={handleChangeA}
        options={options}
        placeholder={'Seleccione'}
        isMultiple={true}
      />
      <button onClick={agregarLista}>Agregar</button>
      <p>Animales:</p>

      <div>
        {listaAnimal.map((nombre,index) => {
          <ul key={index}>
            <li key={nombre.id}>Opcion: {nombre.animal.value}</li>
          </ul>
        })}
      </div>

    </>
  );
}
