import React from "react";
import { Link } from "react-router-dom";

const ClickToPlay = () => {
  return (
    <main>
      <Link className="btn btn-lg btn-info m-2" to="/playing">
        CLICK HERE TO PLAY!
      </Link>
    </main>
  );
};

export default ClickToPlay;
