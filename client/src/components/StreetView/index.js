import ReactStreetview from "react-streetview";
import { useQuery } from "@apollo/client";
import { QUERY_LOCATIONS } from "../../utils/queries";
import { useEffect, useState } from "react";

console.log(process.env);
// import * dotenv from 'dotenv'
// dotenv.config()

function StreetView({ rand }) {
  const { loading, data } = useQuery(QUERY_LOCATIONS);
<<<<<<< HEAD
  const locations = data?.locations || [];
=======
  const [apiKey, setApiKey] = useState("");
  const locations = data?.locations || [];
  useEffect(async () => {
    const response = await fetch("/googleMapAPI");

    const apiKey = await response.json();

    setApiKey(apiKey);
  }, []);
>>>>>>> fb0bfb2cbdeeab68b172acdab4f331d876dd6546
  //rand = Math.floor(Math.random() * 2);
  if (loading) return <div>loading...</div>;
  // see https://developers.google.com/maps/documentation/javascript
  const googleMapsApiKey = apiKey;
  //rand = 0;
  let latitude = locations[rand].latitude;
  console.log(latitude);
  let longitude = locations[rand].longitude;
  console.log(longitude);

  //console.log(typeof(longitude))
  //console.log(locations[rand].latitude)
  // see https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanoramaOptions
  const streetViewPanoramaOptions = {
<<<<<<< HEAD
    position: { lat: -13.165071, lng: -72.544715 },
    pov: { heading: 100, pitch: 0 },
    zoom: 1,
  };
=======
    position: { lat: latitude, lng: longitude },
    pov: { heading: 100, pitch: 0 },
    zoom: 1,
  };

  if (!apiKey) return null;
>>>>>>> fb0bfb2cbdeeab68b172acdab4f331d876dd6546

  return (
    <div
      style={{
        width: "1200px",
        height: "700px",
        backgroundColor: "#eeeeee",
        position: "relative",
      }}
    >
      <h4
        style={{
          top: "0px",
          left: "0px",
          height: "75px",
          width: "250px",
          position: "absolute",
          backgroundColor: "white",
          zIndex: "2",
        }}
      >
        {" "}
        Where are we?
      </h4>
      <ReactStreetview
        apiKey={googleMapsApiKey}
        streetViewPanoramaOptions={streetViewPanoramaOptions}
      />
    </div>
  );
}

export default StreetView;
