const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} ----- {props.exercise}
      </p>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      <Part part={props.partAr[0]} exercise={props.execAr[0]} />
      <Part part={props.partAr[1]} exercise={props.execAr[1]} />
      <Part part={props.partAr[2]} exercise={props.execAr[2]} />
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
  const partAr = [
    "Fundamentals of React",
    "Using props to pass data",
    "State of a component",
  ];
  const execAr = [10, 7, 14];

  return (
    <>
      <Header course={course} />
      <Content partAr={partAr} execAr={execAr} />
      <Total tot_qty={execAr[0] + execAr[1] + execAr[2]} />
    </>
  );
};

export default App;
