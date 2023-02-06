import { useState } from "react";


const MainPage = () => {
  const [displayCal, setDisplayCal] = useState('');
  const [result, setResult] = useState('');
  
  const [operator, setOperator] = useState(["AC", "+/-", "%", "/"]);

  const updateCal = value => {
    setDisplayCal(displayCal + value)
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
          <p>
            {result ? <span>0</span> : result}
            { displayCal || '0'}
          </p>
        </div>
        {/*the button keys */}
        <div className="topKeys">
          <button>AC</button>
          <button>+/-</button>
          <button onClick={()=>updateCal('%')}>%</button>
          <button className="orange" onClick={()=>updateCal('/')}>/</button>
        </div>

        <div className="buttomKeys">
          <div className="operationKeys">
            <button className="orange" onClick={()=>updateCal('x')}>x</button>
            <button className="orange" onClick={()=>updateCal('-')}>-</button>
            <button className="orange" onClick={()=>updateCal('+')}>+</button>
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
