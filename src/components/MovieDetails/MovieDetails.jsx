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
                <div class='flex flex-col justify-center ml-10 w-52 h-80 '>
                    <h1 class='text-center text-1xl font-semibold tracking-wider flex flex-wrap justify-center'>{singleMovieDetails.movieTitle}</h1>
                    <img class='w-max h-full text-center'src={singleMovieDetails.poster} />
                </div>
                <div class= 'max-w-2xl flex justify-center flex-col'>
                    <div class='ml-16 mb-6 flex flex-row gap-5'>
                        {singleMovieDetails.movieGenres.map(genre => {
                            return (
                                <p class ='boarder-solid border-2 rounded-lg p-1 border-blue-900 bg-blue-300' key={genre.genre_id}>{genre.genre_name}</p>
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
               <h1 class='text-7xl py-16 pl-5'>Movie Details</h1> 
            </header>
            {/* forces page load to wait till redux-saga has time to fill
            singleMovieDetails */}
            {Object.keys(singleMovieDetails).length > 0 ? waitTillMovieDetailsReady() : ''}
            <div >
                <button 
                    data-testid="toList" 
                    onClick={backToMovieList}
                    class='mt-10 mb-10 ml-10 p-3 bg-gray-300 rounded-lg border-solid border-2 border-black cursor-pointer'>
                    Back to Movie List
                </button>
            </div>
        </div>
    )

}

export default MovieDetails;