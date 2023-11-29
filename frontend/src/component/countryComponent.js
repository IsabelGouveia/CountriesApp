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
      <div className="card-header">
        <h1>{country.commonName}</h1>
      </div>
      <div className="country-elements">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Region: {country.region}</li>
          <li className="list-group-item">Currencies: {currencies}</li>
          <li className="list-group-item">Capital: {country.capital}</li>
          <li className="list-group-item">Languages: {languages}</li>
          <li className="list-group-item">Population: {country.population.toLocaleString()}</li>
          <li className="list-group-item">Timezone: {timezones}</li>
          <li className="list-group-item">Flag: {country.flag}</li>
        </ul>
      </div>
    </div>
  )

}

