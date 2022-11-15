import React from "react";
import { useQuery } from "@apollo/client";

import { QUERY_LOCATIONS } from "../utils/queries";
import StreetView from "../components/StreetView";
import { reactLocalStorage } from "reactjs-localstorage";

const Playing = () => {
  const { loading, data } = useQuery(QUERY_LOCATIONS);
  const locations = data?.locations || [];
  console.log(locations);
  if (loading) return <div>loading...</div>;
  console.log(locations);
  let rand = Math.floor(Math.random() * 8);
  let totalNumberOfQuestion = "8";
  let showResult = false;

  return (
    <div>
      <StreetView rand={rand} />
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
    </div>
  );

  function questionValidation(choice) {
    console.log(choice);
    // console.log(locations.locationName);
    console.log(locations[rand]);
    if (choice === locations[rand].locationName) {
      alert("You are correct!");
      reactLocalStorage.set(
        "totalScore",
        parseInt(reactLocalStorage.get("totalScore", 0)) + 10
      );
    } else {
      alert("You are Wrong!");
    }
    reactLocalStorage.set(
      "currenQuestion",
      parseInt(reactLocalStorage.get("currenQuestion", 0)) + 1
    );

    console.log("totalScore", reactLocalStorage.get("totalScore"));
    console.log(
      "currenQuestion",
      parseInt(reactLocalStorage.get("currenQuestion", 1))
    );
    console.log("show result", showResult);
    if (totalNumberOfQuestion == reactLocalStorage.get("currenQuestion", 1)) {
      showResult = true;
      window.location.replace("/score");
    } else {
      window.location.reload();
    }
  }
};

export default Playing;
