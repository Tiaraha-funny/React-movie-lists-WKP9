import React from "react";

export default function Moving({movie, handleDeleteClick, handleUnlikeClick, handlelikeClick}) {

  return (
    <div>
      <button
        className="btn like"
        id={movie.id}
        onClick={() => handlelikeClick(movie.id)}
      >
        Like
      </button>
      <button
        className="btn unlike"
        id={movie.id}
        onClick={() => handleUnlikeClick(movie.id)}
      >
        Unlike
      </button>
      <button
        className="btn delete"
        id={movie.id}
        onClick={() => handleDeleteClick(movie.id)}
      >
        Delete
      </button>
    </div>
  );
}
