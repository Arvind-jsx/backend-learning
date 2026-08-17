import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const MoviesPage = () => {
  const [Data, setData] = useState([]);
  const [SearchMovies, setSearchMovies] = useState("");
  const Navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/movies");
        const res = await response.json();
        setData(res);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchData();
  }, []);

  const SearchMovie = (movie) => {
    return movie.title.toLowerCase().includes(SearchMovies.toLowerCase());
  };


  return (
    <>
      <div className="movies-page">
        <input
          type="text"
          placeholder="Search movies..."
          onChange={(e) => setSearchMovies(e.target.value)}
        />
        <div className="movies-list">
          {Data ? (
            Data.filter(SearchMovie).map((movie) => (
              <div key={movie.id} className="movie-card" onClick={() => Navigate(`/movies/${movie.id}`)}>
                <img src={movie.poster} alt={movie.title} />
                <h3>{movie.title}</h3>
                <p>Rating: {movie.rating}</p>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MoviesPage;
