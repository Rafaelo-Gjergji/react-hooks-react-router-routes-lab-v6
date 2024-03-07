import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function Movie() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((resp) => resp.json())
      .then((movies) => setMovies(movies));
  }, []);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:4000/movies/${id}`)
        .then((resp) => resp.json())
        .then((movie) => setSelectedMovie(movie));
    }
  }, [id]);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {selectedMovie ? (
          <div key={selectedMovie.id}>
            <h1>{selectedMovie.title}</h1>
            <p>Watch time: {selectedMovie.time} minutes</p>
            <p>Genres: {selectedMovie.genres.join(", ")}</p>
          </div>
        ) : (
          <div>
            <h1>Movies Page</h1>
            {movies.map((movie) => (
              <div key={movie.id}>
                {/* <h2>{movie.title}</h2> */}
                <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                <p>Watch time: {movie.time} minutes</p>
                <p>Genres: {movie.genres.join(", ")}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}

export default Movie;

// import { useEffect, useState } from "react";
// import NavBar from "../components/NavBar";
// import { useParams } from "react-router-dom";

// function Movie() {

//   const { id } = useParams();

//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:4000/movies")
//       .then(resp => resp.json())
//       .then(movies => setMovies(movies));
//   }, []);

//   return (
//     <>
//       <header>
//         {/* What component should go here? */}
//         <NavBar></NavBar>
//       </header>
//       <main>
//         {/* Movie info here! */}
//         {movies.map(movie =>
//         <div key={movie.id}>
//           <h1>
//             {movie.title}
//           </h1>
//           <p>
//             watch time: {movie.time} minutes
//           </p>
//           {movie.genres.map(genre => <span>{genre}</span>)}
//         </div>
//         )}
//       </main>
//     </>
//   );
// };

// export default Movie;
