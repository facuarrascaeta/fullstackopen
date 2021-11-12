import React from 'react';
import ReactDOM from 'react-dom';


const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}


const Content = (props) => {
  return (
    props.course.parts.map(part => (
      <Part part={part.name} exercises={part.exercises} key={part.name}/>
    ))
  )
}


const Total = (props) => {
  return (
    <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
  )
}


const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application develpment',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
