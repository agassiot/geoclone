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

 
  return (
    <main>
      {/* Rendering Street View */}
      <StreetView />
      {/* <Questions></Questions> */}
      {/* Render multiple choices down below */}
      <h3>Multiple Choice: What city are you in?</h3>
      <ul>
        {locations.map(location =>(<li>hello World</li>))}
      </ul>
    </main>
  );
};

export default Playing;
