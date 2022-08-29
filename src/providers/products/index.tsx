import React, { createContext, SetStateAction, useState } from "react";
import { DescriptionWine } from "../../types/index";

interface ProductContextInterface {
  databaseVinhos: DescriptionWine[];
  setDataBaseVinhos: React.Dispatch<SetStateAction<DescriptionWine[]>>;
  inputSearch: string;
  setInputSearch: React.Dispatch<SetStateAction<string>>;
  searchResult: DescriptionWine[];
  setSearchResult: React.Dispatch<SetStateAction<DescriptionWine[]>>;
  modalOpenClose: boolean;
  setModalOpenClose: React.Dispatch<SetStateAction<boolean>>;
  titleBottleWIne: DescriptionWine;
  setTitleBottleWine: React.Dispatch<SetStateAction<DescriptionWine>>;
  productOnCart: DescriptionWine[] | [];
  setProductOnCart: React.Dispatch<SetStateAction<DescriptionWine[]>>;
}

export const ProductContext = createContext<ProductContextInterface>(
  {} as ProductContextInterface
);

function ProductProvider({ children }: { children: React.ReactNode }) {
  const [databaseVinhos, setDataBaseVinhos] = useState<DescriptionWine[]>([]);
  const [inputSearch, setInputSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<DescriptionWine[] | []>([]);
  const [modalOpenClose, setModalOpenClose] = useState<boolean>(false);
  const [titleBottleWIne, setTitleBottleWine] = useState<DescriptionWine>(
    {} as DescriptionWine
  );
  const [productOnCart, setProductOnCart] = useState<DescriptionWine[] | []>(
    []
  );

  return (
    <ProductContext.Provider
      value={{
        databaseVinhos,
        setDataBaseVinhos,
        inputSearch,
        setInputSearch,
        searchResult,
        setSearchResult,
        modalOpenClose,
        setModalOpenClose,
        titleBottleWIne,
        setTitleBottleWine,
        productOnCart,
        setProductOnCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
