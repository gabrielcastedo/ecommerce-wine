import React from "react";
import { DataWine, MyProps } from "../../types";
import Modal from "../Modal";
import { useState } from "react";

function Card({ DataWine }: MyProps) {
  const [modalOpenClose, setModalOpenClose] = useState<boolean>(false);
  const [titleBottleWIne, setTitleBottleWine] = useState<DataWine>(
    {} as DataWine
  );

  function handleClick(DataWine: DataWine) {
    console.log(DataWine);
    setModalOpenClose(true);
    setTitleBottleWine(DataWine);
  }

  return (
    <>
      <img src={DataWine.img} alt={"vinhos"} />
      <p onClick={() => handleClick(DataWine)}>{DataWine.nome}</p>
      <p>{DataWine.preco}</p>
      <div>
        {modalOpenClose === false ? (
          <></>
        ) : (
          <Modal
            DataWine={titleBottleWIne}
            modalOpenClose={modalOpenClose}
            setModalOpenClose={setModalOpenClose}
          />
        )}
      </div>
    </>
  );
}

export default Card;
