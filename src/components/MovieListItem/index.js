import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { baseImgUrl } from "../../utils/baseImgUrl";
import Heart from "../../assets/icons/heart.png";
import RootContext from "../../context";
import { moviesListTypes } from "../../utils/types";
import "./style.css";

const MovieListItem = ({ movie, listType }) => {
  const { id, poster_path, title, release_date, vote_average } = movie;
  const {
    addToFav,
    removeFromFav,
    getSimilarMovies,
    getCastOfMovie,
    checkIfMovieIsInFav,
    getReviews,
  } = useContext(RootContext);

  const _renderHandlerBtn = () => (
    <button
      disabled={
        listType === moviesListTypes.movies
          ? checkIfMovieIsInFav(movie.id)
            ? true
            : false
          : false
      }
      className={
        listType === moviesListTypes.movies
          ? checkIfMovieIsInFav(movie.id)
            ? "added-to-fav__button"
            : "add-to-fav__button"
          : "remove-from-fav__button"
      }
      onClick={() => {
        listType === moviesListTypes.movies ? addToFav(id) : removeFromFav(id);
      }}
    >
      {listType === moviesListTypes.movies
        ? checkIfMovieIsInFav(movie.id)
          ? "Added to Favorite "
          : "Add to Favorite "
        : "Remove from Favorite "}
      <img src={Heart} alt="heart" className="heart_img" />
    </button>
  );

  return (
    <li key={id} className="img-title__wrapper">
      <Link
        to={{
          pathname: `/movies/${id}`,
          state: { ...movie },
        }}
      >
        <img
          src={`${baseImgUrl}${poster_path}`}
          alt="movieImg"
          className="movie_img"
          onClick={() => {
            getSimilarMovies(id);
            getCastOfMovie(id);
            getReviews(id);
          }}
        />
      </Link>
      <h3 className="movie_title">{title}</h3>
      <div className="paragraph-wrapper">
        <p className="release-date">Released {release_date}</p>
        <p className="rate">Rate {vote_average}</p>
      </div>
      {_renderHandlerBtn()}
    </li>
  );
};

export default MovieListItem;
