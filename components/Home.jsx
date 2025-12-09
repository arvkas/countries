import React, { useState } from 'react'
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
// import { useOutletContext } from 'react-router';

import { useWindowSize } from '../hooks/useWindowSize';
import { useTheme } from '../hooks/useTheme';

export default function Home() {
    const [query, setQuery] = useState('')
    // const [isDark] = useOutletContext()
    // const [isDark] = useContext(ThemeContext)
    const [isDark] = useTheme();
    const windowSize = useWindowSize();
  return (
    <main className={`${isDark ? 'dark':''}`}>
      <div className="search-filter-container">
        <SearchBar updateQuery={ [query, setQuery] } />
        <SelectMenu updateQuery={setQuery} />
      </div>
      <h1 style={{textAlign: 'center'}}>{`${windowSize.width} x ${windowSize.height}`}</h1>
      {
        query === 'unmount' ? '' : <CountriesList query={ query} /> 
      }
      
    </main>
  )
}
