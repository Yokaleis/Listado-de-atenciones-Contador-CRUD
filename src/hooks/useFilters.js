import { useContext } from "react";
import { FiltersContext } from "../context/filtersContext";

export function useFilters() {
    const { filters, setFilters } = useContext(FiltersContext)

    console.log({ filters });


    const filtersServicios = (atencionesDesp) => {
        return atencionesDesp.filter((despacho) => {
            return filters.servicio === "todos" || despacho.servicio === filters.servicio;
        })
      };

    return { filters, filtersServicios, setFilters }
}