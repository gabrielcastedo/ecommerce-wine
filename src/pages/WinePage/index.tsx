import React, { useContext, useEffect, useState } from "react";
import api from "../../services/api";

import { DescriptionWine } from "../../types";
import { BiSearch } from "react-icons/bi";
import { ProductContext } from "../../providers/products";
import {
  WinePageStyle,
  InputSearchButton,
  ButtonsCategory,
  CardsStyle,
} from "./style";
import CardWinePage from "../../components/CardWinePage";

function WinePage(): React.ReactElement {
  const { databaseVinhos, setDataBaseVinhos, inputSearch, setInputSearch } =
    useContext(ProductContext);

  const [searchResult, setSearchResult] = useState<DescriptionWine[] | []>([]);
  const [typeWine, setTypeWine] = useState<string>("reds");

  useEffect(() => {
    api
      .get(`/${typeWine}/`)
      .then((response) => setDataBaseVinhos(response.data));
  });

  function showProducts(productOrRegion: string) {
    const productOrRegionFiltered = databaseVinhos.filter(
      (product) =>
        product.wine
          .toLowerCase()
          .trim()
          .includes(productOrRegion.toLowerCase().trim()) === true ||
        product.location
          .toLowerCase()
          .trim()
          .includes(productOrRegion.toLowerCase().trim()) === true
    );

    setSearchResult(productOrRegionFiltered);
  }

  function showType(category: string) {
    setSearchResult([]);
    setTypeWine(category);
  }

  return (
    <WinePageStyle>
      <InputSearchButton>
        <input
          placeholder="Busque aqui seu vinho"
          onChange={(event) => setInputSearch(event.target.value)}
        />
        <button onClick={() => showProducts(inputSearch)}>
          <BiSearch color="white" />
        </button>
      </InputSearchButton>
      <ButtonsCategory>
        <button onClick={() => showType("eds")}>Reds</button>
        <button onClick={() => showType("whites")}>Whites</button>
        <button onClick={() => showType("sparkling")}>Sparkling</button>
        <button onClick={() => showType("rose")}>Rose</button>
        <button onClick={() => showType("dessert")}>Dessert</button>
      </ButtonsCategory>

      <CardsStyle>
        {searchResult.length === 0
          ? databaseVinhos.map((product: DescriptionWine) => (
              <CardWinePage
                image={product.image}
                wine={product.wine}
                typeWine={typeWine}
              />
            ))
          : searchResult?.map((product: DescriptionWine) => (
              <CardWinePage
                image={product.image}
                wine={product.wine}
                typeWine={typeWine}
              />
            ))}
      </CardsStyle>
    </WinePageStyle>
  );
}

export default WinePage;
