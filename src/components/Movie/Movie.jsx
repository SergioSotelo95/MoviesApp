import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetail } from "../../actions/index";
import {
  Card,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import "./Movie.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "rgba(0,0,0,0.5)",
    //background: "hotpink",
    marginTop: "30px",
    margin: "auto",
    width: "80%",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "3.5rem",
    color: "#fff",
  },
  // cover: {
  //   //width: 800,
  //    height: 750,
  //   //height: "auto",
  //   margin:"1.5rem",
  //   padding:"1.5rem",
  //   //boxSizing:"content-box"
  // },

  info: {
    lineHeight: "4rem",
  },
  img: {
    width: 700,
    height: 750,
    margin: "1rem",
    padding: "1rem",
  },
}));

export default function Movie(props) {
  const idMovie = props.match.params.id;

  const dispatch = useDispatch();
  const movieDetail = useSelector((state) => state.movieDetail);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(getMovieDetail(idMovie));
  }, [dispatch, idMovie]);

  const classes = useStyles();

  function detail() {
    return (
      <Card className={classes.root}>
        {/* <CardMedia
        className={classes.cover}
        title={movieDetail.Title}
        image={movieDetail.Poster}
      /> */}

        <img
          src={movieDetail.Poster}
          alt={movieDetail.Title}
          className={classes.img}
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography className={classes.info} component='h5' variant='h5'>
              <b>Nombre:</b> {movieDetail.Title}
            </Typography>
            <Typography className={classes.info} component='h5' variant='h5'>
              <b>Año:</b> {movieDetail.Year}
            </Typography>
            <Typography className={classes.info} component='h5' variant='h5'>
              <b>Puntuación:</b> {movieDetail.Metascore}
            </Typography>
            <Typography className={classes.info} component='h5' variant='h5'>
              <b>Género:</b> {movieDetail.Genre}
            </Typography>
            <Typography className={classes.info} component='h5' variant='h5'>
              <b>Sinopsis:</b> {movieDetail.Plot}
            </Typography>
            <Typography className={classes.info} component='h5' variant='h5'>
              <b>Premios:</b> {movieDetail.Awards}
            </Typography>
            <Typography className={classes.info} component='h5' variant='h5'>
              <b>Duración:</b> {movieDetail.Runtime}
            </Typography>
            <Typography className={classes.info} component='h5' variant='h5'>
              <b>Elenco:</b> {movieDetail.Actors}
            </Typography>
            <Typography className={classes.info} component='h5' variant='h5'>
              <b>Director:</b> {movieDetail.Director}
            </Typography>
            
          </CardContent>
        </div>
      </Card>
    );
  }

  return (
    <div>
      {loading ? 
      <div id="spinnerBox">
        <i className='fas fa-spinner fa-spin spinner' id="spinner"></i>
      </div> : detail()}
      
    </div>
  );
}
