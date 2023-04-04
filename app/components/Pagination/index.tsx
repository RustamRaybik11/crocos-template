import React, { useEffect, useState } from "react";
import usePagination from "@mui/material/usePagination";
import { IPagination } from "../../types/types";
import ChevronLeft from "../../icons/ChevronLeft";
import DoubleChevronLeft from "../../icons/DoubleChevronLeft";
import ChevronRight from "../../icons/ChevronRight";
import DoubleChevronRight from "../../icons/DoubleChevronRight";
import { useLoadingContext } from "../../context/loading";
import { useTranslation } from "next-i18next";

type Props = {
  paginationData: IPagination;
  updatePaginationData: Function;
};

const Pagination: React.FC<Props> = ({
  paginationData,
  updatePaginationData,
}) => {
  const {t} = useTranslation()
  const { items } = usePagination({
    count: paginationData.totalItems,
    siblingCount: 0
  });
  const { isLoading, setIsLoading } = useLoadingContext();

  return (
    <div className="pagination">
      <nav className="pagination__list">
        <ul>
          <>
            {items.map(({ page, type, selected, ...item }, index) => {
              let children = null;

              if (type === "start-ellipsis" || type === "end-ellipsis") {
                children = "…";
              } else if (type === "page") {
                children = (
                  <button
                    type="button"
                    style={{
                      fontWeight: selected ? "bold" : undefined,
                    }}
                    className={`pagination__list__page ${
                      selected ? "pagination__list__page--active" : ""
                    }`}
                    {...item}
                  >
                    {page}
                  </button>
                );
              } else if (type === "previous") {
                children = (
                  <button type="button" className={`pagination__list--arrow ${page === 0 ? 'd-none' : ''}`}{...item}>
                    {t("back")}
                  </button>
                );
              } else if (type === "next") {
                children = (
                  <button type="button" className={`pagination__list--arrow ${page === paginationData.totalItems + 1 ? 'd-none' : ''}`} {...item}>
                    {t("next")}
                  </button>
                );
              } else {
                children = (
                  <button type="button" {...item}>
                    {type}
                  </button>
                );
              }

              return <li key={index}>{children}</li>;
            })}
          </>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
