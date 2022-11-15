import React from "react";
import { useQuery } from "@apollo/client";

import { QUERY_LOCATIONS } from "../utils/queries";
import StreetView from "../components/StreetView";
import Questions from "../components/Questions";
import { useState } from "react";

const Playing = () => {
  const { loading, data } = useQuery(QUERY_LOCATIONS);
  const locations = data?.locations || [];
  console.log(locations);
  if (loading) return <div>loading...</div>;
  console.log(locations);
  let rand = Math.floor(Math.random() * 8);

  return (
    <main>
      {/* Rendering Street View */}
      <StreetView rand={rand} />
      {/* <Questions></Questions> */}
      {/* Render multiple choices down below */}
      <h3>Multiple Choice: What city are you in?</h3>
      <ul>
        {locations[rand].answerChoice.map((choice) => (
          <li
            key={choice}
            className="btn"
            onClick={(event) => questionValidation(choice)}
          >
            {choice}
          </li>
        ))}
      </ul>
    </main>
  );

  function questionValidation(choice) {
    console.log(choice);
    // console.log(locations.locationName);
    console.log(locations[rand]);
    if (choice === locations[rand].locationName) {
      alert("You are correct!");
    } else {
      alert("You are Wrong!");
    }
    window.location.reload();
  }
};

export default Playing;
