import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addMovieFavorite, getMovies } from "../../actions";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button } from '@material-ui/core';
// import { Collapse } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    background: "rgba(0,0,0,0.5)",
    margin: "20px",
  },
  media: {
    height: 445,
    width:300,
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#fff",
  },
  desc: {
    fontFamily: "Nunito",
    fontSize: "1.1rem",
    color: "#ddd",
  },
});

const ShowMovies = () => {
  const movies = useSelector((state) => state.moviesLoaded);
  const favorites = useSelector((state) => state.moviesFavourites);
  const title = useSelector((state) => state.movieTitle);
  const dispatch = useDispatch();

  useEffect(() => {
    if (title !== "") {
      dispatch(getMovies(title));
    }
  }, [dispatch, title]);

  const handlerFavorites = (movie) => {
    if (favorites.find((e) => e.imdbID === movie.imdbID)) {
      alert("Esa película ya fue agregada a favoritos");
    } else {
      dispatch(addMovieFavorite(movie));
    }
  };

  const classes = useStyles()
  return (
    <div>
      <ul>
        {movies ? (
          movies.map((movie) => (
            <Card className={classes.root}>
              <Link to={`/movie/${movie.imdbID}`}>
                <CardMedia
                  className={classes.media}
                  image={movie.Poster}
                  title={movie.Title}
                />
              </Link>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h1"
                  className={classes.title}
                >
                  {movie.Title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.desc}
                >
                  {movie.Year}
                </Typography>
                <Button onClick={() => handlerFavorites(movie)}>FAV</Button>
              </CardContent>
            </Card>

            // <div key={movie.imdbID}>
            //   <img src={movie.Poster} alt="Imágen no encontrada" />
            //   <Link to={`/movie/${movie.imdbID}`}>
            //     <span>{movie.Title}</span>
            //   </Link>
            //   <button onClick={() => handlerFavorites(movie)}>FAV</button>
            // </div>
          ))
        ) : (
          <h3> Por favor, busque una película. </h3>
        )}
      </ul>
    </div>
  );
};

export default ShowMovies;
