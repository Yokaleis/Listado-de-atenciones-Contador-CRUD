


export function CountersInterconsultas() {
  return(
    <div className="grid grid-flow-col auto-cols-max gap-4 p-4 bg-white border border-gray-200 rounded-lg justify-between shadow-100">
            <div className="px-2 py-2 bg-green-100">{icono}</div>
            <div className="grid grid-rows-2 grid-flow-col text-end">
                <div>
                    <span className="text-sm font-normal tracking-tight text-gray-500">
                        {nombre}
                    </span>
                </div>
                <div>
                    <span className="text-2xl font-extrabold">{atenciones}</span>
                </div>
            </div>
    </div>
)
}
