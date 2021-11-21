const Search = ({ searchValue, handleSearchChange }) => (
  <div>
    find countries <input value={searchValue} onChange={handleSearchChange}/>
  </div>
)


export default Search
