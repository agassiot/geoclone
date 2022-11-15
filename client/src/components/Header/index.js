import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
    <h1 className="w-3/12">
        
          <Link  to="/">
            <h1 className="mb-4 w-text-4xl font-extrabold tracking-tight hover:text-green-500 leading-none text-gray-900 md:text-5xl lg:text-6xl ">geoClone</h1>
          </Link>
    </h1>
    <nav className="nav font-semibold text-lg">
          {Auth.loggedIn() ? (
            <>

        <ul className="flex items-center">
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
               <Link to="/me">
                <button type="button" className="text-black bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-8 mb-2" >
                {Auth.getProfile().data.username}'s profile
                </button>
              </Link>
            </li>

            <li class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
               <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 pl-5 py-2.5 text-center ml-5 mb-2" onClick={logout}>
                Logout
              </button>
            </li>
        </ul>

            </>
          ) : (
            <>
        <ul className="flex items-center">
<li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
    <Link  to="/login">
    <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Login
                </button>
    </Link>

            </li>

            <li class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <Link className="btn btn-lg btn-light m-2" to="/signup">
               <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 pl-5 py-2.5 text-center ml-5 mb-2" >
                Signup
              </button>
              </Link>

            </li>
            </ul>
             
            </>
          )}
          </nav>
    </header>
  );
};

export default Header;
