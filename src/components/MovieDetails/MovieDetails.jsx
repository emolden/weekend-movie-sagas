import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieDetails.css';

function MovieDetails () {
    //useSelector to get movieDetails reducer info
    const singleMovieDetails = useSelector(store => store.singleMovieDetails);


    return (
        
        <div data-testid="movieDetails">
            <header>
               <h1>Movie Details</h1> 
            </header>
            {/* render specific movie details on the page
            use .map to get all genres to display */}
            <section>
                <div>
                    <h1>{singleMovieDetails.movieTitle}</h1>
                    <img src={singleMovieDetails.poster} />
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

            <button data-testid="toList">Back to Movie List</button>
        </div>
    )

}

export default MovieDetails;