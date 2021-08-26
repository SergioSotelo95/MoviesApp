import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetail } from "../../actions/index";
import {
  useTheme,
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import "./Movie.css";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "rgba(0,0,0,0.5)",
    margin: "20px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "1.3rem",
    color: "#fff",
  },
  cover: {
    width: 500,
    height: 650,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 300,
//     background: "rgba(0,0,0,0.5)",
//     margin: "20px",
//   },
//   media: {
//     height: 445,
//     width: 300,
//   },
//   title: {
//     fontFamily: "Nunito",
//     fontWeight: "bold",
//     fontSize: "1.3rem",
//     color: "#fff",
//   },
//   desc: {
//     fontFamily: "Nunito",
//     fontSize: "1.1rem",
//     color: "#ddd",
//   },
// });

export default function Movie(props) {
  const idMovie = props.match.params.id;

  const dispatch = useDispatch();
  const movieDetail = useSelector((state) => state.movieDetail);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(getMovieDetail(idMovie));
  }, [dispatch, idMovie]);

  const theme = useTheme();

  const classes = useStyles();
  //     return (
  //         <div className="movie-detail">
  //         {
  //           loading ? <h2>Cargando</h2> :
  //           <div className="title">
  //             <h2>{movieDetail.Title}</h2>
  //             <h4>{movieDetail.Year}</h4>
  //             <h4>{movieDetail.Plot}</h4>
  //             <h4>{movieDetail.Metascore}</h4>
  //             <h4>{movieDetail.Genre}</h4>
  //             <h4>{movieDetail.Rated}</h4>
  //             <h4>{movieDetail.Runtime}</h4>
  //             <h4>{movieDetail.Awards}</h4>
  //             <img src={movieDetail.Poster} alt="Imágen no encontrada" />
  //           </div>
 

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        title={movieDetail.Title}
        image={movieDetail.Poster}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component='h5' variant='h5'>
            Nombre: {movieDetail.Title}
          </Typography>
          <Typography component='h5' variant='h5'>
            Año: {movieDetail.Year}
          </Typography>
          <Typography component='h5' variant='h5'>
            Puntuación: {movieDetail.Metascore}
          </Typography>
          <Typography component='h5' variant='h5'>
            Género: {movieDetail.Genre}
          </Typography>
          <Typography component='h5' variant='h5'>
            Sinopsis: {movieDetail.Plot}
          </Typography>
          <Typography component='h5' variant='h5'>
            Premios: {movieDetail.Awards}
          </Typography>
          <Typography component='h5' variant='h5'>
            Duración: {movieDetail.Runtime}
          </Typography>
          <Typography component='h5' variant='h5'>
            Elenco: {movieDetail.Actors}
          </Typography>
          <Typography component='h5' variant='h5'>
            Director: {movieDetail.Director}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label='previous'>
            {theme.direction === "rtl"}
          </IconButton>
          <IconButton aria-label='play/pause'></IconButton>
          <IconButton aria-label='next'>{theme.direction === "rtl"}</IconButton>
        </div>
      </div>
    </Card>
  );
}
