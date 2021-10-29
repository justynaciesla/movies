import React, { useContext } from "react";
import RootContext from "../../context";
import Prev from "../../assets/icons/previous.png";
import Next from "../../assets/icons/next.png";
import "./style.css";

const Pagination = () => {
  const { currentPage, goToNextPage, goToPreviousPage } =
    useContext(RootContext);
  return (
    <div className="pagination-wrapper">
      <button
        className={
          currentPage === 1
            ? "pagination-button-disabled"
            : "pagination-button-prev-active"
        }
        onClick={() => goToPreviousPage()}
      >
        <img src={Prev} alt="heart" className="heart_img" />
      </button>
      <button className="current-page-button"> {currentPage} </button>
      <button
        className="pagination-button-next-active"
        onClick={() => goToNextPage()}
      >
        <img src={Next} alt="heart" className="heart_img" />
      </button>
    </div>
  );
};

export default Pagination;
