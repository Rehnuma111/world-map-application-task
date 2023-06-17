import React, { useState } from "react";
import Map from "./Map";
import CountryDetails from "./CountryDetails";
import axios from "axios";

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [error, setError] = useState(null);

  const handleCountryClick = async (event) => {
    const countryName = event.target.feature.properties.name;
    try {
      const response = await axios.get(
        `https://restcountries.com/v2/name/${countryName}`
      );
      const [country] = response.data;
      setSelectedCountry(country);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSearch = async (countryName) => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v2/name/${countryName}`
      );
      const [country] = response.data;
      setSelectedCountry(country);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <Map onCountryClick={handleCountryClick} />
      {selectedCountry && <CountryDetails country={selectedCountry} />}
      {error && <p>Error: {error}</p>}
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

const SearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchValue);
  };

  return (
    <div className="container">
      <form className="search-form mt-5" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          placeholder="Enter a country name"
          className="search-input"
        />
        <button type="submit" className="search-button ">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
