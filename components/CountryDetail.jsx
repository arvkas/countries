import React, { useEffect, useState } from 'react'
import { useParams, Link, useLocation } from 'react-router'

import './CountryDetail.css'
import { useTheme } from '../hooks/useTheme';

export default function CountryDetail() {
  // const countryName = new URLSearchParams(window.location.search).get('name')
  // console.log(countryName)  
  const params = useParams()
  const countryName = params.country

  const {state} = useLocation() // hook from react-router to get state passed from Link
  console.log(state)

  const [countryData, setCountryData] = useState(null)  //useState({})
  const [notFount, setNotFound] = useState(false)  //useState({})

  // const [isDark] = useOutletContext()
  const [isDark] = useTheme();

  function updateCountryData(data) {
    setCountryData({
      name: data.name.common || data.name,
      nativeName: Object.values(data.name.nativeName || {})[0].common,
      //If inside objects we found different keys rather than actual keys so we use Object.values then we will get all values
      population: data.population.toLocaleString('en-IN'),
      region: data.region,
      subRegion: data.subregion,
      capital:data.capital? data.capital.join(', ') : 'N/A',
      topLevelDomain: data.tld ? data.tld.join(', ') : 'N/A',
      // currencies: Object.values(data.currencies)[0].name,
      currencies: Object.values(data.currencies || {}).map((currency) => currency.name).join(', '),
      languages: Object.values(data.languages || {}).join(', '), // Object inside object
      // borderCountries:Object.values(data.borders).map((border) => border).join(', '),
      flags: data.flags.svg,
      borders: []
    })
    // We are receiving lot of calls since map
    // data.borders.map((border) => {
    //   fetch(`https://restcountries.com/v3.1/alpha/${border}`)
    //   .then((response) => response.json())
    //   .then(([borderCountry]) => { // If u want directly from array destructure it
    //       // console.log(borderCountry.name.common)
    //       setCountryData((prevData) => ({...prevData, borders: [...prevData.borders, borderCountry.name.common]}))
    //   })
    // })
    if(!data.borders) {
      data.borders = []
    };
    Promise.all(data.borders.map(async (border) => {
      const response = await fetch(`https://restcountries.com/v3.1/alpha/${border}`)
      const [borderCountry] = await response.json()
      return borderCountry.name.common
  })).then((allBordersName) => {
    setTimeout(() => {   // Some time border fetch will call first
    setCountryData((prevData) => ({...prevData, borders: allBordersName}))
    })
    // console.log(allBordersName)
  })

  }

  useEffect(()=> {
    if(state) {
      console.log("Hello")
      updateCountryData(state);
      return
    }

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullname=true`)
    .then((response) => response.json())
    .then(([data]) => {   // If you destructure here only u will get first array value
      // console.log(data)
      console.log("Hello34")
      updateCountryData(data);
    })
    .catch((error) => setNotFound(true));
  }, [countryName])

  if (notFount) {
    return <h2>Country Not Found</h2>
  }

  return (
    (countryData === null)? 'Loading ....': (
    <main className={`${isDark ? 'dark':''}`}>
      <div className="country-details-container">
        <span className="back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.flags} alt={countryData.name} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p><b>Native Name: </b><span className="native-name">{countryData.nativeName || countryData.name}</span></p>
              <p><b>Population: </b><span className="population">{countryData.population}</span></p>
              <p><b>Region: </b><span className="region">{countryData.region}</span></p>
              <p><b>Sub Region: </b><span className="sub-region">{countryData.subRegion}</span></p>
              <p><b>Capital: </b><span className="capital"> {countryData.capital}</span></p>
              <p>
                <b>Top Level Domain: </b><span className="top-level-domain">{countryData.topLevelDomain}</span>
              </p>
              <p><b>Currencies: </b><span className="currencies">{countryData.currencies}</span></p>
              <p><b>Languages: </b><span className="languages">{countryData.languages}</span></p>
            </div>
            { countryData.borders.length != 0 && ( <div className="border-countries"><b>Border Countries: </b>&nbsp; {
              // countryData.borders.map((border) => {
              //   return <Link key={border} to={`/${border}`}>{border}</Link>
              // })
              countryData.borders.map((border) => <Link key={border} to={`/${border}`} >{border}</Link> )
            }</div>)
          }
          </div>
        </div>
      </div>
    </main>
    )
  )
}
