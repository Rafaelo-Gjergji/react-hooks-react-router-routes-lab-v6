import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then(resp => resp.json())
      .then(movies => setMovies(movies));
  }, []);

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar></NavBar>
      </header>
      <main>
        {/* Info goes here! */}
        <h1>Home Page</h1>
        {movies.map(movie => <MovieCard key={movie.id} title={movie.title} id={movie.id}></MovieCard>)}
      </main>
    </>
  );
};

export default Home;
