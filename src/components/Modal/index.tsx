import React, { Dispatch, SetStateAction } from "react";
import { DataWine } from "../../types";

interface Title {
  DataWine: DataWine;
  modalOpenClose: boolean;
  setModalOpenClose: Dispatch<SetStateAction<boolean>>;
}

function Modal({ DataWine, modalOpenClose, setModalOpenClose }: Title) {
  return (
    <>
      <button onClick={() => setModalOpenClose(false)}>Fechar</button>
      <div>
        <h1>{DataWine.nome}</h1>
        <h3>{DataWine.volume}Volume</h3>
        <h3>{DataWine.safra}Safra</h3>
        <h3>{DataWine.teor}</h3>
        <h3>{DataWine.pais}Pais</h3>
      </div>
      <div>
        <img src={DataWine.img} alt="Vinho Selecionado" />
      </div>
    </>
  );
}

export default Modal;
