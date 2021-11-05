import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../../routes";
import "./Navbar.css";
import Clapperboard from "../../assets/icons/clapperboard.png";
import RootContext from "../../context";

const Navbar = () => {
  const { searchMovieInputValue, handleSearchInputChange } =
    useContext(RootContext);

  const currentLocation = useLocation();

  const isFavMovies = currentLocation.pathname === "/fav-movies";

  return (
    <div className="navigation__wrapper">
      <nav className="navigation">
        <ul className="nav-ul">
          <li className="nav-list">
            <img alt="img" className="movies" src={Clapperboard} />
          </li>

          <li className="nav-list">
            <Link className="nav-link" to={routes.home}>
              Top Movies
            </Link>
          </li>

          <li className="nav-list">
            <Link className="nav-link" to={routes.favMovies}>
              Fav Movies
            </Link>
          </li>
        </ul>

        {!isFavMovies && (
          <div className="search-wrapper">
            <input
              placeholder="Search a movie... "
              type="text"
              id="searchMovie"
              value={searchMovieInputValue}
              onChange={handleSearchInputChange}
              className="search-input"
              autocomplete="off"
            />
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
