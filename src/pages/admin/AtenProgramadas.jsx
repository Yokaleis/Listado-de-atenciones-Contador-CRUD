import { Header } from "../component/Header";

import { ColumnsDashboard } from "../component/ColumnsAtenProgramadas";

export function AProgramadas() {
    return (
        <>
        <Header text="Atenciones programadas"/>

        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-4">
            <ColumnsDashboard column="programado" text="Entrega de medicamentos"/>
            <ColumnsDashboard column="programado" text="Atención medica domiciliaria"/>
            <ColumnsDashboard column="programado" text="Traslado"/>
            <ColumnsDashboard column="programado" text="Laboratorio"/>
            <ColumnsDashboard column="programado" text="Hospitalización domiciliaria"/>
         </div>
        </>
    )
}