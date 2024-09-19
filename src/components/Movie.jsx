const Movie = ({ title, rating, poster, imdbUrl }) => (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:shadow-xl hover:-translate-y-2 w-64">
      <img className="w-full h-72 object-cover" src={poster} alt={title} />
      <div className="px-4 py-4">
        <div className="font-bold text-xl mb-1">{title}</div>
        <p className="text-gray-400 text-base">Rating: {rating}</p>
        <a 
          href={imdbUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-400 hover:underline"
        >
          View on IMDb
        </a>
      </div>
    </div>
  );
  
  export default Movie;
  