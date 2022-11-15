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
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        to="/playing"
        onClick={clearData}
      >
        CLICK HERE TO PLAY!
      </Link>
    </main>
  );
};

export default ClickToPlay;
