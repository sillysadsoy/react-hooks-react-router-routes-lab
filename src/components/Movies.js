import React from "react";
import { movies } from "../data";

function Movies() {
  
  const moveList = movies.map(movie => {
    return(
      <div key={movie.title}>
        <p>{movie.title}</p>
        <p>{movie.time}</p>
        <ul>
          {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
        </ul>
      </div>
    )}
  );

  return (
    <>
      <h1>Movies Page</h1>
      {moveList}
    </>
  )
}

export default Movies;
