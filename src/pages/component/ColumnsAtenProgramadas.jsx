import { Badge } from "./Badge";



export function ColumnsDashboard(props) {
  const { column, text } = props;

  let borderColor = "";
  let counter = "";

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
        <CardDashboard card="iniciando" />
        <CardDashboard card="vencido" />
        <CardDashboard card="parcial" />
      </div>
    </>
  );
}
 

export function CardDashboard(props) {
  let borColor = "";

  const { card } = props;

  switch (card) {
    case "iniciando":
      borColor = "border border-primary";
      break;
    case "parcial":
      borColor = "border border-status-espera";
      break;
    case "vencido":
      borColor = "border border-status-retrasado";
      break;
  }
  return (
    <div className={`p-2 rounded-lg ${borColor} mb-4`}>
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
    </div>
  );
}


