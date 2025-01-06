import { atencionesDesp } from "../../mockups/mockupsData"
import { Badge } from "./Badge";

export function TableHeader() {
  return (
    <>
      <div className="hidden md:grid grid-cols-1 md:grid-cols-10 bg-[#F6F6F6] gap-4 p-3 items-center text-center mb-2">
        <h5 className="lg:text-sm md:text-[9px] max-sm:text-[12px] font-bold">
          N° atención
        </h5>
        <h5 className="lg:text-sm md:text-[9px] max-sm:text-[12px] font-bold">
          Nombres y Apellidos
        </h5>
        <h5 className="lg:text-sm md:text-[9px] max-sm:text-[12px] font-bold">
          Cédula de identidad
        </h5>
        <h5 className="lg:text-sm md:text-[9px] max-sm:text-[12px] font-bold">
          Fecha y hora
        </h5>
        <h5 className="lg:text-sm md:text-[9px] max-sm:text-[12px] font-bold">
          Estado 
        </h5>
        <h5 className="lg:text-sm md:text-[9px] max-sm:text-[12px] font-bold">
          Servicios
        </h5>
        <h5 className="lg:text-sm md:text-[9px] max-sm:text-[12px] font-bold">
          Estatus
        </h5>
        <h5 className="lg:text-sm md:text-[9px] max-sm:text-[12px] font-bold">
          Plan  
        </h5>
        <h5 className="lg:text-sm md:text-[9px] max-sm:text-[12px] font-bold">
          Aseguradora
        </h5>
        <h5 className="lg:text-sm md:text-[9px] max-sm:text-[12px] font-bold">
          Contratante
        </h5>
      </div>
    </>
  );
}

export function TableBody({atencionesDesp}) {
  console.log('Table re-rendered with data:', atencionesDesp);
  return (
    <>
    <TableHeader/>
      {atencionesDesp.map((despacho) => (
        <div className="grid grid-cols-1 md:grid-cols-10 gap-2 p-3 border border-[#E6EBF1] border-t-0 rounded-sm items-center md:text-center max-sm:p-4">
          <div>
            <h5 className="md:hidden font-bold lg:text-sm md:text-[9px] max-sm:text-[12px]">N° atención</h5>
            <span>{despacho.atencion}</span>
          </div>
          <div>
            <h5 className="md:hidden font-bold lg:text-sm md:text-[9px] max-sm:text-[12px]">Nombres y Apellidos</h5>
            <span>{despacho.nombre}</span>
          </div>
          <div>
            <h5 className="md:hidden font-bold lg:text-sm md:text-[9px] max-sm:text-[12px]">Cédula</h5>
            <span>{despacho.cedula}</span>
          </div>
          <div>
            <h5 className="md:hidden font-bold lg:text-sm md:text-[9px] max-sm:text-[12px]">Fecha y hora</h5>
            <span>{despacho.fecha}</span>
          </div>
          <div>
            <h5 className="md:hidden font-bold lg:text-sm md:text-[9px] max-sm:text-[12px]">Estado</h5>
            <span>{despacho.estado}</span>
          </div>
          <div>
            <h5 className="md:hidden font-bold lg:text-sm md:text-[9px] max-sm:text-[12px]">Servicio</h5>
            <Badge servicio={despacho.servicio} estatus={despacho.estatus.color}/>
            
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold lg:text-sm md:text-[9px] max-sm:text-[12px]">Estatus</h5>
            <span>{despacho.estatus.text}</span>
          </div>
          <div>
            <h5 className="md:hidden font-bold lg:text-sm md:text-[9px] max-sm:text-[12px]">Plan</h5>
            <span>{despacho.plan}</span>
          </div>
          <div>
            <h5 className="md:hidden font-bold lg:text-sm md:text-[9px] max-sm:text-[12px]">Aseguradora</h5>
            <span>{despacho.aseguradora}</span>
          </div>
          <div>
            <h5 className="md:hidden font-bold lg:text-sm md:text-[9px] max-sm:text-[12px]">Contratante</h5>
            <span>{despacho.contratante}</span>
          </div>
        </div>
      ))}
    </>
  );
}
export function TableListDespacho() {
  return (
    <>
      
      <TableBody/>
    </>
  );
}
