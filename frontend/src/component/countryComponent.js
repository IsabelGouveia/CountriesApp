import '../styles/countryComponent.css'

export const CountryComponent = ({ country }) => {
    return (
        <div className="countryDetails">
            <h1>{country.commonName}</h1>
            <p>Region: {country.region}</p>
        </div>
    )

}

