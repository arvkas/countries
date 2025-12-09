import React from 'react'

export default function SelectMenu({updateQuery}) {
  return (
    <select className="filter-by-region" onChange={(e) => updateQuery(e.target.value.toLowerCase())} >
        <option hidden>Filter By Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
    </select>
  )
}
