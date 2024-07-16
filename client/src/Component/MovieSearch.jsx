import { useState } from "react";
import useFetch from "../Component/api";
import "./styles.css";

export default function MovieSearch() {
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  
  const movies = useFetch(searchTerm);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(query);
  };

  const handleFavorite = (movie) => {
    console.log("Added to favorites:", movie);
  };

  return (
    <div className="MovieSearch">
        <br />
      <form onSubmit={handleSubmit}>
        <input 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search for movies or TV shows"
        />
        <button type="submit">Search</button>
      </form>
      <div className="movies">
        {movies?.map((movie, index) => (
          <div key={index} className="movie-item">
            <img src={movie.Poster} alt={movie.Title} />
            <div className="movie-info">
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <p>{movie.Type}</p>
              <button onClick={() => handleFavorite(movie)}>Add to Favorites</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
