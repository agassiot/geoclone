import ReactStreetview from "react-streetview";
import { useQuery } from "@apollo/client";
import { QUERY_LOCATIONS } from "../../utils/queries";

console.log(process.env);
// import * dotenv from 'dotenv'
// dotenv.config()

function StreetView() {
  const { loading, data } = useQuery(QUERY_LOCATIONS, {});
  console.log(data);
  // see https://developers.google.com/maps/documentation/javascript
  const googleMapsApiKey = process.env.REACT_APP_googleMapsApiKey;

  // see https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanoramaOptions
  const streetViewPanoramaOptions = {
    position: { lat: 40.6895153, lng: -74.0441928 },
    pov: { heading: 100, pitch: 0 },
    zoom: 1,
  };

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
          width: "200px",
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
