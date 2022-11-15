import React from "react";
import { Link } from "react-router-dom";

import Auth from "../utils/auth";

const Landing = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div className="container">
      <div className="flex flex-col items-center space-y-4">
        <div className="border boerder-gray-200 rounded">
          <Link
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            to="/"
          >
            <p className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
              GeoPicker
            </p>
          </Link>
          <p className="m-0">Are you able to make an educated guess?</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Landing;
