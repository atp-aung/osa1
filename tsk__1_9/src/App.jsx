import { useState } from "react";

const Header = (props) => {
  return <h1>Give Feedback</h1>;
};

const Statistics = (props) => {
  const allCount = props.goodCount + props.neutralCount + props.badCount;

  if (allCount === 0) {
    return (
      <>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </>
    );
  }

  return (
    <>
      <h2>Statistics</h2>
      <p>good: {props.goodCount}</p>
      <p>neutral: {props.neutralCount}</p>
      <p>bad: {props.badCount}</p>
      <p>all: {allCount}</p>
      <p>average: {(props.goodCount - props.badCount) / allCount}</p>
      <p>positive: {(props.goodCount / allCount) * 100} %</p>
    </>
  );
};

const Button = (props) => {
  return (
    <>
      <button onClick={props.clickOp}>{props.text}</button>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodClick = () => {
    setGood(good + 1);
  };

  const neutralClick = () => {
    setNeutral(neutral + 1);
  };

  const badClick = () => {
    setBad(bad + 1);
  };

  return (
    <>
      <Header />
      <Button clickOp={goodClick} text="good" />
      <Button clickOp={neutralClick} text="neutral" />
      <Button clickOp={badClick} text="bad" />
      <Statistics goodCount={good} neutralCount={neutral} badCount={bad} />
    </>
  );
};

export default App;
