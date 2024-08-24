import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './MovieList.css';

function MovieList() {
  
  const history = useHistory();
  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);
  
  // onClick function goes here
  const handleClickedImg = (id) => {
    console.log ('movie id is: ', id);
   // dispatch 'GET_MOVIE_DETAILS'
   dispatch({
    type: 'GET_MOVIE_DETAILS',
    payload: id
   })
  // payload: movie id
  history.push('/details');
  }
 

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map(movie => {
          return (
            <div data-testid='movieItem' key={movie.id}>
              <h3>{movie.title}</h3>
              <img 
              data-testid="toDetails" 
              onClick= {function(){handleClickedImg(movie.id)}}
              src={movie.poster} 
              alt={movie.title}/>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
