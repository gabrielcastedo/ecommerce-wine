import React, { useContext, useEffect, useState, useMemo } from "react";
import api from "../../services/api";

import { DescriptionWine } from "../../types";
import { BiSearch } from "react-icons/bi";
import { ProductContext } from "../../providers/products";
import {
  WinePageStyle,
  InputSearchButton,
  ButtonsCategory,
  CardsStyle,
  PaginationStyle,
} from "./style";
import CardWinePage from "../../components/CardWinePage";
import Pagination from "../../components/Pagination";

let PageSize = 10;

function WinePage(): React.ReactElement {
  const { databaseVinhos, setDataBaseVinhos, inputSearch, setInputSearch } =
    useContext(ProductContext);

  const [searchResult, setSearchResult] = useState<DescriptionWine[] | []>([]);
  const [typeWine, setTypeWine] = useState<string>("reds");
  const [currentPage, setCurrentPage] = useState<number>(1);

  function showType(category: string) {
    setSearchResult([]);
    setTypeWine(category);
    setCurrentPage(1);
  }

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

  useEffect(() => {
    api
      .get(`/${typeWine}/`)
      .then((response) => setDataBaseVinhos(response.data));

    console.log(databaseVinhos);
  }, [typeWine]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    if (searchResult.length === 0) {
      return databaseVinhos.slice(firstPageIndex, lastPageIndex);
    } else {
      return searchResult.slice(firstPageIndex, lastPageIndex);
    }
  }, [typeWine, currentPage, databaseVinhos]);

  return (
    <WinePageStyle>
      <InputSearchButton className="sectionSearchButtons">
        <input
          placeholder="Busque aqui seu vinho"
          onChange={(event) => setInputSearch(event.target.value)}
        />
        <button onClick={() => showProducts(inputSearch)}>
          <BiSearch color="white" />
        </button>
      </InputSearchButton>
      <ButtonsCategory>
        <button onClick={() => showType("reds")}>Reds</button>
        <button onClick={() => showType("whites")}>Whites</button>
        <button onClick={() => showType("sparkling")}>Sparkling</button>
        <button onClick={() => showType("rose")}>Rose</button>
        <button onClick={() => showType("dessert")}>Dessert</button>
      </ButtonsCategory>

      <CardsStyle>
        {currentTableData.length === 0
          ? databaseVinhos.map((product: DescriptionWine) => {
              return (
                <CardWinePage
                  image={product.image}
                  wine={product.wine}
                  typeWine={typeWine}
                  key={product.id}
                />
              );
            })
          : currentTableData.map((product: DescriptionWine) => {
              return (
                <CardWinePage
                  image={product.image}
                  wine={product.wine}
                  typeWine={typeWine}
                  key={product.id}
                />
              );
            })}
      </CardsStyle>
      <PaginationStyle>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={
            searchResult.length === 0
              ? databaseVinhos.length
              : searchResult.length
          }
          pageSize={PageSize}
          onPageChange={(page: number) => setCurrentPage(page)}
        />
      </PaginationStyle>
    </WinePageStyle>
  );
}

export default WinePage;
