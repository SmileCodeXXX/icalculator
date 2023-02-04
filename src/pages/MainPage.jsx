import { useState } from "react";


const MainPage = () => {
  const [displayDigit, setDisplayDigit] = useState(0);
  const [result, setResult] = useState(null);
  /*
  const [numberKeys, setNumberKeys] = useState([
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ]);
  //const [topKeys, setTopKeys] = useState(["AC", "+/-", "%", "/"]);
*/
  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayDigit("");
  };

  const createNumberKeys = () => {
    const digitKeys = [];
    for (let i = 1; i < 10; i++) {
      digitKeys.push(<button key={i}>{i}</button>);
    }
    return digitKeys;
  };

  return (
    <div className="iCalculator">
        {/**display number when keybis pressed */}
        <div className="display">
          <p>{result === null ? displayDigit : result}</p>
        </div>
        {/*the button keys */}
        <div className="topKeys">
          <button>AC</button>
          <button>+/-</button>
          <button>%</button>
          <button className="orange">/</button>
        </div>

        <div className="buttomKeys">
          <div className="operationKeys">
            <button className="orange">x</button>
            <button className="orange">-</button>
            <button className="orange">+</button>
            <button className="orange">=</button>
          </div>
          <div className="digitKeys">
          {createNumberKeys()}
          <button className="equal">0</button>
          <button>.</button>
          </div>
        </div>
    </div>
  );
};

export default MainPage;
