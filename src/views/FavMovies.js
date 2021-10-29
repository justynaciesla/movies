import React, { useContext } from "react";
import MovieList from "../components/MovieList";
import RootContext from "../context";
import { moviesListTypes } from "../utils/types";

const FavMovies = () => {
  const { favMovies } = useContext(RootContext);
  // const textOfButton = "Remove from favorite";
  return (
    <div className="home-wrapper">
      <div className="header-wrapper">
        <h1 className="header1">FAV </h1>
        <h1 className="header2">MOVIES</h1>
      </div>

      <MovieList movieArray={favMovies} listType={moviesListTypes.favMovies} />
    </div>
  );
};

export default FavMovies;
