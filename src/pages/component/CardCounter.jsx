import React from "react";

import { cardsTickets } from "../../mockups/mockupsData";
import { IconoProgramadas, IconoEspera, IconoProceso } from "./../../components/Icons/iconsSVG";


export function CardCounter(props) {
  const { card, totalServicio, text } = props;
  let statusColor = "";
  let textColor = "";
  let icono = "";
  switch (card) {
    case "programadas":
      statusColor = "bg-status-programado bg-opacity-10";
      textColor = "text-status-programado";
      icono = <IconoProgramadas/>;
      break;
    case "espera":
      statusColor = "bg-status-espera bg-opacity-10";
      textColor = "text-status-espera";
      icono = <IconoEspera/>
      break;
    case "proceso":
      statusColor = "bg-status-proceso bg-opacity-10";
      textColor = "text-status-proceso";
      icono = <IconoProceso/>
      break;
  }

  return (
    <>
      <div className="grid grid-flow-col auto-cols-max gap-4 p-4 bg-[#F9F9F9] rounded-lg justify-between shadow-100">
        <div className={`px-4 py-4 ${statusColor} rounded-lg`}>
          {icono}
        </div>
        <div>
          <div className="grid grid-rows-2 grid-flow-col text-end">
            <p className="text-sm text-gray-400">{text}</p>
            <span className={`text-[20px] font-bold ${textColor}`}>{totalServicio}</span>
          </div>

          <div>
            <div className="grid grid-cols-5 gap-2">
              {cardsTickets.map((card) => (
                <div>
                  <p className="text-[12px]">
                    {card.servicio}:{" "}
                    <span className="text-[12px] font-bold">{card.total}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
