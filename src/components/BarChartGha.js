import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { Chart as ChartJS, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale);

export default function BarChartGha() {
  const [covidData, setCovidData] = useState([]);

  useEffect(() => {
    async function fetchCovidData() {
      const options = {
        method: 'GET',
        url: 'https://covid-19-statistics.p.rapidapi.com/reports',
        headers: {
          'X-RapidAPI-Key': '45a4e7d8e6msh8baaf3821825b91p109847jsne05debaabdbd',
          'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setCovidData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCovidData();
  }, []);

  const chartData = {
    labels: covidData.map((report) => report.date),
    datasets: [
      {
        label: 'Confirmed Cases',
        data: covidData.map((report) => report.confirmed),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };

  return (
    <div>
      <h2>COVID-19 Cases</h2>
      <Bar
        data={chartData}
        options={{
          scales: {
            x: {
              type: 'category'
            },
            y: {
              type: 'linear'
            }
          }
        }}
      />
    </div>
  );
}
