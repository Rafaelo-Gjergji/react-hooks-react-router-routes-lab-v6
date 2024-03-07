import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((resp) => resp.json())
      .then((movies) => setDirectors(movies));
  }, []);

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar></NavBar>
      </header>
      <main>
        {/* Director info here! */}
        <h1>Directors Page</h1>
        {directors.map((director) => (
          <article key={director.id}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie) => (
                <li>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Directors;
