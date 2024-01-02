import { useState } from 'react';

let nextId = 0;

export function InputArray() {
  

  const [name, setName] = useState('');

  const [artists, setArtists] = useState([]);
  const takeChangeInput = (e) => {
    setName(e.target.value);
} 
  const handleAdd = (e) => {
    setArtists([{ id: nextId++, name: name }, ...artists]);
    setName('');
  }
  return (
    <>
      <h1>Heeey</h1>

      <input
        value={name}
        onChange={((e) => setName(e.target.value), takeChangeInput)}
      />
      <button onClick={handleAdd}>Añadir</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
