import React from "react";
import { Link } from "react-router-dom";

import Auth from "../utils/auth";

const Landing = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">geoClone</h1>
          </Link>
          <p className="m-0">Test your geography skills!</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
<button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
<button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" >
              <Link className="" to="/login">
                Login
              </Link>
    </button>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Landing;
