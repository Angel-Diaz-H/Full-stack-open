/* eslint-disable react/prop-types */
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {part: 'Fundamentals of React', exercises: 10},
    {part: 'Using props to pass data', exercises: 7},
    {part: 'State of a component', exercises: 14},
  ]
  const totalExercises = parts[0].exercises + parts[1].exercises + parts[2].exercises

  return (
    <div>
      <Header course = {course} />
      <Content parts = {parts}/>
      <Total sum = {totalExercises}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <>
      <h1>
        {props.course}
      </h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part = {props.parts[0].part} exercises={props.parts[0].exercises} />
      <Part part = {props.parts[1].part} exercises={props.parts[1].exercises} />
      <Part part = {props.parts[2].part} exercises={props.parts[2].exercises} />
    </>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Total = (props) => {
  return(
    <>
      <p>Number of exercises {props.sum}</p>
    </>
  )
}

export default App