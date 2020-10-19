import React from "react";
import MoviesComponents from "./MoviesComponents.js";

function MovieListApp() {
  return (
    <section>
      <header className="heading">
        <h1>
          <svg
            style={{ marginRight: "20px", marginTop: "20px" }}
            className="w-6 h-6"
            fill="white"
            width="30px"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
          Studio Ghibli Movies
          <svg
            style={{ marginLeft: "20px", marginTop: "20px" }}
            className="w-6 h-6"
            fill="white"
            width="30px"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
        </h1>
        <p>Ranked from the best to worst</p>
      </header>
      <MoviesComponents />
    </section>
  );
}

export default MovieListApp;
