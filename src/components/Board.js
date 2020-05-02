import React, { useState } from "react"; // because babel need this, magic, we accept it
import ScoreCard from "./ScoreCard";
import AddPlayerForm from "./AddPlayerForm";

export default function Board() {
  // manage scores here
  // lifting up state
  const [players, setPlayers] = useState([
    { id: 1, name: "Matias", score: 52 },
    { id: 2, name: "David", score: 5 },
    { id: 3, name: "Wouter", score: 9001 },
  ]);

  const [sortBy, setSortBy] = useState("score");

  const playerArrayCopy = [...players];

  let sortedPlayers;

  if (sortBy === "score") {
    sortedPlayers = playerArrayCopy.sort(function (a, b) {
      return b.score - a.score;
    });
  } else if (sortBy === "name") {
    sortedPlayers = playerArrayCopy.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
  }
  //   console.log("SORTED:", sortedPlayers);

  //   console.log(players);
  function changeScore(id, changeBy) {
    console.log("ID:", id, "CHANGEBY:", changeBy);
    // suggestions:
    // find -> use setPlayer afterwards
    // forEach ?
    // [{4}, {5}, {1}] setPlayers([{4}, {5}, {2}]) -> map
    const updatedPlayers = players.map((player) => {
      console.log(player, id);
      if (player.id === id) {
        // update score
        return {
          id: player.id,
          name: player.name,
          score: player.score + changeBy,
        };
      }

      // we do nothing
      return player;
    });

    console.log(updatedPlayers);
    setPlayers(updatedPlayers);
  }

  function addPlayer(name) {
    console.log("NEW NAME:", name);
    const newPlayer = {
      id: players.length + 1,
      name: name,
      score: 0,
    };

    const updatedPlayers = [...players, newPlayer];

    // console.log(updatedPlayers);
    setPlayers(updatedPlayers);
  }

  console.log(sortBy);
  return (
    <div>
      <AddPlayerForm addPlayer={addPlayer} />
      <label>Sort by</label>
      <select onChange={(event) => setSortBy(event.target.value)}>
        <option value="score">Sort by score</option>
        <option value="name">Sort by name</option>
      </select>
      {sortedPlayers.map((player) => {
        // console.log("PLAYER:", player.name, player.score);
        return (
          <ScoreCard
            key={player.id}
            changeScore={changeScore}
            id={player.id}
            name={player.name}
            score={player.score}
          />
        );
      })}
    </div>
  );
}
