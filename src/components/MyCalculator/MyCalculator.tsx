import React from "react";
import "./MyCalculator.scss";

const MyCalculator = () => {
  const [curExpr, setCurExpr] = React.useState('0');
  const [calculated, setCalculated] = React.useState(true);
  const DEVIDE_SIGN = '÷';
  const MULTIPLY_SIGN = '×';
  const endsWithOperator = /[+-/*]$/;
  //const endsWithDot = /\.$/
  const lastNumHasDot = /\.\d*$/
  
  const replaceSigns = (str: string) => {
    let readyStr = str || '';
    while(readyStr.indexOf('/') >= 0)
      readyStr = readyStr.replace("/", DEVIDE_SIGN);
    
    while(readyStr.indexOf('*') >= 0)
      readyStr = readyStr.replace("*", MULTIPLY_SIGN);

    return readyStr;
  }

  const handleClear = (e: any) => {
    setCurExpr('0');
  }

  const handleNumbers = (e: any) => {
    const num = e.target.value;
    console.log(curExpr, num, endsWithOperator.test(curExpr));
    setCurExpr(curExpr === "0" || calculated ? num : curExpr + num);
    setCalculated(false);
  }
  
  const handleOperators = (e: any) => {
    const opr = e.target.value;
    console.log(curExpr, opr, endsWithOperator.test(curExpr));
    if(opr !== '-' && endsWithOperator.test(curExpr)) {
      let tempExpr = curExpr.substr(0, curExpr.length - 1);
      
      // Remove the last operator, if there were 2 operators at the end of expression
      if(endsWithOperator.test(tempExpr))
        tempExpr = tempExpr.substr(0, tempExpr.length - 1);
      tempExpr += opr;
      setCurExpr(tempExpr);
    }
    else
      setCurExpr(curExpr + opr);
    setCalculated(false);
  }
  
  const handleDecimal = () => {
    if (! lastNumHasDot.test(curExpr))
      setCurExpr(curExpr + '.');
  }
  
  const handleCalculate = () => {
    let tempExpr = curExpr;

    if(endsWithOperator.test(curExpr)) {
      let tempExpr = curExpr.substr(0, curExpr.length - 1);
      
      // Remove the last operator, if there were 2 operators at the end of expression
      if(endsWithOperator.test(tempExpr))
        tempExpr = tempExpr.substr(0, tempExpr.length - 1);
      setCurExpr(tempExpr);
    }
    
    // eslint-disable-next-line no-eval
    let answer = eval(tempExpr);
    setCurExpr(answer.toString());
    setCalculated(true);
  }
  
  return (
    <div id="calculator">
      <div id="display">{replaceSigns(curExpr)}</div>
      
      <div id="buttons">
        <button value="C" id="clear" onClick={handleClear}>Clear</button>
        <button value="/" id="divide" onClick={handleOperators}>{DEVIDE_SIGN}</button>
        <button value="*" id="multiply" onClick={handleOperators}>{MULTIPLY_SIGN}</button>

        <button value="7" id="seven" onClick={handleNumbers}>7</button>
        <button value="8" id="eight" onClick={handleNumbers}>8</button>
        <button value="9" id="nine" onClick={handleNumbers}>9</button>
        <button value="-" id="subtract" onClick={handleOperators}>-</button>

        <button value="4" id="four" onClick={handleNumbers}>4</button>
        <button value="5" id="five" onClick={handleNumbers}>5</button>
        <button value="6" id="six" onClick={handleNumbers}>6</button>
        <button value="+" id="add" onClick={handleOperators}>+</button>

        <button value="1" id="one" onClick={handleNumbers}>1</button>
        <button value="2" id="two" onClick={handleNumbers}>2</button>
        <button value="3" id="three" onClick={handleNumbers}>3</button>

        <button value="0" id="zero" onClick={handleNumbers}>0</button>
        <button id="decimal" onClick={handleDecimal}>.</button>
        <button id="equals" onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
}

export default MyCalculator;
