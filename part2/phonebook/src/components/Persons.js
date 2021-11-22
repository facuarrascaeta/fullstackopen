const Person = ({ person, handleDelete }) => (
  <li>
    {person.name} {person.number} 
    <button onClick={handleDelete}>delete</button>
  </li>
)

const Persons = ({ personsToShow, handleDelete }) => {
  return (
    <div>
      {personsToShow.map(person => (
        <Person key={person.id} person={person} handleDelete={() => handleDelete(person)}/>
      ))}
    </div>
  )
}

export default Persons
