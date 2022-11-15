import React from "react";
import { Link } from "react-router-dom";

import Auth from "../utils/auth";

const Landing = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (

    <div style={{
      marginLeft: "525px",
      padding: "400px"
     
    }}>
    <div className="container">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="w-3/12">
          <Link to="/">
            <h1 className="mb-4 w-text-4xl font-extrabold tracking-tight hover:text-green-500 leading-none text-slate-200 md:text-9xl lg:text-9xl ">
              geoClone
            </h1>
          </Link>
        </h1>
        <div>
          {Auth.loggedIn() ? (
            <>
              <button
                type="button"
                className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                onClick={logout}
              >
                <Link className="btn btn-lg btn-info m-2" to="/me">
                  {Auth.getProfile().data.username}'s profile
                </Link>
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                <Link className="" to="/login">
                  Login
                </Link>
              </button>
              <button
                type="button"
                className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                <Link className="btn btn-lg btn-light m-2" to="/signup">
                  Signup
                </Link>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Landing;