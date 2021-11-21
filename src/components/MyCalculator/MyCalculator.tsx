import React from "react";
/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from 'twin.macro'

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

  const styles = {
    btn: tw`w-20 h-20 border-2 border-gray-800 text-5xl cursor-pointer hover:text-white hover:bg-gray-400`
  }
  
  return (
    <div id="calculator" tw="border-4 border-gray-800 w-80 box-content">
      <div tw="w-full bg-gray-800 text-white p-2.5 box-border text-3xl h-20 flex justify-end items-center" id="display">{replaceSigns(curExpr)}</div>

      <div id="buttons" tw="flex flex-wrap">
        <button value="C" css={styles.btn} tw="w-40 bg-red-800" id="clear" onClick={handleClear}>Clear</button>
        <button value="/" css={styles.btn} tw="bg-gray-400" id="divide" onClick={handleOperators}>{DEVIDE_SIGN}</button>
        <button value="*" css={styles.btn} tw="bg-gray-400" id="multiply" onClick={handleOperators}>{MULTIPLY_SIGN}</button>

        <button value="7" css={styles.btn} id="seven" onClick={handleNumbers}>7</button>
        <button value="8" css={styles.btn} id="eight" onClick={handleNumbers}>8</button>
        <button value="9" css={styles.btn} id="nine" onClick={handleNumbers}>9</button>
        <button value="-" css={styles.btn} tw="bg-gray-400" id="subtract" onClick={handleOperators}>-</button>

        <button value="4" css={styles.btn} id="four" onClick={handleNumbers}>4</button>
        <button value="5" css={styles.btn} id="five" onClick={handleNumbers}>5</button>
        <button value="6" css={styles.btn} id="six" onClick={handleNumbers}>6</button>
        <button value="+" css={styles.btn} tw="bg-gray-400" id="add" onClick={handleOperators}>+</button>

        <button value="1" css={styles.btn} id="one" onClick={handleNumbers}>1</button>
        <button value="2" css={styles.btn} id="two" onClick={handleNumbers}>2</button>
        <button value="3" css={styles.btn} id="three" onClick={handleNumbers}>3</button>

        <button css={styles.btn} tw="h-40 bg-blue-900" id="equals" onClick={handleCalculate}>=</button>
        <button value="0" css={styles.btn} tw="w-40 -my-20" id="zero" onClick={handleNumbers}>0</button>
        <button css={styles.btn} tw="-my-20" id="decimal" onClick={handleDecimal}>.</button>
      </div>
    </div>
  );
}

export default MyCalculator;