import React, { useEffect, useState } from 'react'
// import countriesData from '../countriesData'
import CountryCard from './CountryCard.jsx'
import CountriesListShimmer from './CountriesListShimmer.jsx'
import { useFilter } from '../hooks/useFilter.js'

export default function CountriesList({query}) {
  // const filteredCountries = countriesData.filter((country) => country.name.common.toLowerCase().includes('india'))
  const [countriesData, setCountriesData] = useState([]) // let countriesData = []simple variable to hold fetched data not possible
  
  const dataOne = ['India', 'USA', 'UKIndia', 'Canada', 'Australia', 'Germany']
  const [filteredData, setFilterQuery] = useFilter({'str1': dataOne, 'str':(item) => item.toLowerCase().includes('india')})

  console.log(setFilterQuery)
  useEffect(() => {
    // if(countriesData.length > 0) return; // to avoid multiple fetch calls
  fetch('https://restcountries.com/v3.1/independent?status=true')
  .then(response => response.json())
  .then((data) => {
    setCountriesData(data);
  })

  // const intervalId = setInterval(() => {
  //   console.log('Interval tick');
  // }, 1000);

  // return (
  //   () => {
  //     console.log('Cleanup function called');
  //     clearInterval(intervalId);
  //   }
  // )
},[])


  return (
    ( countriesData.length === 0) ? <CountriesListShimmer /> : (
    <>
    <div className="countries-container">
      {
      countriesData.filter((country) => 
        country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
      ).map((country) => {
        return (
            <CountryCard 
              key={country.name.common} 
              name={country.name.common} 
              flag={country.flags.svg} 
              population={country.population.toLocaleString('en-IN')}
              region={country.region}
              capital={country.capital ? country.capital[0] : 'N/A'}
              data={country} // to get state from link
            />
        )
      })
      }
     </div>
    </>
    )
  )
}
