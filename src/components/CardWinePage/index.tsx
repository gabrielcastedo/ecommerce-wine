import { ContainerCardWinePage } from "./style";

interface IPropsCardWinePage {
  image: string;
  wine: string;
  typeWine: string;
}

const CardWinePage = ({ image, wine, typeWine }: IPropsCardWinePage) => {
  if (typeWine === "reds") {
    typeWine = "vermelho";
  }

  return (
    <ContainerCardWinePage>
      <p>New</p>
      <figure>
        <img src={image} alt="" />
      </figure>
      <h1>{wine}</h1>
      <h2>Vinho {typeWine}</h2>
    </ContainerCardWinePage>
  );
};

export default CardWinePage;
