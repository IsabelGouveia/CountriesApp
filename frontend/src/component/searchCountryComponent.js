import React, { useState } from 'react';

const SearchCountryComponent = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="input-group mb-3" style={{ width: '300px', margin:'20px auto 0' }}>
      <input
        className="form-control"
        type="text"
        placeholder="Enter country name"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className="btn btn-outline-secondary" type="button" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchCountryComponent;