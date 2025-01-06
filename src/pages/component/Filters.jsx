import { useState, useId } from "react";

//HOOKS
import { useFilters } from "../../hooks/useFilters";

export function FilterServicios() {
  const { filters, setFilters } = useFilters();

  const servicioFilterId = useId();

  const handleSertivicio = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      servicio: event.target.value,
    }));
  };
  return (
    <div className="grid grid-cols-2 gap-2 items-center mb-4">
      <div></div>
      <div className="grid justify-end">
        <div>
          <label className="mr-2 font-semibold" htmlFor={servicioFilterId}>
            Servicio
          </label>
          <select
            className="w-60 p-2 outline-none rounded-lg bg-[#F6F6F6] border-none appearance-none"
            id={servicioFilterId}
            onChange={handleSertivicio}
          >
            <option value="todos">Todas</option>
            <option value="AMD">AMD</option>
            <option value="EMD">EMD</option>
            <option value="TLD">TLD</option>
          </select>
        </div>
      </div>
    </div>
  );
}
