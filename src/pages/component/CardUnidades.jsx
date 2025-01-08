import React from "react";
import { IconoUnidadBravo, IconoUnidadDelta, IconoUnidadAlfa } from './../../components/Icons/iconsSVG';


export function CardUnidadesCounter (props) {

    const { card, totalUnidades, nameUnidad } = props;

    let icono = "";

    switch (card) {
      case "bravo":
        icono = <IconoUnidadBravo/>;
        break;
      case "alfa":
        icono = <IconoUnidadAlfa/>;
        break;
      case "delta":
        icono = <IconoUnidadDelta/>;
        break;
    }

    return (
        <div className='flex justify-between items-center p-3 bg-[#F9F9F9] rounded-md'>
                    <div>{icono}</div>
                    <div className="text-end">
                        <p className='text-[10px] text-gray-400'>{nameUnidad}</p>
                        <span className='text-md font-bold'>{totalUnidades}</span>
                    </div>
                </div>
    )
}