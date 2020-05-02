// import React, { useState } from "react";
import React from "react";

export default function ScoreCard(props) {
  //   const [score, setScore] = useState(0);

  //   function changeScore(number) {
  //     setScore(score + number);
  //   }

  // console.log("WHAT IS IN MY PROPS", props);
  return (
    <div>
      <h1>I am {props.name}</h1>
      <p>Score: {props.score}</p>
      <button
        onClick={() => {
          props.changeScore(props.id, 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          props.changeScore(props.id, -1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          console.log("reset");
        }}
      >
        Reset
      </button>
    </div>
  );
}
