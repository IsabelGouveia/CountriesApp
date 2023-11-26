import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import SearchCountry from './js/component/searchCountry';

const App = () => {
  const [countryData, setCountryData] = useState(null);
  const [input, setInput] = useState('Portugal');

  useEffect(() => {
    fetchData();
  }, [input]);

  const fetchData = () => {
    // Fetch data from my backend
    fetch(process.env.REACT_APP_BACKEND_API + input)
      .then((response) => response.json())
      .then((data) => {
        setCountryData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSearch = (searchTerm) => {
    setInput(searchTerm);
  };

  return (
    <div className="App">
      <SearchCountry onSearch={handleSearch} />
      {countryData && (
        <div>
          <h1>{countryData[0].commonName}</h1>
          <p>Region: {countryData[0].region}</p>
        </div>
      )}
    </div>
  );
};

export default App;
