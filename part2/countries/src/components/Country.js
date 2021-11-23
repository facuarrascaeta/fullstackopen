import Weather from './Weather'
import { useEffect, useState } from "react"
import axios from 'axios'

const base = 'http://api.weatherapi.com/v1/current.json'
const api_key = process.env.REACT_APP_API_KEY

const Country = ({ country }) => {
  const [weather, setWeather] = useState({})
 
  useEffect(() => {
    axios
      .get(`${base}?key=${api_key}&q=${country.capital}`)
      .then(res => res.data)
      .then(data => {
        setWeather(data)
      })
  }, [])

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h3>languages</h3>
      <ul>
        {Object.keys(country.languages).map(lang => (
          <li key={lang}>{country.languages[lang]}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt="country flag"/>
      <h3>Weather in {country.capital}</h3>
      <Weather weather={weather}/>
    </div>

  )
}

export default Country
