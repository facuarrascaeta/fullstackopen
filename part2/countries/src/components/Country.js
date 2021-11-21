const Country = ({ name, capital, languages, flag, population }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>capital {capital}</p>
      <p>population {population}</p>
      <h3>languages</h3>
      <ul>
        {Object.keys(languages).map(lang => (
          <li key={lang}>{languages[lang]}</li>
        ))}
      </ul>
      <img src={flag} alt="country flag"/>
    </div>

  )
}

export default Country
