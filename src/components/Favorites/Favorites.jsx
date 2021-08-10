import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMovieFavorite, getMovieFavorite } from "../../actions/index";
import { Link } from 'react-router-dom';
import './Favorites.css';
import { useEffect } from "react";

export default function ConnectedList () {

    const dispatch = useDispatch();
    const movies = useSelector(state => state.moviesFavourites);
    

    useEffect(() => {
      dispatch(getMovieFavorite());
    }, [dispatch])

    return (
      <div>
        <h2>Películas Favoritas</h2>
        <div>
          { movies.length ? 
            movies?.map(movie => (
              <div key={movie.imdbID}>
                <img src={movie.Poster} alt="Imágen no encontrada" />
                <Link to={`/movie/${movie.imdbID}`}>
                  <span>{movie.Title}</span>
                </Link>
                <button onClick={() => dispatch(removeMovieFavorite(movie.imdbID))}>X</button>
              </div>
            ))
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
