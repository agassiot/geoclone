import ReactStreetview from "react-streetview";
import { useQuery } from "@apollo/client";
import { QUERY_LOCATIONS } from "../../utils/queries";

console.log(process.env);
// import * dotenv from 'dotenv'
// dotenv.config()

function StreetView() {
  const { loading, data } = useQuery(QUERY_LOCATIONS);
  const locations= data?.locations|| [];
  if (loading) return (<div>loading...</div>)
  // see https://developers.google.com/maps/documentation/javascript
  const googleMapsApiKey = process.env.REACT_APP_googleMapsApiKey;


  let latitude = locations[rand].latitude;
  let longitude = locations[rand].longitude;
  // see https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanoramaOptions
  const streetViewPanoramaOptions = {
    position: { lat: latitude, lng:  longitude },
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
