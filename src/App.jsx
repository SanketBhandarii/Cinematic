import { useEffect, useState } from 'react';
import Movie from './components/Movie';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('https://dummyapi.online/api/movies');
      const data = await response.json();

      // Map movies to include placeholder images with titles
      const moviesWithPlaceholders = data.slice(0, 15).map(movie => {
        const placeholderImage = `https://via.placeholder.com/300x450/14043/FFFFFF?text=${encodeURIComponent(movie.movie)}`; // Custom color placeholder
        return { ...movie, image: placeholderImage };
      });

      setMovies(moviesWithPlaceholders);
    };

    fetchMovies();
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-5xl font-extrabold mb-10 text-center text-gradient">Cinematic Universe</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {movies.map((movie) => (
          <Movie 
            key={movie.id} 
            title={movie.movie} 
            rating={movie.rating} 
            poster={movie.image} // Use the placeholder image with title
            imdbUrl={movie.imdb_url} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
