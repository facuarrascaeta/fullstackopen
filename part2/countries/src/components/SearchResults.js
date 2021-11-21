const SearchResults = ({ countries }) => {
  if (countries.length > 10) {
    return 'too many matches, specify another filter'
  }
  return (
    countries.map(country => <li key={country.name}>{country.name.common}</li>)
  )
}

export default SearchResults
