import React, { useContext } from "react";
import MovieList from "../components/MovieList";
import "./Home.css";
import RootContext from "../context";
import { moviesListTypes } from "../utils/types";

const Home = () => {
  const { movies } = useContext(RootContext);

  return (
    <div className="home-wrapper">
      <div className="header-wrapper">
        <h1 className="header1">TOP</h1>
        <h1 className="header2">MOVIES</h1>
      </div>

      <MovieList movieArray={movies} listType={moviesListTypes.movies} />
    </div>
  );
};

export default Home;
