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
<<<<<<< HEAD
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
=======
  let rand = Math.floor(Math.random() * 13);
  let totalNumberOfQuestion = "6";
  let showResult = false;
>>>>>>> 0c11cb617cbee75c847a45a34c3e2e9505f51739

  return (
    <div>
      <StreetView rand={rand} />
      <h3>Multiple Choice: What city are you in?</h3>
      <ul>
        {locations[rand].answerChoice.map((choice) => (
<<<<<<< HEAD
          
          <li
            id="count"
            key={choice}
            className="btn"
            onClick={(event) => questionValidation(choice)}
            
          >
            {choice}
          </li>
          
=======
          <button className="relative inline-flex px-16 pl-16 items-center justify-flex-end p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <li onClick={(event) => questionValidation(choice)} key={choice}>
                {choice}
              </li>
            </span>
          </button>
>>>>>>> 0c11cb617cbee75c847a45a34c3e2e9505f51739
        ))}
    
      </ul>
    </div>
  );
 

  

  function questionValidation(choice) {
    console.log(choice);
    // console.log(locations.locationName);
    console.log(locations[rand]);
<<<<<<< HEAD
    if (choice === locations[rand].locationName)
      alert("You are correct!");
    else {
      alert("You are Wrong!");
    }
    window.location.reload(locations[rand]);
=======
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
    if (totalNumberOfQuestion === reactLocalStorage.get("currenQuestion", 1)) {
      showResult = true;
      window.location.replace("/score");
    } else {
      window.location.reload();
    }
>>>>>>> 0c11cb617cbee75c847a45a34c3e2e9505f51739
  }
};

export default Playing;
