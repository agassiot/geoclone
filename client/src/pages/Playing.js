import React from "react";
import { useQuery } from "@apollo/client";

import { QUERY_LOCATIONS } from "../utils/queries";
import StreetView from "../components/StreetView";
import Questions from "../components/Questions";

const Playing = () => {
  const { loading, data } = useQuery(QUERY_LOCATIONS);
  const locations= data?.locations|| [];
  if (loading) return (<div>loading...</div>)
 console.log(locations)
 let rand = Math.floor(Math.random() * 2);

  return (
    <main>
      {/* Rendering Street View */}
      <StreetView rand={rand}/>
      {/* <Questions></Questions> */}
      {/* Render multiple choices down below */}
      <h3>Multiple Choice: What city are you in?</h3>
      <ul>
      {locations[rand].answerChoice.map(choices =>(<button className="relative inline-flex px-16 pl-16 items-center justify-flex-end p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
     <li key={choices}>{choices}</li>
  </span>
</button>))}
      </ul>
    </main>
  );

  function questionValidation(choice) {
    console.log(choice);
    // console.log(locations.locationName);
    console.log(locations[rand]);
    if (choice === locations[rand].locationName)
      console.log("You are correct!");
    else {
      console.log("You are Wrong!");
    }
    // window.location.reload();
  }
};

export default Playing;
