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
        {locations[rand].answerChoice.map(choices =>(<li>{choices}</li>))}
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
