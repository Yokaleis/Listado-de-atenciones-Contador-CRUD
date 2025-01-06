import { Badge } from "../component/Badge";
import { Header } from "../component/Header";

export function GestionServicios() {
  return (
    <>
      <Header text="Dashboard Gestión de Servicios" />

      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-4">
        <ColumnGestion column="default" text="Creado" />
        <ColumnGestion column="default" text="Asignado" />
        <ColumnGestion column="default" text="Salida base" />
        <ColumnGestion column="default" text="Llegada destino" />
        <ColumnGestion column="default" text="Salida destino" />
      </div>
    </>
  );
}

export function ColumnGestion({ column, text }) {
  let borderColor = "";

  switch (column) {
    case "programado":
      borderColor = "border border-status-programado";
      break;
    case "default":
      borderColor = "border border-secondary-100";
      break;
  }

  return (
    <>
      <div className={`p-2 rounded-lg ${borderColor}`}>
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-bold">{text}</p>
          <Badge texto="3"></Badge>
        </div>
        <CardGestion card="propia" />
        <CardGestion card="proveedor" />
      </div>
    </>
  );
}

export function CardGestion({ card }) {

  let borColor = "";
  switch (card) {
    case "propia":
      borColor = "border border-primary border-dashed";
      break;
    case "proveedor":
      borColor = "border border-primary border-solid";
      break;
  }
  return (
    <>
      <div className={`p-2 rounded-lg ${borColor} mb-4`}>
        {/* TODO: CREAR UNA DATA Y MAPEAR */}
        <span className="text-[9px] flex justify-end">01/02/2024 - 15:40</span>
        <h3 className="text-sm font-bold mb-2">Yokasta leis</h3>
        <div className="flex gap-2 mb-2">
          <div>
            <p className="text-[9px] opacity-50 font-semibold">Aseguradora</p>
            <h4 className="text-[12px]">Seguros Caracas</h4>
          </div>
          <div>
            <p className="text-[9px] opacity-50 font-semibold">Ubicación</p>
            <h4 className="text-[12px]">Avenida Andrés Bello, Calle 17</h4>
          </div>
        </div>
        <div className="mb-2">
          <p className="text-[9px] opacity-50 font-semibold">Motivo</p>
          <h4 className="text-[12px]">
            Migrañas, Emergencia hipertensiva, Hipermelanosis
          </h4>
        </div>

        <button onClick={() => openModal({gestionServicios})}>
          Ver Detalle
        </button>
      </div>

      
      
    </>
  );
}
