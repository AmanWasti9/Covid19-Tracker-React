import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart as Chartjs } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import gif301 from './301.gif';

export default function Chart() {
  const [covidData, setCovidData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCovidData() {
      const options = {
        method: 'GET',
        url: 'https://covid-19-statistics.p.rapidapi.com/reports',
        headers: {
          'X-RapidAPI-Key': '45a4e7d8e6msh8baaf3821825b91p109847jsne05debaabdbd',
          'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        const data = {
          labels: response.data.data.map((individualData) => individualData.region.name),
          datasets: [
            {
              label: 'Total Deaths',
              data: response.data.data.map((individualData) => individualData.deaths),
            },
          ],
        };
        setCovidData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCovidData();
  }, []);

  return (
    <div>
      <center>
        {isLoading ? (
          <div>
            <br /><br />
            <img src={gif301} alt="Loading..." />
          </div>
        ) : (
          <div style={{ maxWidth: '100%', overflowX: 'auto' }}>
            <div style={{ width: '80%' }}>
              {covidData ? (
                <Line data={covidData} />
              ) : (
                <div>Error: Failed to fetch data</div>
              )}
            </div>
          </div>
        )}
      </center>
    </div>
  );
}
