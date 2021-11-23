const Weather = ({ weather }) => {
  if (Object.entries(weather).length === 0) {
    return "loading..."
  }

  return (
    <div>
      <li><strong>Temperature:</strong> {weather.current.temp_c} Celsius</li>
      <img src={weather.current.condition.icon}/>
      <li><strong>Wind:</strong> {weather.current.wind_mph} mph</li>
    </div>
  )


}

export default Weather

