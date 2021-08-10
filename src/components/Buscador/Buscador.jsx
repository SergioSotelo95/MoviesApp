import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendTitle } from "../../actions/index.js";
import ShowMovies from "../ShowMovies/ShowMovies.jsx";
import "./Buscador.css";

export default function Buscador() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  // useEffect(() => {
  //   dispatch(getMovies(title))
  //   // eslint-disable-next-line
  // }, [dispatch])

  const handleChange = (e) => {
    setTitle(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(sendTitle(title));
  };

  
 
  return (
    <div>
          <h2>Buscador</h2>
          <form className="form-container" onSubmit={handleSubmit}>
            <div>
              <label className="label" htmlFor="title">
                Película:{" "}
              </label>
              <input
                type="text"
                id="title"
                autoComplete="off"
                value={title}
                onChange={handleChange}
              />
            </div>
            <button type="submit">BUSCAR</button>
          </form>
         <ShowMovies/>
    </div>
  );
}

// export class Buscador extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "",
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(e) {
//     this.setState({ title: e.target.value });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     this.props.getMovies(this.state.title);
//   }

//   render() {
//     const { title } = this.state;
//     return (
//       <div>
//         <h2>Buscador</h2>
//         <form className="form-container" onSubmit={this.handleSubmit}>
//           <div>
//             <label className="label" htmlFor="title">
//               Película:{" "}
//             </label>
//             <input
//               type="text"
//               id="title"
//               autoComplete="off"
//               value={title}
//               onChange={this.handleChange}
//             />
//           </div>
//           <button type="submit">BUSCAR</button>
//         </form>
//         <ul>
//           {this.props.movies &&
//             this.props.movies.map((movie) => (
//               <div key={movie.imdbID}>
//                 <Link to={`/movie/${movie.imdbID}`}>
//                   <span>{movie.Title}</span>
//                 </Link>
//                 <button onClick={() => this.props.addMovieFavorite(movie)}>
//                   FAV
//                 </button>
//               </div>
//             ))}
//         </ul>
//       </div>
//     );
//   }
// }

// Prop
//
// {
//   movies: store.getState().moviesLoaded,
//   addMovieFavorite: (movie) => store.dispatch({type: "ADD_MOVIE_FAVORITE", payload: movie),
//   getMovies: (title) => store.dispatch({type: "GET_MOVIES", payload: objServer})
// }

// function mapStateToProps(state) {
//   return {
//     movies: state.moviesLoaded,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     addMovieFavorite: (movie) => dispatch(addMovieFavorite(movie)),
//     getMovies: (title) => dispatch(getMovies(title)),
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
