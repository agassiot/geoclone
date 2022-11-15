import React from "react";
import { Link } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";

const ClickToPlay = () => {
  function clearData() {
    reactLocalStorage.clear();
  }

  return (
    <>
    
    <div style={{
        marginLeft: "601px",
        padding: "400px"
       
      }}>
    <main>
      <Link
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-12 px-28 rounded-full lg:text-4xl"
        to="/playing"
        onClick={clearData}
      >
        PLAY!
      </Link>
    </main>
    </div>
    </>
  );
};

export default ClickToPlay;
