import styled from "styled-components";

export const ContainerCardWinePage = styled.section`
  width: 190px;
  height: 300px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors["red1"]};
  gap: 5px;

  display: flex;
  flex-direction: column;

  p {
    font-family: "Benne", sans-serif;
    text-align: end;
    font-size: 16px;
    margin-right: 10px;
    color: ${(props) => props.theme.colors["yellow1"]};
    margin-top: 16px;
  }

  figure {
    margin-left: auto;
    margin-right: auto;
  }

  img {
    width: 56px;
    height: 200px;
  }

  h1 {
    font-family: "Benne", sans-serif;
    color: ${(props) => props.theme.colors["white1"]};
    font-size: 14px;
    font-weight: bold;
    text-align: center;
  }

  h2 {
    font-family: "Benne", sans-serif;
    color: ${(props) => props.theme.colors["white1"]};
    font-size: 14px;
    text-align: center;
    margin-bottom: 8px;
  }
`;
