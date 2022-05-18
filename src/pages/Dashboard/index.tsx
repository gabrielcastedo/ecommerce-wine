import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import api from "../../services/api";
import { DataWine } from "../../types";
import { BiSearch } from "react-icons/bi";

function DashBoard() {
  const [databaseVinhos, setDataBaseVinhos] = useState<DataWine[]>([]);
  const [inputSearch, setInputSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<DataWine[] | []>([]);

  useEffect(() => {
    api.get("/vinhos").then((response) => setDataBaseVinhos(response.data));
  }, []);

  function showProducts(productOrRegion: string) {
    const productOrRegionFiltered = databaseVinhos.filter(
      (product) =>
        product.nome
          .toLowerCase()
          .trim()
          .includes(productOrRegion.toLowerCase().trim()) === true ||
        product.pais
          .toLowerCase()
          .trim()
          .includes(productOrRegion.toLowerCase().trim()) === true
    );

    setSearchResult(productOrRegionFiltered);
  }

  return (
    <>
      <input
        placeholder="Digite o nome ou a região do vinho aqui"
        type="text"
        onChange={(event) => setInputSearch(event.target.value)}
      />
      <button onClick={() => showProducts(inputSearch)}>
        <BiSearch />
      </button>
      <div>
        <p>Olá, Gabriel</p>
        <p>Nós temos todos os vinhos que você precisa</p>
      </div>
      <section>
        {searchResult.length === 0
          ? databaseVinhos.map((product, index) => (
              <Card DataWine={product} key={index} />
            ))
          : searchResult?.map((product, index) => (
              <Card DataWine={product} key={index} />
            ))}
      </section>
    </>
  );
}

export default DashBoard;
