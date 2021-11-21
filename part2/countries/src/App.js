import { useEffect, useState } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Country from './components/Country'
import SearchResults from './components/SearchResults'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(res => {
        setCountries(res.data)
      })
  }, [])

  const countriesToShow = countries.filter(country => country.name.common.toLocaleLowerCase().includes(searchValue))
  
  return (
    <div>
      <Search
        searchValue={searchValue}
        handleSearchChange={e => setSearchValue(e.target.value)}
      />
      <div>
        {countriesToShow.length !== 1
          ? <SearchResults countries={countriesToShow} />
          : <Country
              name={countriesToShow[0].name.common}
              capital={countriesToShow[0].capital}
              population={countriesToShow[0].population}
              languages={countriesToShow[0].languages}
              flag={countriesToShow[0].flags.png}
              />
            }
      </div>
    </div>
  )
}


export default App
