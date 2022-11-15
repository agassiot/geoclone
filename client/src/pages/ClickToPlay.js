import React from "react";
import { Link } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";

const ClickToPlay = () => {
  function clearData() {
    reactLocalStorage.clear();
  }

  return (
    <main>
      <Link
        className="btn btn-lg btn-info m-2"
        to="/playing"
        onClick={clearData}
      >
        CLICK HERE TO PLAY!
      </Link>
    </main>
  );
};

export default ClickToPlay;
