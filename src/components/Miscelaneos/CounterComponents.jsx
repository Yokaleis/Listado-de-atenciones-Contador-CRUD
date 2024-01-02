import { LabIcon, RayosXIcon, EcoIcon, InterconsultaIcon } from "../Icons/iconsSVG";
const servicio = [
    {
        nombre: 'Laboratorio',
        atenciones: '74',
        icono: <LabIcon/>
,
    },
    {
        nombre: 'Ecografía',
        atenciones: '8',
        icono: <EcoIcon/>
    },
    {
        nombre: 'Rayos X',
        atenciones: '20',
        icono: <RayosXIcon/>
    }
]

export function CountersServicios(props) {

    console.log(props); 

  return (
    <>
    <div className="grid grid-cols-3 gap-2">
        {servicio.map((tarjeta) => (
          <><div className="grid grid-flow-col auto-cols-max gap-4 p-4 bg-white border border-gray-200 rounded-lg justify-between shadow-100">
                <div className="px-2 py-2 bg-green-100">{tarjeta.icono}</div>
                <div className="grid grid-rows-2 grid-flow-col text-end">
                    <div>
                        <span className="text-sm font-normal tracking-tight text-gray-500">
                            {tarjeta.nombre}
                        </span>
                    </div>
                    <div>
                        <span className="text-2xl font-extrabold">{tarjeta.atenciones}</span>
                    </div>
                </div>
            </div>
            </>
        ))}
      </div>
    </>
  );
}
