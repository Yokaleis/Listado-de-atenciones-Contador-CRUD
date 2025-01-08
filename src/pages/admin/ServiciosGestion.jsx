import { useState } from "react";
import { gestionServicios } from "../../mockups/mockupsData";
import { Header } from "../component/Header";
import Modal from "react-modal";
import { ButtonSecondary } from "../component/Buttons";
import { Badge } from "../component/Badge";
import { TabGroupCounters } from "../component/TabGroupCounters";


/* REACT ICONS */
import { HiX } from "react-icons/hi";





export function GestionServiciosDashboard({ gestionServicios }) {
  
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  

  const openModal = (user) => {
    console.log("Opening modal for user:", user);
    setSelectedUser(user);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    console.log("Closing modal");
    setModalIsOpen(false);
    setSelectedUser(null);
  };

  return (
    <>
      <Header text="Dashboard Gestión de Servicios 2" />
      <div className="md:grid grid-flow-col lg:grid-cols-1/2 lg:grid-rows-1 md:grid-rows-2 sm:grid-rows-2 gap-2 mb-4">
        <div className="grid w-full 2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-2 items-center">
        {/* FILTROS */}
        <div> 
          <select
            className="w-60 p-2 outline-none rounded-lg bg-[#F6F6F6] border-none appearance-none"
            id="filtro"
          >
            <option value="todos">Todas</option>
            <option value="AMD">AMD</option>
            <option value="EMD">EMD</option>
            <option value="TLD">TLD</option>
          </select>
        </div>
        <div> 
          <select
            className="w-60 p-2 outline-none rounded-lg bg-[#F6F6F6] border-none appearance-none"
            id="filtro"
          >
            <option value="todos" disabled selected hidden>Seleccione un servicio</option>
            <option value="AMD">AMD</option>
            <option value="EMD">EMD</option>
            <option value="TLD">TLD</option>
          </select>
        </div>
        </div>
        <div className="grid mt-2 md:mt-0 col-span-3"><TabGroupCounters/></div>
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-4">
        <div className="p-2 rounded-lg border">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-bold">Creado</p>
            <Badge estatus="default" texto="2"/>
          </div>
          <CardGestion card="proveedor" openModal={openModal} gestionServicios={gestionServicios} />
        </div>
        <div className="p-2 rounded-lg border">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-bold">Asignado</p>
            <Badge estatus="default" texto={2}/>
          </div>
          <CardGestion card="propia" openModal={openModal} gestionServicios={gestionServicios} />
        </div>
        <div className="p-2 rounded-lg border">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-bold">Salida base</p>
            <Badge estatus="default" texto={2}/>
          </div>
          <CardGestion card="proveedor" openModal={openModal} gestionServicios={gestionServicios} />
        </div>
        <div className="p-2 rounded-lg border">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-bold">Llegada destino</p>
            <Badge estatus="default" texto={2}/>
          </div>
          <CardGestion card="propia" openModal={openModal} gestionServicios={gestionServicios} />
        </div>
        <div className="p-2 rounded-lg border">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-bold">Salida destino</p>
            <Badge estatus="default" texto={2}/>
          </div>
          <CardGestion card="propia" openModal={openModal} gestionServicios={gestionServicios} />
        </div>
      </div>
      

      <UserDetalleModal modalIsOpen={modalIsOpen} closeModal={closeModal} selectedUser={selectedUser} />
    </>
  );
}

export function CardGestion({ card, openModal }) {
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
      {gestionServicios.map((user) => (
        <div className={`p-2 rounded-lg ${borColor} mb-4`} key={user.id}>
          <span className="text-[9px] flex justify-end">01/02/2024 - 15:40</span>
          <h3 className="text-sm font-bold mb-2">{user.nombre}</h3>
          <div className="flex gap-2 mb-2">
            <div>
              <p className="text-[9px] opacity-50 font-semibold">Aseguradora</p>
              <h4 className="text-[12px]">{user.aseguradora}</h4>
            </div>
            <div>
              <p className="text-[9px] opacity-50 font-semibold">Ubicación</p>
              <h4 className="text-[12px]">{user.ubicacion}</h4>
            </div>
          </div>
          <div className="mb-2">
            <p className="text-[9px] opacity-50 font-semibold">Motivo</p>
            <h4 className="text-[12px]">{user.motivo}</h4>
          </div>
          <button onClick={() => openModal(user)}>Ver</button>
        </div>
      ))}
    </>
  );
}

export function UserDetalleModal({ modalIsOpen, closeModal, selectedUser }) {
  console.log("Modal is open:", modalIsOpen);
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Detalles del Usuario"
      style={{ content: { width: "60%", margin: "auto" } }}
    >
      {selectedUser && (
        <div className="p-4">
          <div className="flex justify-end">
            <HiX className="opacity-40 hover:text-primary hover:opacity-100 cursor-pointer text-lg" onClick={closeModal}/>
          </div>
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-2">{selectedUser.nombre}</h2>
            <p className="text-sm">{selectedUser.fecha}</p>
          </div>
          <div className="mb-4">
            <p className="text-sm font-bold">Aseguradora:</p>
            <p className="text-base">{selectedUser.aseguradora}</p>
          </div>
          <div className="mb-4">
            <p className="text-sm font-bold">Ubicación:</p>
            <p className="text-base">{selectedUser.ubicacion}</p>
          </div>
          <div className="mb-4">
            <p className="text-sm font-bold">Diagnóstico:</p>
            <p className="text-base">{selectedUser.diagnostico}</p>
          </div>
          <div className="mb-4">
            <p className="text-sm font-bold">Síntomas:</p>
            <p className="text-base">{selectedUser.sintomas}</p>
          </div>
          <div className="grid justify-center mt-20" onClick={closeModal}>
            <ButtonSecondary text="Cerrar" />
          </div>
        </div>
      )}
    </Modal>
  );
}