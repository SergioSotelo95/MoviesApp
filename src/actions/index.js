import dotenv from "dotenv";
import swal from "sweetalert";
dotenv.config();

const apikey = process.env.REACT_APP_API;

export function addMovieFavorite(payload) {
  // payload --> obj que representa una movie
  
  return { type: "ADD_MOVIE_FAVORITE", payload };
}

export function getMovieFavorite(payload) {
  // payload --> obj que representa una movie
  return { type: "GET_MOVIE_FAVORITE", payload };
}

export function removeMovieFavorite(id) {
  // payload --> id representa una movie
  return { type: "REMOVE_MOVIE_FAVORITE", payload: id };
}

export function sendTitle(title) {
  return { type: "SEND_TITLE", payload: title };
}

export function deleteMovieList() {
  return { type: "DELETE_MOVIE_LIST", payload: [] };
}

export function getMovies(titulo) {
  // buscador --> avengers
  return function (dispatch) {
    return fetch("http://www.omdbapi.com/?apikey=" + apikey + "&s=" + titulo)
      .then((response) => response.json())
      .then((obj) => {
        console.log(`object`, obj);
        if (obj.Response === "True") {
          dispatch({ type: "GET_MOVIES", payload: obj });
        } else {
          swal({
            title: "Error",
            text: "No existen películas con ese título",
            icon: "error",
          });
        }
      });
  };
}

export function getMovieDetail(id) {
  // click movie --> id
   return async function (dispatch) {
    await dispatch({ type: "LOADING" });

    return await fetch("http://www.omdbapi.com/?apikey=" + apikey + "&i=" + id)
      .then((response) => response.json())
      .then((obj) => {
        dispatch({ type: "GET_MOVIE_DETAIL", payload: obj });
      });
  };
 }
