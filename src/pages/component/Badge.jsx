export function Badge({  texto, estatus, servicio }) {

  let estatuscolor = "";

  switch (estatus) {
    case "default":
      estatuscolor = "bg-status-finalizado bg-opacity-20 text-primary";
      break;
    case "programado":
      estatuscolor = "bg-status-programado bg-opacity-20";
      break;
      case "espera":
      estatuscolor = "bg-status-espera bg-opacity-20";
      break;
  }


    return (
      <>
        <span className={`p-2 ${estatuscolor} rounded-full lg:text-[12px] md:text-[5px] max-sm:text-[8px] font-medium`}>
         {texto} {servicio}
        </span>
      </>
    );
  }
  