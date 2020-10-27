import React from "react";

function InputFilter( { movie } ) {
  const filterMovie = movie.filter((movie) =>
    movie.title.toLowerCase().includes(movie.toLowerCase())
  );
  return (
    <form>
      <label>
        Search movie:
        <input
          type="text"
          onChange={filterMovie}
          name="movie"
          placeholder="Search your movie you like"
        />
      </label>
    </form>
  );
}

export default InputFilter;
