import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { act } from "react-dom/test-utils";

function Actors() {

  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then(resp => resp.json())
      .then(actors => setActors(actors));
  }, []);

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar></NavBar>
      </header>
      <main>
        {/* Actor info here! */}
        <h1>Actors Page</h1>
        {actors.map(actor => 
        <article key={actor.id} >
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map(movie => <li>{movie}</li>)}
          </ul>
        </article>)}
      </main>
    </>
  );
};

export default Actors;
