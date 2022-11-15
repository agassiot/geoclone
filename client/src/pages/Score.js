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
    <div style={{
      marginLeft: "925px",
      padding: "20px"
     
    }}>
    <main className="mb-4 w-text-4xl font-extrabold tracking-tight text-slate-200 md:text-9xl lg:text-6xl">
      Your score is {getScore()}
      {". "}
      {/* Click{" "} */}
      <Link to="/clicktoplay" onClick={clearData}>
        {" "}
        Click here to play again.{" "}
      </Link>
      {/* to play again. */}
    </main>
    </div>
  );
};

export default Scores;