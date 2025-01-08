import React from "react";
import { Header } from "../component/Header";
import { BotonHome } from "../component/BotonHome";
import { Link } from "react-router-dom";


export function Home () {
    return (
        <>
            <Header text="Bienvenida, "name="Yokastina"/>
            <div className="grid grid-cols-4 gap-4 items-center justify-items-center grid-rows-3 p-40">
                <Link to="/atenciones">
                <BotonHome boton="atenciones" text="Atenciones"/>
                </Link>
                
                <BotonHome boton="sedes" text="Sedes"/>
                <BotonHome boton="clientes" text="Clientes"/>
                <BotonHome boton="servicios" text="Servicios"/>
                <BotonHome boton="afiliados" text="Afiliados"/>
                <BotonHome boton="usuarios" text="Usuarios"/>
                <BotonHome boton="tripulaciones" text="Tripulaciones"/>
                <BotonHome boton="configuraciones" text="Configuraciones"/>
            </div>
        </>
    )
}