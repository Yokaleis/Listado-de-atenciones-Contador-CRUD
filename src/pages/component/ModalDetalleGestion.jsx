import React, { useState} from "react";
import Modal from "react-modal";

export function ModalDetalle( { isOpen, onRequestClose, cardData } ) {
    return (
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Detalle"
        className="Modal"
        overlayClassName="overlay">

            <h1>Detalle</h1>
            <button onClick={onRequestClose}>Cerrar</button>
            <div>
                <p>Nombre {cardData.nombre}</p>
                <p>Nombre {cardData.ubicacion}</p>
            </div>

        </Modal>
    )
}