import ReactStreetview from "react-streetview";
console.log(process.env);
// import * dotenv from 'dotenv'
// dotenv.config()

function StreetView() {
  // see https://developers.google.com/maps/documentation/javascript
  const googleMapsApiKey = process.env.REACT_APP_googleMapsApiKey;

  // see https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanoramaOptions
  const streetViewPanoramaOptions = {
    position: { lat: 46.9171876, lng: 17.8951832 },
    pov: { heading: 100, pitch: 0 },
    zoom: 1,
  };

  return (
    <div
      style={{
        width: "1000px",
        height: "700px",
        backgroundColor: "#eeeeee",
      }}
    >
      <ReactStreetview
        apiKey={googleMapsApiKey}
        streetViewPanoramaOptions={streetViewPanoramaOptions}
      />
    </div>
  );
}

export default StreetView;
