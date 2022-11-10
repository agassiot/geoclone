import React from "react";
import { useQuery } from "@apollo/client";

import ThoughtList from "../components/ThoughtList";
import ThoughtForm from "../components/ThoughtForm";

import { QUERY_THOUGHTS } from "../utils/queries";
import StreetView from "../components/StreetView";

const Playing = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  return (
    <main>
      {/* Rendering Street View */}
      <StreetView />
      {/* Render multiple choices down below */}
    </main>
  );
};

export default Playing;
