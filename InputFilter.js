import React from "react";

function InputFilter({ handleInputFiltering, filter }) {
  return (
    <form>
      <label>Search movie:</label>
      <input
        type="text"
        onChange={handleInputFiltering}
        value={filter}
        name="movie"
        placeholder="Search your movie you like"
      />
    </form>
  );
}

export default InputFilter;
