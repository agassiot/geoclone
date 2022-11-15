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
  let rand = Math.floor(Math.random() * 18);
  let totalNumberOfQuestion = "6";
  let showResult = false;

  return (
    <div>
      <div style={{
        marginLeft: "250px",
        padding: "20px"
       
      }}>
       
   
    
      <StreetView rand={rand} />
      </div>
      <center>
      <div style={{
        marginLeft: "850px"
      }}>
      <h3 className="w-text-4xl font-extrabold tracking-tight hover:text-green-500 leading-none text-slate-200 md:text-5xl lg:text-5xl ">Multiple Choice: What city are you in?</h3>
      <ul>
        {locations[rand].answerChoice.map((choice) => (
          <button className="relative inline-flex px-16 pl-16 items-center justify-flex-end p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-pink-550 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <li onClick={(event) => questionValidation(choice)} key={choice}>
                {choice}
              </li>
            </span>
          </button>
        ))}
      </ul>
      </div>
     </center>
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
    if (totalNumberOfQuestion === reactLocalStorage.get("currenQuestion", 1)) {
      showResult = true;
      window.location.replace("/score");
    } else {
      window.location.reload();
    }
  }
};

export default Playing;
