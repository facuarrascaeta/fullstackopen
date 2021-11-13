import React, { useState } from 'react';

const Header = ({ text }) => (
  <h1>{text}</h1>
)
  
const Button = ({ text, onClick}) => (
  <button onClick={onClick}>
      {text}
  </button>
)

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad

  if (all === 0) {
    return (
    <div>
      No feedback given
    </div>
    )
  }

  const average = (good - bad) / all
  const positive = good * 100 / all

  return (
    <table>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} />
    </table>
  )
}

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)


const App = () => {
  const [ good, setGood] = useState(0)
  const [ neutral, setNeutral] = useState(0)
  const [ bad, setBad] = useState(0)

  const handleFeedback = e => {
    const feedback = e.target.textContent
    if (feedback === 'good') {
      setGood(good + 1)
    } else if (feedback === 'neutral') {
      setNeutral(neutral + 1)
    } else {
      setBad(bad + 1)
    }
  }

  return (
    <div>
      <Header text="give feedback" />
      <Button text="good" onClick={handleFeedback}/>
      <Button text="neutral" onClick={handleFeedback}/>
      <Button text="bad" onClick={handleFeedback}/>
      <Header text="statistics" />
      <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
      />
    </div>

  )
}

export default App
