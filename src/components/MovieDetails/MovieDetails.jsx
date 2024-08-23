

function MovieDetails () {
    //useSelector to get movieDetails reducer info


    return (
        
        <div data-testid="movieDetails">

            {/* render specific movie details on the page
            use .map to get all genres to display */}
            <button data-testid="toList">Back to Movie List</button>
        </div>
    )

}

export default MovieDetails;