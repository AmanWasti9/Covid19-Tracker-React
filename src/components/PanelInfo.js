// import React,{useEffect, useState} from 'react';
// import axios from 'axios';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// export default function PanelInfo() {

//   const [covidData, setCovidData] = useState([]);

//   useEffect(() => {
//     async function fetchCovidData() {
//       const options = {
//         method: 'GET',
//         url: 'https://covid-19-statistics.p.rapidapi.com/reports',
        
//         headers: {
//           'X-RapidAPI-Key': '45a4e7d8e6msh8baaf3821825b91p109847jsne05debaabdbd',
//           'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'
//         }
//       };

//       try {
//         const response = await axios.request(options);
//         console.log(response.data.data[0]);
//         setCovidData(response.data.data);
//       } catch (error) {
//         console.error(error);
//       }
//     }

//     fetchCovidData();
//   }, []);

//   return (
//     <Box sx={{ maxWidth: 1000, margin: '0 auto',marginTop: 10, }}>
//       <Grid container spacing={3}>
//        {Object.keys(covidData).map((val , ind) => {
//           return(
//                 <Grid item xs={12} sm={4} key={ind}>
//                   <Item elevation={3}>
//                     <h3>{val}</h3>
//                     <h3>{covidData.date}</h3>

//                   </Item>
//                 </Grid>
//           )
//        })}
        
//       </Grid>
//     </Box>
//   );
// }