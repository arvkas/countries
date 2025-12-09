import { Link } from "react-router";

export default function CountryCard({name, flag, population, region, capital, data}) {
  return (
      <Link className="country-card" to= {`/${name}`} state={data}> 
      {/* instead of passing all {name, flag, population, region, capital} data will pass */}
      <img src={flag} alt={name + ' flag'} />
            <div className="card-text">
                <h3 className="card-title">{name}</h3>
                <p><b>Population: {population}</b></p>
                <p><b>Region: </b> {region}</p>
                <p><b>Capital: </b> {capital}</p>
            </div>
      </Link>
  )
}
