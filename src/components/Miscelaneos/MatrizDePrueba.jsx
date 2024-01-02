export function Matriz() {
    const consultas = [
        {
          atencion: '001221',
          servicio: ['RayosX', 'Ecografia', 'Laboratorio', 'Laboratorio'],
        },
        {
          atencion: '001222',
          servicio: ['RayosX', 'Ecografia', 'Laboratorio', 'Tratamiento'],
        },
        {
          atencion: '001223',
          servicio: ['Laboratorio', 'Ecografia', 'Tratamiento'],
        },
        {
          atencion: '001244',
          servicio: ['Laboratorio', 'Interconsulta'],
        },
      ];
      
      const val = consultas
        .map((x) => x.servicio)
        .reduce(
          (x, xs) =>
            xs.reduce((y, ys) => {
              if (y[ys] == undefined) {
                y[ys] = 1;
              } else {
                y[ys] = y[ys] + 1;
              }
              return y;
            }, x),
          {}
        );

      console.log(val);
      console.log(val.Interconsulta);
      

      return(
          <>
          <p>Total interconsulta {val.Interconsulta}</p>
          <p>Total laboratorio {val.Laboratorio}</p>
          <p>Total rayos X {val.RayosX}</p>
          <p>Total ecografia {val.Ecografia}</p>
          </>
      )
      
}


/* export function ReptileListItems() {
    const reptiles = {
        lagartos: ["alligator", "snake", "lizard"]
    };
  
    return (
        <ol>
            {reptiles.map(reptile => (<li key={reptile}>{reptile}</li>))}
        </ol>
    )
  }
 
  export function ReptileListItems() {
    const reptiles = ['alligator', 'snake', 'lizard'];
  
    return (
      <ol>
        {reptiles.map(reptile => (
          <li key={reptile}>{reptile}</li>
        ))}
      </ol>
    );
  }*/