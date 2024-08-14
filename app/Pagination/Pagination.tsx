import React, { useState } from "react";
import styles from "./Pagination.module.css";
import classnames from "classnames";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;

  const handleClick = (page: any) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className={styles.pagination}>
      <div
        className={classnames(styles.page - item, {
          [styles.disabled]: currentPage === 1,
        })}
        onClick={() => handleClick(currentPage - 1)}
      >
        Prev
      </div>
      {[...Array(totalPages)].map((_, index) => (
        <div
          key={index + 1}
          className={classnames(styles.page - item, {
            [styles.active]: currentPage === index + 1,
          })}
          onClick={() => handleClick(index + 1)}
        >
          {index + 1}
        </div>
      ))}
      <div
        className={classnames(styles.page - item, {
          [styles.disabled]: currentPage === totalPages,
        })}
        onClick={() => handleClick(currentPage + 1)}
      >
        Next
      </div>
    </div>
  );
};

export default Pagination;
