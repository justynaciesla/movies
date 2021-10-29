import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../views/Home";
import FavMovies from "../views/FavMovies";
import SingleMovie from "../components/SingleMovie";
import Navbar from "../components/Navbar";
import { routes } from "../routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.singleMovie} component={SingleMovie} />
        <Route path={routes.favMovies} component={FavMovies} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
