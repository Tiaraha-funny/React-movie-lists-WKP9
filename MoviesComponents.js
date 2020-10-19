import React, {useEffect, useState} from "react";
import "./index.css"

function MoviesComponents() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch("https://ghibliapi.herokuapp.com/films");
      const result = await response.json();
      console.log(result);
      setMovie(result);
    }
    fetchMovies();
  }, []);

  const sortedMovies = movie.sort((a, b) => b.rt_score - a.rt_score)

  return (
    <section className="main-container">
     <div style={{fontSize: "40px", color: "green"}}> {(movie.length === 0) ? <h3>Loading...</h3> : ``}</div>
      {sortedMovies.map((movie) => (
        <article key={movie.id} className="articles">
          <header className="main-headings">
            <h2>
              {movie.title}</h2>
            <p>Release on: <b>{movie.release_date}</b></p>
            <p>Score: <b>{movie.rt_score}</b></p>
          </header>
          
      <p>{movie.description}</p>
      <div className="produced">
        <p>{movie.director}</p>
        <p>{movie.producer}</p>
      </div>
      </article>
      )
      )}
    </section>
  );
}

export default MoviesComponents;
