import styled from "styled-components";
import theme from "../../styles/theme";

export const PaginationStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .pagination-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style-type: none;
  }

  .pagination-item {
    padding: 0 12px;
    height: 32px;
    text-align: center;
    margin: auto 4px;
    color: rgba(0, 0, 0, 0.87);
    display: flex;
    box-sizing: border-box;
    align-items: center;
    letter-spacing: 0.01071em;
    border-radius: 16px;
    line-height: 1.43;
    font-family: "Benne", sans-serif;
    color: ${(props) => props.theme.colors["red1"]};
    font-size: 20px;
    min-width: 32px;

    &.dots:hover {
      background-color: transparent;
      cursor: default;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }

    &.selected {
      background-color: rgba(0, 0, 0, 0.2);
    }

    .arrow {
      &::before {
        position: relative;
        /* top: 3pt; Remova essa linha do comentário para baixar os ícones conforme solicitado nos comentários*/
        content: "";
        /* Usando uma escala em, as setas terão o tamanho acompanhando a fonte */
        display: inline-block;
        width: 0.4em;
        height: 0.4em;
        border-right: 0.12em solid rgba(0, 0, 0, 0.87);
        border-top: 0.12em solid rgba(0, 0, 0, 0.87);
      }

      &.left {
        transform: rotate(-135deg) translate(-50%);
      }

      &.right {
        transform: rotate(45deg);
      }
    }

    &.disabled {
      pointer-events: none;

      .arrow::before {
        border-right: 0.12em solid rgba(0, 0, 0, 0.43);
        border-top: 0.12em solid rgba(0, 0, 0, 0.43);
      }

      &:hover {
        background-color: transparent;
        cursor: default;
      }
    }
  }
`;
