import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import personService from './services/persons'
import Notification from './components/Notification'


const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')
  const [ message, setMessage ] = useState(null)
  const [ messageColor, setMessageColor ] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (e) => {
    e.preventDefault()
    
    if (!persons.find(person => person.name === newName)) {
      
      const personObject = {
        name: newName,
        number: newNumber,
      }
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setMessage(`Added ${returnedPerson.name}`)
          setMessageColor('green')
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })

    } else {
      const result = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      if (result) {
        const person = persons.find(p => p.name === newName)
        const personChanged = {...person, number: newNumber}
        personService
          .update(personChanged)
          .then(returnedPerson => {
            setPersons(persons.map(p => p.id !== returnedPerson.id ? p : returnedPerson))
          })
          .catch(error => {
            setMessage(`Information of ${newName} has already been removed from the server`)
            setMessageColor('red')
            setPersons(persons.filter(p => p.id !== personChanged.id ))
            setTimeout(() => {
              setMessage(null)
            }, 5000)
          })
      }
    }
  }

  const deletePerson = (person) => {
    const result = window.confirm(`Delete ${person.name} ?`)
    if (result) {
      personService
        .del(person.id)
        .then(returnedPerson => {
          setPersons(persons.filter(p => p.id !== person.id))
        })
    }
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)

  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)

  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }


  const personsToShow = persons.filter(p => p.name.includes(filter))


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} color={messageColor} />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h3>add a new</h3>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleSummit={addPerson}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} handleDelete={person => deletePerson(person)} />
    </div>
  )
}

export default App
