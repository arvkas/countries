
export default function SearchBar({updateQuery}) {
  const [query, setQuery] = updateQuery
  return (
    <div className="search-container">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search for a country..." className="search-input"onChange={(e) => setQuery(e.target.value.toLowerCase())} />
    </div>
  )
}
