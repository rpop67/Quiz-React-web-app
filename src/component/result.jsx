import React from "react";

const Result = ({ score, playAgain }) => {
  return (
    <div className="card">
      <h1>{score} out of 5 scored!</h1>
      <button className="playButton" onClick={playAgain}>
        Play again !!
      </button>
    </div>
  );
};

export default Result;
