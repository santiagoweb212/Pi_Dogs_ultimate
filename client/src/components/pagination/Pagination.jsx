 import { useState, useEffect } from "react";
import { getVisiblePages } from "../../utils/getVisiblesPages";
import estilos from "./Pagination.module.css";

export const Pagination = ({
  total,
  current,
  handlePageChange,
  itemsPerPage,
  windowSize,
}) => {
  const [pages, setPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);

  useEffect(() => {
    const totalPages = Math.ceil(total / itemsPerPage);
    let pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    setPages(pages);
  }, [total, itemsPerPage]);

  const handleClick = (newPage) => {
    handlePageChange(newPage);
    setSelectedPage(newPage);
  };

  const visiblePages = getVisiblePages(current, pages, windowSize);

  return (
    <>
      {visiblePages.map((page,i) => {
        if (page === "...") {
          return <span key={Date.now()+i}  className={estilos.span}>{page}</span>;
        }
        return (
          <button
            key={page}
            value={page}
            className={
              selectedPage === page ? estilos.clicked : estilos.button
            }
            onClick={() => handleClick(page)}>
            {page}
          </button>
        );
      })}
    </>
  );
};



