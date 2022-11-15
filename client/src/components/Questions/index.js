const questionBank = [
    {
    "locationName": "New York",
    "latitude": 40.689247,
    "longitude": -74.044502,
    "answerChoice": [
      "Arlington",
      "Pheonix",
      "New York",
      "Philidelphia"
    ]
    },
   {
    "locationName": "Dallas",
    "latitude": 32.7796676,
    "longitude": -96.8022648,
    "answerChoice": [
      "Atlanta",
      "Dallas",
      "Los Angeles",
      "Seattle"
    ]
    
   },
   {
    "locationName": "Jordan",
    "latitude": 30.3290344,
    "longitude": 35.44435592,
    "answerChoice": [
      "Egypt",
      "Israel",
      "Jordan",
      "Iraq"
    ]
    },
     {
      "locationName": "mexico",
      "latitude": 32.7796676,
      "longitude": -96.8022648,
      "answerChoice": [
        "louisiana",
        "florida",
        "alabama",
        "mexico"
      ]
      
     },
     {
      "locationName": "mansfield",
      "latitude": 32.7796676,
      "longitude": -96.8022648,
      "answerChoice": [
        "lakview",
        "mansfield",
        "elgacy",
        "donn kirk"
      ]
      
     },
     {
      "locationName": "ft worth",
      "latitude": 32.7796676,
      "longitude": -96.8022648,
      "answerChoice": [
        "ft worth",
        "gp",
        "grapevine",
        "seagoville"
      ]
      
     },
     {
      "locationName": "shgoogahtle",
      "latitude": 32.7796676,
      "longitude": -96.8022648,
      "answerChoice": [
        "dougha",
        "pougalas",
        "lougageles",
        "shgoogahtle"
      ]
      
     },
     {
      "locationName": "arlington",
      "latitude": 32.7796676,
      "longitude": -96.8022648,
      "answerChoice": [
        "Atl",
        "arlington",
        "Los An",
        "Se"
      ]
      
     }

]

export default (n = 5) =>
  Promise.resolve(questionBank.sort(() => 0.5 - Math.random()).slice(0, n));




// import { QUERY_LOCATIONS } from "../../utils/queries";

// console.log(process.env);

// const Questions = () => {
//   return (
//     <>
//       <div>
//         <p>Multiple Choice List</p>
//         <ul>
//           <li>1{QUERY_LOCATIONS.JSON.parse(locations[0].answerChoice)}</li>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Questions;
