import React from "react";
import like from "./like.svg";
import deleted from "./deleted.svg";
import dislike from "./dislike.svg";
import "./index.css";

export default function Moving({movie, handleDeleteClick, handleUnlikeClick, handlelikeClick}) {

  return (
    <div className="btns">
      <button
        className="btn like"
        id={movie.id}
        onClick={() => handlelikeClick(movie.id)}
      >
        <img src={like} />
        Like
      </button>
      <button
        className="btn unlike"
        id={movie.id}
        onClick={() => handleUnlikeClick(movie.id)}
      >
        <img src={dislike} />
        Unlike
      </button>
      <button
        className="btn delete"
        id={movie.id}
        onClick={() => handleDeleteClick(movie.id)}
      >
        <img src={deleted}/>
        Delete
      </button>
    </div>
  );
}
