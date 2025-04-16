import { useState } from "react";

const Header = (props) => {
  return <h1>Give Feedback</h1>;
};

const StatisticLine = (props) => {
  return (
    <p>
      {props.text} : {props.value}
    </p>
  );
};

const Statistics = (props) => {
  const allCount = props.goodCount + props.neutralCount + props.badCount;

  if (allCount === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    );
  }

  return (
    <>
      <StatisticLine text="good" value={props.goodCount} />
      <StatisticLine text="neutral" value={props.neutralCount} />
      <StatisticLine text="bad" value={props.badCount} />
      <StatisticLine text="all" value={allCount} />
      <StatisticLine
        text="average"
        value={(props.goodCount - props.badCount) / allCount}
      />
      <StatisticLine
        text="positive"
        value={`${(props.goodCount / allCount) * 100} %`}
      />
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
      <h2>Statistics</h2>
      <Statistics goodCount={good} neutralCount={neutral} badCount={bad} />
    </>
  );
};

export default App;
