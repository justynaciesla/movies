// export const getFavMoviesFromLocalStorage = () => {
//   let localStorageFavMovies;

//   if (localStorage.getItem("favMovies")) {
//     localStorageFavMovies = JSON.parse(localStorage.getItem("favMovies"));
//   } else {
//     localStorageFavMovies = [];
//   }

//   return localStorageFavMovies;
// };

export const getFavMoviesFromLocalStorage = () =>
  localStorage.getItem("favMovies")
    ? JSON.parse(localStorage.getItem("favMovies"))
    : [];
