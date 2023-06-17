// import React from 'react';

// const CountryDetails = ({ country }) => {
//   return (
//     <div>
//       <h2>{country.name}</h2>
//       <p>Capital: {country.capital}</p>
//       <p>Population: {country.population}</p>
//       <p>Area: {country.area} km²</p>
//       <p>Languages: {country.languages.map((language) => language.name).join(', ')}</p>
//       <p>Currencies: {country.currencies.map((currency) => currency.name).join(', ')}</p>
//       {/* Add more country details as needed */}
//     </div>
//   );
// };

// export default CountryDetails;
import React from 'react';

const CountryDetails = ({ country }) => {
    console.log(country)
  return (
    <div className="country-details mb-5 container">
      <h2>{country.name}</h2>
      <div className="detail-row">
       
        <img className=""src={country.flags.png}/>
      </div>
      <div className="detail-row">
        <span className="detail-label">Capital: </span>
        <span className="detail-value">{country.capital}</span>
      </div>
      <div className="detail-row">
        <span className="detail-label">Population: </span>
        <span className="detail-value">{country.population}</span>
      </div>
      <div className="detail-row">
        <span className="detail-label">TimeZones:  </span>
        <span className="detail-value">{country.timezones}</span>
      </div>
      <div className="detail-row">
        <span className="detail-label">Area:  </span>
        <span className="detail-value">{country.area} km²</span>
      </div>
      <div className="detail-row">
        <span className="detail-label">Languages: </span>
        <span className="detail-value">{country.languages.map((language) => language.name).join(', ')}</span>
      </div>
      <div className="detail-row">
        <span className="detail-label">Currencies: </span>
        <span className="detail-value">{country.currencies.map((currency) => currency.name).join(', ')}</span>
      </div>
     
    </div>
  );
};

export default CountryDetails;

