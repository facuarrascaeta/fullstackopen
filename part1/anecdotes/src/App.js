import React, { useState } from "react";


const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Anecdote = ({ text, votes }) => {
  return (
    <div>
      <p>{text}</p>
      <p>has {votes} votes</p>
    </div>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  const nextAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNumber)
  }

  const updateVotes = () => {
    const newPoints = [...points]
    newPoints[selected]++
    setPoints(newPoints)
  }

  const getMostVotedIndex = () => {
    const max = Math.max(...points)
    return points.indexOf(max)
  }
  
  const mostVotedIndex = getMostVotedIndex()


  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote text={anecdotes[selected]} votes={points[selected]} />
      <Button text="next anecdote" handleClick={nextAnecdote} />
      <Button text="vote" handleClick={updateVotes} />
      <h1>Anecdote with most votes</h1>
      <Anecdote text={anecdotes[mostVotedIndex]} votes={points[mostVotedIndex]} />
    </div>
  );
}

export default App;
