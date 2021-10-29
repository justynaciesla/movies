import React, { useState, useEffect } from "react";
import Router from "./routing/Router";
import { getFavMoviesFromLocalStorage } from "./utils/localStorageGetters";
import axios from "axios";
import RootContext from "./context";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favMovies, setFavMovies] = useState(getFavMoviesFromLocalStorage());
  const [searchMovieInputValue, setSearchMovieInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [movieCast, setMovieCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    localStorage.setItem("favMovies", JSON.stringify(favMovies));
  }, [favMovies]);

  const getMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${currentPage}`
      )
      .then((res) => setMovies(res.data.results));
  };

  const checkIfMovieIsInFav = (movieId) => {
    let isMovieInFavMovies;

    favMovies.forEach((movie) => {
      if (movie.id === movieId) {
        isMovieInFavMovies = true;
      }
    });

    return isMovieInFavMovies;
  };

  const addToFav = (movieId) => {
    const searchedMovie = movies.find((movie) => movie.id === movieId);

    if (checkIfMovieIsInFav(movieId)) {
      setFavMovies([...new Set([...favMovies])]);
    } else {
      setFavMovies([...new Set([...favMovies, searchedMovie])]);
    }
  };

  const removeFromFav = (movieId) => {
    const filteredMovies = favMovies.filter((movie) => movie.id !== movieId);
    setFavMovies([...filteredMovies]);
  };

  const handleSearchInputChange = (e) => {
    setSearchMovieInputValue(e.target.value);
    e.target.value === "" ? getMovies() : handleSearchMovie();
  };

  const handleSearchMovie = () => {
    const query = searchMovieInputValue;

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`
      )
      .then((res) => setMovies(res.data.results));
  };

  const goToNextPage = () => {
    let nextPage = currentPage + 1;

    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${nextPage}`
      )
      .then((res) => setMovies(res.data.results));

    setCurrentPage(nextPage);
  };

  const goToPreviousPage = () => {
    let prevPage = currentPage === 1 ? 1 : currentPage - 1;

    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${prevPage}`
      )
      .then((res) => setMovies(res.data.results));

    setCurrentPage(prevPage);
  };

  const getSimilarMovies = (movieId) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      )
      .then((res) => {
        setSimilarMovies(res.data.results);
      });
  };

  const getCastOfMovie = (movieId) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=credits`
      )
      .then((res) => {
        setMovieCast(res.data.credits.cast);
      });
  };

  const getReviews = (movieId) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((res) => {
        console.log(res.data.results);
        setReviews(res.data.results);
      });
  };

  return (
    <RootContext.Provider
      value={{
        movies,
        favMovies,
        searchMovieInputValue,
        currentPage,
        similarMovies,
        movieCast,
        reviews,

        addToFav,
        removeFromFav,
        handleSearchInputChange,
        handleSearchMovie,
        goToNextPage,
        goToPreviousPage,
        getSimilarMovies,
        getCastOfMovie,
        checkIfMovieIsInFav,
        getReviews,
      }}
    >
      <Router />
    </RootContext.Provider>
  );
};

export default App;
