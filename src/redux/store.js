import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery,takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery('FETCH_MOVIES', fetchAllMovies);
  //'GET_MOVIE_DETAILS' yield goes here
  yield takeLatest('GET_MOVIE_DETAILS', getMovieDetails)
}

function* fetchAllMovies() {
  try {
    // console.log('in fetchAllMovies')
    // Get the movies:
    const moviesResponse = yield axios.get('/api/movies');
    // Set the value of the movies reducer:
    yield put({
      type: 'SET_MOVIES',
      payload: moviesResponse.data
    });
  } catch (error) {
    console.log('fetchAllMovies error:', error);
  }
}

//getMovieDetails generator function goes here
function* getMovieDetails (action) {
  try{
    // console.log('in getMovieDetials generator function: ', action.payload)
  // sends axios.get request using id for specific movie as a param
    const movieDetailsResponse = yield axios.get(`/api/details?q=${action.payload}`);
  // put setsMovieDetails reducer with the response
  // console.log('in getMovieDetails the response is: ', movieDetailsResponse.data)
    yield put({
      type: 'SET_SINGLE_MOVIE_DETAILS',
      payload: movieDetailsResponse.data
    });
  } catch(error) {
    console.log('getMovieDetails error: ', error);
  }
}


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  // console.log('in movies reducer the payload is: ', action.payload);
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    default:
      return state;
  }
}

//put movieDetials reducer here
// reorganize data to be nice for the client
// maybe: {title: , img: , description: , genres: []}

const singleMovieDetails = (state = {}, action) => {
  if(action.type === 'SET_SINGLE_MOVIE_DETAILS') {
    //action.payload is an array of objects. The number of objects is equal to the number
    // of genres a given movie has.
    // console.log ('in movieDetials reducer the payload is: ', action.payload);
    // refactor to remove redundant information
    let prettyMovieObject = {
      movieId: action.payload[0].movie_id,
      movieTitle: action.payload[0].title,
      poster: action.payload[0].poster,
      description: action.payload[0].description,
      movieGenres: action.payload.map(genre => {
        return (
          {genre_id: genre.genre_id,
          genre_name: genre.genre_name}
        )
      })
    }
    // console.log(prettyMovieObject);
    return prettyMovieObject;
  }
  else if (action.type === 'RESET_MOVIE_DETAILS') {
    return action.payload;
  }
  return state;
}

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return action.payload;
    default:
      return state;
  }
}

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    singleMovieDetails
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

export default storeInstance;
