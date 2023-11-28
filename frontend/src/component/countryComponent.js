import '../styles/countryComponent.css'

export const CountryComponent = ({ country }) => {
    
    // Mapping currencies
  const currencies = Object.values(country.currencies).map((currency, index) => (
    <span key={index}>{currency.name} ({currency.symbol})</span>
  ));

  // Mapping languages
  const languages = Object.entries(country.languages).map(([code, name], index) => (
    <span key={index}>{name} ({code}), </span>
  ));
  
   // Mapping timezones
  const timezones = country.timezones.map((timezone, index) => (
    <span key={index}>{timezone}, </span>
  )); 
    
    return (
        <div className="countryDetails">
            <h1>{country.commonName}</h1>
            <p>Region: {country.region}</p>
            <p>Currencies: {currencies}</p>
            <p>Capital: {country.capital}</p>
            <p>Languages: {languages}</p>
            <p>Population: {country.population}</p>
            <p>Timezone: {timezones}</p>
            <p>Flag: {country.flag}</p>
        </div>
    )

}

