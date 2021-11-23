import { useEffect, useState } from 'react'
import axios from 'axios'
import Search from './components/Search'
import SearchResults from './components/SearchResults'
import Country from './components/Country'



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
          : <Country country={countriesToShow[0]}/>
        }
      </div>
    </div>
  )
}


export default App
