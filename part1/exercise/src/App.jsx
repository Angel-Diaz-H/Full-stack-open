/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
const App = () => {
  const course = {
    name: 'Half Stack application development',
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
      <Header course = {course} />
      <Content course = {course}/>
      <Total course = {course} />
    </div>
  )
}
//First idea: <Total sum = {parts.reduce((sum, part) => sum + part.exercises, 0)} />

const Header = (props) => {
  return (
    <>
      <h1>
        {props.course.name}
      </h1>
    </>
  )
}

const Content = (props) => {
  return(
    <>
      {props.course.parts.map(valor => <Part part = {valor.name} exercises = {valor.exercises}/>)}
    </>
  )
};
//I disabled jsx-key because I am still learning it.

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Total = (props) => {
  const total = props.course.parts.reduce((sum, part) => sum + part.exercises, 0)
  //Method: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  return (
    <>
    <p>
      Number of exercises {total}
    </p>
    </>
  )
}

export default App