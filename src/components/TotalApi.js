// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function TotalApi() {
//       const [covidData, setCovidData] = useState([]);

//   useEffect(() => {
//     async function fetchCovidData() {
//       const options = {
//         method: 'GET',
//         url: 'https://covid-19-tracking.p.rapidapi.com/v1',
//   headers: {
//     'X-RapidAPI-Key': '45a4e7d8e6msh8baaf3821825b91p109847jsne05debaabdbd',
//     'X-RapidAPI-Host': 'covid-19-tracking.p.rapidapi.com'
//   }
//       };
  
//       try {
//         const response = await axios.request(options);
//         console.log(response.data);
//         setCovidData(response.data.data);
//       } catch (error) {
//         console.error(error);
//       }
//     }
  
//     fetchCovidData();
//   }, []);
//   return (
//     <div>
     
//     </div>

//   );
// }
