import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMovieFavorite, getMovieFavorite } from "../../actions/index";
import { Link } from 'react-router-dom';
import './Favorites.css';
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button } from '@material-ui/core';

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

export default function ConnectedList () {

    const dispatch = useDispatch();
    const movies = useSelector(state => state.moviesFavourites);

    useEffect(() => {
      dispatch(getMovieFavorite());
    }, [dispatch])

    const classes = useStyles()

    return (
      <div>
        <h2>Películas Favoritas</h2>
        <div>
          { movies ? (
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
                <Button onClick={() => dispatch(removeMovieFavorite(movie.imdbID))}>Quitar de Favoritos</Button>
              </CardContent>
            </Card>)))
            : <h2>Seleccione una película como favorita para verla aquí.</h2>
          }
        </div>
      </div>
    );


}

// export class ConnectedList extends Component {

//   render() {
//     return (
//       <div>
//         <h2>Películas Favoritas</h2>
//         <ul>
//           {
//             this.props.movies && this.props.movies.map(movie => (
//               <div>
//                 <Link to={`/movie/${movie.imdbID}`}>
//                   <span>{movie.Title}</span>
//                 </Link>
//                 <button onClick={() => this.props.removeMovieFavorite(movie.imdbID)}>X</button>
//               </div>
//             ))
//           }
//         </ul>
//       </div>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//     movies: state.moviesFavourites
//   };
// }

// // Action Creator --> removeMovieFavorite
// //
// // Favourite --> Agregando una prop "asd" --> asd("tt01100")
// //   --> store.dispatch(removeMovieFavorite("tt01100"))

// function mapDispatchToProps(dispatch) {
//   return {
//     removeMovieFavorite: idMovie => dispatch(removeMovieFavorite(idMovie))
//   };
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ConnectedList);
