import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import './MovieList.css';

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
   
  //sends the user to the details page after a specific movie is clicked
  history.push(`/details/${id}`);
  }
 

  return (
    <main>
      <h1 class='text-7xl mt-16 ml-10'>MovieList</h1>
      <h4 class='ml-10 mt-3'>Click on a movie poster to see details!</h4>
      <section class='flex flex-row flex-wrap mx-10 mb-10 gap-16 border-black'>
        {movies.map(movie => {
          return (
            <div data-testid='movieItem' class='w-72 h-96 p-10' key={movie.id}>
              <h3 class='text-center text-1xl font-semibold tracking-wider flex flex-wrap justify-center'>{movie.title}</h3>
              <img 
              data-testid="toDetails" 
              onClick= {function(){handleClickedImg(movie.id)}}
              src={movie.poster} 
              alt={movie.title}
              class='w-full h-full cursor-pointer'/>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
