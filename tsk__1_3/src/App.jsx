const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      <p>
        {props.name} ----- {props.ex}
      </p>
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <p>Total number of exercises = {props.tot_qty}</p>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <>
      <Header course={course} />
      <Content name={part1.name} ex={part1.exercises} />
      <Content name={part2.name} ex={part2.exercises} />
      <Content name={part3.name} ex={part3.exercises} />
      <Total tot_qty={part1.exercises + part2.exercises + part3.exercises} />
    </>
  );
};

export default App;
