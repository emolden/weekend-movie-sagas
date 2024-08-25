import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import './MovieDetails.css';

function MovieDetails () {

    const history = useHistory();
    const dispatch = useDispatch();

    //useSelector to get movieDetails reducer info
    //singleMovieDetials is an object
        //the object contains id, title, poster, desciption, and genres for a specific movie
        // the genres value is an array of objects
            //each object has the genre id and genre name for the specific movie
    const singleMovieDetails = useSelector(store => store.singleMovieDetails);

    //brings the user back to the MoviesList page  and resets 
    // the singleMovieDetails reducer on click
    const backToMovieList = () => {
        history.push('/');
        dispatch({ 
            type: 'RESET_MOVIE_DETAILS',
            payload: {}
        });
    }

    //forces page load to wait till redux-saga has time to fill
    //singleMovieDetails
    const waitTillMovieDetailsReady =() => {
        return(
        <>
            <section class='flex flex-row gap-20'>
                <div class='flex flex-col '>
                    <h1>{singleMovieDetails.movieTitle}</h1>
                    <img class='max-w-20'src={singleMovieDetails.poster} />
                </div>
                <div>
                    <div>
                        {singleMovieDetails.movieGenres.map(genre => {
                            return (
                                <p key={genre.genre_id}>{genre.genre_name}</p>
                            )
                        })}
                    </div>
                    <p>{singleMovieDetails.description}</p>
                </div>
            </section>
            </>
        )
    }

    return (
        
        <div data-testid="movieDetails">
            <header>
               <h1 class='text-2xl'>Movie Details</h1> 
            </header>
            {/* forces page load to wait till redux-saga has time to fill
            singleMovieDetails */}
            {Object.keys(singleMovieDetails).length > 0 ? waitTillMovieDetailsReady() : ''}
            <button data-testid="toList" onClick={backToMovieList}>Back to Movie List</button>
        </div>
    )

}

export default MovieDetails;