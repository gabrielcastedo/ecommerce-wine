import React from "react";
import classnames from "classnames";
import { usePagination, DOTS } from "./UsePagination";
import { PaginationStyled } from "./style";

interface IPropsPagination {
  onPageChange: any;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className: string;
}

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
}: IPropsPagination) => {
  const paginationRange: any = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }
  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <PaginationStyled>
      <ul
        className={classnames("pagination-container", {
          [className]: className,
        })}
      >
        {/* Seta de navegação da esquerda */}
        <li
          className={classnames("pagination-item", {
            disabled: currentPage === 1,
          })}
          onClick={onPrevious}
        >
          <div className="arrow left" />
        </li>
        {paginationRange.map((pageNumber: any) => {
          if (pageNumber === DOTS) {
            return <li className="pagination-item dots">&#8230;</li>;
          }

          // Renderize a amostra de página
          return (
            <li
              className={classnames("pagination-item", {
                selected: pageNumber === currentPage,
              })}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
        {/*  Seta de navegação da direita */}
        <li
          className={classnames("pagination-item", {
            disabled: currentPage === lastPage,
          })}
          onClick={onNext}
        >
          <div className="arrow right" />
        </li>
      </ul>
    </PaginationStyled>
  );
};

export default Pagination;
