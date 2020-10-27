import React, { useEffect, useState } from "react";
import InputFilter from "./InputFilter";
import Moving from "./moving";
import "./index.css";

function MoviesComponents() {
  const [movie, setMovie] = useState([]);
  const [like, setLike] = useState(0);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch("https://ghibliapi.herokuapp.com/films");
      const result = await response.json();
      setMovie(result);
    }
    fetchMovies();
  }, []);

  const handlelikeClick = (id) => {
    console.log("I like it");
    const findId = movie.find((like) => like.id === id);
    const increase = findId.rt_score++;
    setLike(increase);
  };

  const handleUnlikeClick = (id) => {
    console.log("I don't like it");
    const findId = movie.find((like) => like.id === id);
    const decrease = findId.rt_score--;
    setLike(decrease);
  };

  const handleDeleteClick = (id) => {
    console.log("I need to delete this");
    const filterIdToKeep = movie.filter((like) => like.id !== id);
    console.log(filterIdToKeep);
    setMovie(filterIdToKeep);
  };

  const sortedMovies = movie.sort((a, b) => b.rt_score - a.rt_score);

  return (
    <section className="main-container">
      <div style={{ fontSize: "40px", color: "green" }}>
        {" "}
        {movie.length === 0 ? <h3>Loading...</h3> : ``}
      </div>
      
      <InputFilter movie={movie}/>

      {sortedMovies.map((movie) => (
        <article key={movie.id} className="articles">
          <header className="main-headings">
            <h2>{movie.title}</h2>
            <p>
              Release on: <b>{movie.release_date}</b>
            </p>
            <p>
              Score: <b>{movie.rt_score}</b>
            </p>
          </header>

          <p>{movie.description}</p>
          <div className="produced">
            <p>
              <b style={{ color: "pink" }}>Director:</b> {movie.director}
            </p>
            <p>
              <b style={{ color: "pink" }}>Producer:</b> {movie.producer}
            </p>
          </div>
          <div>
            <Moving
              handleDeleteClick={handleDeleteClick}
              handlelikeClick={handlelikeClick}
              handleUnlikeClick={handleUnlikeClick}
              movie={movie}
            />
          </div>
          <b>Your score is changing: {movie.rt_score}</b>
        </article>
      ))}
    </section>
  );
}

export default MoviesComponents;
