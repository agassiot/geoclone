import { QUERY_LOCATIONS } from "../../utils/queries";

console.log(process.env);

const Questions = () => {
   return (

    <>
    <div>
        <p>Multiple Choice List</p>
        <ul>
            <li>1{QUERY_LOCATIONS.JSON.parse(locations[0].answerChoice)}</li>
        </ul>

    </div>
    </>



   )
      
  };
  
  export default Questions;