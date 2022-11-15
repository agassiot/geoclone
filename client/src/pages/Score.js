import React from "react";
import { Link } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";

const Scores = () => {
  function getScore() {
    const score = reactLocalStorage.get("totalScore", 0);
    console.log("score", score);
    return score;
  }
  function clearData() {
    reactLocalStorage.clear();
  }

  return (
    <main>
      Your score is {getScore()}
      {". "}
      Click{" "}
      <Link to="/clicktoplay" onClick={clearData}>
        {" "}
        here{" "}
      </Link>
      to play again.
    </main>
  );
};

export default Scores;
