import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addMovieFavorite, getMovies } from "../../actions";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button, Grid, makeStyles } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import "./ShowMovies.css";
import swal from "sweetalert";

// import { Collapse } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    background: "rgba(0,0,0,0.5)",
    margin: "40px",
  },
  media: {
    height: 445,
    width: 300,
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "1.3rem",
    color: "#fff",
  },
  desc: {
    fontFamily: "Nunito",
    fontSize: "1.1rem",
    color: "#ddd",
  },
  responsive: {
    display: "flex",
    justifyContent: "center",
    marginBottom:"3rem",
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
      swal({
        title: "Favoritos",
        text: "Esa película ya fue agregada a favoritos",
        icon: "warning",
      });
    } else {
      swal({
        title: "Favoritos",
        text: "Película agregada a favoritos",
        icon: "success",
      });
      dispatch(addMovieFavorite(movie));
    }
  };

  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      {movies.length ? (
        movies.map((movie) => (
          <Grid item xs={12} md={6} lg={3} className={classes.responsive}>
            <Card className={classes.root}>
              <Link to={`/movie/${movie.imdbID}`}>
                <CardMedia
                  className={classes.media}
                  image={movie.Poster}
                  title={movie.Title}
                />
              </Link>
              <CardContent>
                <div id='title'>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='h1'
                    className={classes.title}
                  >
                    {movie.Title}
                  </Typography>
                </div>

                <Typography
                  variant='body2'
                  color='textSecondary'
                  component='p'
                  className={classes.desc}
                >
                  {movie.Year}
                </Typography>

                <Button
                  variant='contained'
                  id='buttonFav'
                  onClick={() => handlerFavorites(movie)}
                  className={classes.desc}
                >
                  Favoritos
                  <StarIcon color='primary' />
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))
      ) : (
        <h3> Por favor, busque una película. </h3>
      )}
    </Grid>
  );
};

export default ShowMovies;
