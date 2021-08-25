import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

export default function Movie(props) {
  
  const idMovie = props.match.params.id
  
  const dispatch = useDispatch()
  const movieDetail = useSelector(state => state.movieDetail)
  const loading = useSelector(state => state.loading)

  

  useEffect(() => {
   dispatch(getMovieDetail(idMovie))
    },[dispatch, idMovie])
   

  
      return (
          <div className="movie-detail">
          {
            loading ? <h2>Cargando</h2> :
            <div>
              <h2>{movieDetail.Title}</h2>
              <h4>{movieDetail.Year}</h4>
              <h4>{movieDetail.Plot}</h4>
              <h4>{movieDetail.Metascore}</h4>
              <h4>{movieDetail.Genre}</h4>
              <h4>{movieDetail.Rated}</h4>
              <h4>{movieDetail.Runtime}</h4>
              <h4>{movieDetail.Awards}</h4>
              <img src={movieDetail.Poster} alt="Imágen no encontrada" />
            </div>
          }
          </div>
      );
  }
