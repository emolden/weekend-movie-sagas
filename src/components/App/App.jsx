import { Route, HashRouter as Router } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';
// import './App.css';

function App() {
  return (
    <div className="App">
      <h1 class="text-3xl text-center font-bold underline bg-blue-900 text-white max-h-30 py-8">The Movies Saga!</h1>
      <Router> 
        {/* MovieList page has all movie titles with their poster */}       
        <Route path="/" exact>
          <MovieList />
        </Route>
        {/* MovieDetails page has the title, poster, description, and genres for one selected movie */}
        <Route path='/details' exact>
          <MovieDetails />
        </Route>

        {/* Add Movie page */}
        
      </Router>
    </div>
  );
}

export default App;
