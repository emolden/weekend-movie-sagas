import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './MovieDetails.css';

function MovieDetails () {

    const history = useHistory();
    //useSelector to get movieDetails reducer info
    const singleMovieDetails = useSelector(store => store.singleMovieDetails);

    const backToMovieList = () => {
        history.push('/');
    }

    const waitTillMovieDetailsReady =() => {
        return(
        <>
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
            </>
        )
    }

    return (
        
        <div data-testid="movieDetails">
            <header>
               <h1>Movie Details</h1> 
            </header>
            {Object.keys(singleMovieDetails).length > 0 ? waitTillMovieDetailsReady() : ''}
            <button data-testid="toList" onClick={backToMovieList}>Back to Movie List</button>
        </div>
    )

}

export default MovieDetails;