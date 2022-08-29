export interface MyProps {
  DataWine: {
    categoria: string;
    id: number;
    img: string;
    nome: string;
    pais: string;
    preco: number;
    safra: number;
    teor: number;
    volume: string;
  };
}

export interface DescriptionWine {
  winery: string;
  wine: string;
  average: string;
  reviews: string;
  location: string;
  image: string;
  id: number;
}
