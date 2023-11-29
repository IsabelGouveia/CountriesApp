import './styles/App.css'
import React, { useState } from 'react';
import SearchCountryComponent from './component/searchCountryComponent';
import { CountryComponent } from './component/countryComponent';
import { SearchByName } from './services/countryServices';


const App = () => {
  const [countryData, setCountryData] = useState([]);
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      setLoading(true)
      SearchByName(searchTerm).then(data => {
        setMessage(null)
        if (data.result) {
          setCountryData(data.countries)
        } else {
          setCountryData([])
          setMessage('Country not found')
        }
      }).finally(() => setLoading(false));
    } else {
      setMessage("Please type country")
    }

  };

  return (
    <div className="App">
      <SearchCountryComponent onSearch={handleSearch} />
      {countryData && countryData.map((country, index) => (
        <CountryComponent country={country} key={index} />
      ))}
      {loading ? (<div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>) : <></>}
      {message && (
        <div>
          {message}
        </div>
      )}
    </div>
  );
};

export default App;
