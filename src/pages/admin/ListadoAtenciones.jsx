import React, { useState } from "react";

import { Header } from "../component/Header";
import { CardCounter } from "../component/CardCounter";
import { TabGroupCounters } from "../component/TabGroupCounters"
import { TableBody, TableListDespacho } from "../component/TableListDespacho";
import { FilterServicios } from "../component/Filters";


import { useFilters } from '../../hooks/useFilters'
import { atencionesDesp as initialDesp } from '../../mockups/mockupsData'

export function ListadoAtenciones () {

    const [atencionesDesp] = useState(initialDesp)
    const { filtersServicios } = useFilters()
    const filtroServicio = filtersServicios(atencionesDesp)

    return (
        <>
            <Header text="Lista de atenciones" />

            <div className="md:grid grid-flow-col lg:grid-cols-1/2 lg:grid-rows-1 md:grid-rows-2 sm:grid-rows-2 gap-2 mb-4">
            
            <div className="grid w-full 2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-2">
                    <div><CardCounter card="programadas" totalServicio="18" text="Atenciones Programadas"/></div>
                    <div><CardCounter card="espera" totalServicio="9" text="Atenciones en Espera"/></div>
                    <div><CardCounter card="proceso" totalServicio="18" text="Atenciones en Proceso"/></div>
                </div>
                <div className="grid mt-2 md:mt-0 col-span-3">
                    <TabGroupCounters/>
                </div>
            </div>
            <div className="grid grid-flow-col lg:grid-cols-1/2">
                <FilterServicios/>
            </div>
            <div>
                <TableBody atencionesDesp={filtroServicio}/>
            </div>
        </>
    )
}