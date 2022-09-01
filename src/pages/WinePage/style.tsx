import styled from "styled-components";

export const WinePageStyle = styled.main`
  background-color: #f6f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 425px;
  padding: 17px;

  @media (min-width: 768px) {
    background-color: #f6f5f5;
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: auto;
    height: auto;
    padding: 50px;
    align-items: flex-end;
  }
`;

export const InputSearchButton = styled.section`
  background-color: transparent;
  width: 381px;
  height: 50px;
  display: flex;
  flex-direction: row;
  gap: 6px;

  input {
    background-color: transparent;
    border: solid 0.5px #757575;
    border-radius: 4px;
    width: 381px;
    height: 50px;
    font-family: "Source Sans Pro", sans-serif;
    color: #757575;
    padding-left: 10px;

    ::placeholder {
      padding-left: 10px;
    }
  }

  button {
    background-color: ${(props) => props.theme.colors["red1"]};
    width: 52px;
    height: 52px;
    border-radius: 4px;
    border: solid 2px ${(props) => props.theme.colors["red1"]};
  }

  @media (min-width: 768px) {
    background-color: transparent;
    width: 381px;
    height: 50px;
    display: flex;
    flex-direction: row;

    input {
      background-color: transparent;
      border: solid 0.5px #757575;
      border-radius: 4px;
      width: 381px;
      height: 50px;
      font-family: "Source Sans Pro", sans-serif;
      color: #757575;

      ::placeholder {
        padding-left: 10px;
      }
    }

    button {
      background-color: ${(props) => props.theme.colors["red1"]};
      width: 52px;
      height: 52px;
      border-radius: 4px;
      border: solid 2px ${(props) => props.theme.colors["red1"]};
    }
  }
`;

export const ButtonsCategory = styled.section`
  width: 100%;
  gap: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  button {
    background-color: transparent;
    color: ${(props) => props.theme.colors["red1"]};
    font-family: "Benne", sans-serif;
    font-size: 16px;
  }

  @media (min-width: 768px) {
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: end;
    gap: 32px;

    button {
      background-color: transparent;
      color: ${(props) => props.theme.colors["red1"]};
      font-family: "Benne", sans-serif;
      font-size: 24px;
    }
  }
`;

export const CardsStyle = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
`;

export const PaginationStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
