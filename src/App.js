import React, {useState,useEffect} from 'react';
import './App.css';
import SearchIcon from "./seach.svg"
import MovieCard from './MovieCard';




// 5db980c5  api key

const API_URL = 'http://www.omdbapi.com/?apikey=5db980c5';

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    
    setMovies(data.Search);
    // console.log(data);

  }


  useEffect(()=>{
    searchMovies('Spiderman'); 

  }, [])

  return (
    <div className="app">
      <h1>MAMovies</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};
export default App;
