import React from "react";
import MovieListItem from "../MovieListItem";
import Pagination from "../Pagination";
import "./style.css";

const MovieList = ({ movieArray, listType }) => {
  return (
    <>
      <ul className="movie-list-item__wrapper">
        {movieArray.map((movie) => (
          <MovieListItem movie={movie} listType={listType} />
        ))}
      </ul>
      {listType === "movies" ? <Pagination /> : null}
    </>
  );
};

export default MovieList;
