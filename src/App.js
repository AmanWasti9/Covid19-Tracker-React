import React, { useState } from 'react';
import Header from './components/Header';
import Chart from './components/Chart';
import BarChart from './components/BarChart';
import './App.css';
import CountryHeading from './components/CountryHeading';

export default function App() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  return (
    <div>
      <Header onSearchChange={handleSearchChange} />
      <Chart/>
      <CountryHeading/>
      <BarChart searchValue={searchValue}/>
    </div>
  );
}














