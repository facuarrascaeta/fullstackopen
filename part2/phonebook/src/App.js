import { useState } from 'react' 

const Contact = ({ person }) => {
  return (
    <div>{person.name} {person.number}</div>
  )
}

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-44-5323523' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handleAddName = (e) => {
    e.preventDefault()
    if (!persons.find(person => person.name === newName)) {
      const personObject = {
        name: newName,
        number: newNumber,
      }
      setPersons(persons.concat(personObject))
    } else {
      alert(`${newName} is already in phonebook`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddName}>
        <div>
          name: <input vale={newName} onChange={(e) => setNewName(e.target.value)}/>
        </div>
        <div>
          number: <input vale={newNumber} onChange={(e) => setNewNumber(e.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => {
        return (
          <Contact key={person.name} person={person}/>
        )
      })}
    </div>
  )
}

export default App;
