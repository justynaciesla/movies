import React, { useContext } from "react";
import RootContext from "../../context";
import { baseImgUrl } from "../../utils/baseImgUrl";
import "./style.css";
import ScrollableList from "../ScrollableList";
import { scrollableListType } from "./../../utils/types";
import ReviewList from "../ReviewList";

const SingleMovie = ({
  location: {
    state: { id, title, overview, release_date, vote_average, backdrop_path },
  },
}) => {
  const { similarMovies, movieCast } = useContext(RootContext);

  return (
    <div className="home-wrapper">
      <div className="header-wrapper">
        <h1 className="title-header">{title}</h1>
      </div>
      <div className="single-movie-content__wrapper">
        <img
          src={`${baseImgUrl}${backdrop_path}`}
          alt="movieImg"
          className="single-movie_img"
        />

        <div className="single-movie-text-wrapper">
          <h1 className="movie-title">{title}</h1>
          <h4 className="movie-overview">{overview}</h4>
          <p className="movie-release">Released {release_date}</p>
          <p className="movie-rate">Rate {vote_average}</p>
        </div>
      </div>

      <ScrollableList
        listType={scrollableListType.movieCast}
        scrollableArray={movieCast}
      />

      <ScrollableList
        listType={scrollableListType.similarMovies}
        scrollableArray={similarMovies}
      />

      <ReviewList />
    </div>
  );
};

export default SingleMovie;
