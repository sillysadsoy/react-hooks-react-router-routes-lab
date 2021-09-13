import React from "react";
import { actors } from "../data";

function Actors() {

  const actorList = actors.map(actor => {
    return (
      <div key={actor.name}>
        <p>{actor.name}</p>
        <ul>
          {actor.movies.map(movie => <li key={movie}>{movie}</li>)}
        </ul>
      </div>
    )
  })

  return (
    <>
      <h1>Actors Page</h1>
      {actorList}
    </>
  )
}

export default Actors;
