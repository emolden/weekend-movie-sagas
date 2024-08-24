import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './MovieList.css';

function MovieList() {
  
  const history = useHistory();
  const dispatch = useDispatch();

  //movies is an array of objects
  // each object contains the id, title, poster, and description of a single movie
  const movies = useSelector(store => store.movies);

//fetches all movies on pageload
  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);
  
  // onClick function goes here
  const handleClickedImg = (id) => {
    // console.log ('movie id is: ', id);
    // payload: movie id
   // dispatch 'GET_MOVIE_DETAILS' sends the clicked movie id to the store
   dispatch({
    type: 'GET_MOVIE_DETAILS',
    payload: id
   })
  //sends the user to the details page after a specific movie is clicked
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
