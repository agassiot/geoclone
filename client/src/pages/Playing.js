import React from "react";
import { useQuery } from "@apollo/client";

import { QUERY_LOCATIONS } from "../utils/queries";
import StreetView from "../components/StreetView";
import Questions from "../components/Questions";

const Playing = () => {
  
  const { loading, data } = useQuery(QUERY_LOCATIONS);
  const locations = data?.locations || [];
  console.log(locations);
  if (loading) return <div>loading...</div>;
  console.log(locations);
  let rand = Math.floor(Math.random() * 8);
  
  
  // let fixed  = Math.random() - .05.slice(0, 5)
  // const QuestionBox = ({ answerChoice, choice, selected}) => {
  //   const [locationName, setAnswer] = useState(options);

  
  // Promise.resolve(locations.sort(() => 0.5 - Math.random()).slice(0, 5)),
  let counter = 0;
  const locationButton = document.querySelectorAll("li");
  locationButton.forEach((item) =>
    item.addEventListener("click", function (event) {
      if (event.target.matches("li")) {
        questionValidation(event);
      }
      counter += 1;
      console.log(counter)
    })
  );

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
            id="count"
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
    if (choice === locations[rand].locationName)
      alert("You are correct!");
    else {
      alert("You are Wrong!");
    }
    window.location.reload(locations[rand]);
  }
};

export default Playing;
