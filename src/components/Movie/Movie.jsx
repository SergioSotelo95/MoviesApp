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
    //background: "hotpink",
    marginTop: "80px",
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
  cover: {
    width: "100%",
    // height: 800,
    //height: "auto",
    //margin:"1.5rem",
    //padding:"1.5rem",
    boxSizing:"content-box"
  },
 
  info:{
    lineHeight:"4rem",
    
  },
  // img:{
  //   width: "100%",
  //   height: "100%",
  // }
}));

export default function Movie(props) {
  const idMovie = props.match.params.id;

  const dispatch = useDispatch();
  const movieDetail = useSelector((state) => state.movieDetail);

  useEffect(() => {
    dispatch(getMovieDetail(idMovie));
  }, [dispatch, idMovie]);

  const theme = useTheme();

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {/* <div className={classes.img}> */}
        <CardMedia
        className={classes.cover}
        title={movieDetail.Title}
        image={movieDetail.Poster}
      />
      {/* </div> */}
      
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography className={classes.info} component='h5' variant='h5'>
            <b>Nombre:</b> {movieDetail.Title}
          </Typography>
          <Typography className={classes.info} component='h5' variant='h5'>
            <b>Año:</b> {movieDetail.Year}
          </Typography>
          <Typography className={classes.info}component='h5' variant='h5'>
            <b>Puntuación:</b> {movieDetail.Metascore}
          </Typography>
          <Typography className={classes.info}component='h5' variant='h5'>
            <b>Género:</b> {movieDetail.Genre}
          </Typography>
          <Typography className={classes.info}component='h5' variant='h5'>
            <b>Sinopsis:</b> {movieDetail.Plot}
          </Typography>
          <Typography className={classes.info}component='h5' variant='h5'>
            <b>Premios:</b> {movieDetail.Awards}
          </Typography>
          <Typography className={classes.info}component='h5' variant='h5'>
            <b>Duración:</b> {movieDetail.Runtime}
          </Typography>
          <Typography className={classes.info}component='h5' variant='h5'>
            <b>Elenco:</b> {movieDetail.Actors}
          </Typography>
          <Typography className={classes.info}component='h5' variant='h5'>
            <b>Director:</b> {movieDetail.Director}
          </Typography>
        </CardContent>
        
      </div>
    </Card>
  );
}
