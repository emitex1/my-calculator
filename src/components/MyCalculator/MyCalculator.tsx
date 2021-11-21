import React from "react";
/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from 'twin.macro'
import {css} from '@emotion/react'

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
    btn: [
      tw`w-20 h-20 bg-purple-200 border-4 border-white rounded-md shadow-inner text-5xl cursor-pointer hover:text-white hover:bg-purple-300`,
      css`box-shadow: inset 0px 0px 8px 2px rgb(98 34 112 / 10%);`
    ]
  }
  
  return (
    <>
      <h1 css={[tw`text-center text-6xl`, css`font-family: digital-7`]}>My Calculator</h1>

      <div id="calculator" css={[tw`border-0 mx-auto p-1`, css`width: 21rem`]}>
        <div css={[tw`w-full bg-white text-gray-700 p-2.5 box-border text-5xl h-20 flex justify-end items-center`, css`font-family: digital-7`]} id="display">{replaceSigns(curExpr)}</div>

        <div id="buttons" tw="flex justify-center flex-wrap bg-white">
          <button value="C" css={styles.btn} tw="w-40 bg-red-300" onClick={handleClear}>Clear</button>
          <button value="/" css={styles.btn} tw="bg-indigo-200" onClick={handleOperators}>{DEVIDE_SIGN}</button>
          <button value="*" css={styles.btn} tw="bg-indigo-200" onClick={handleOperators}>{MULTIPLY_SIGN}</button>

          <button value="7" css={styles.btn} onClick={handleNumbers}>7</button>
          <button value="8" css={styles.btn} onClick={handleNumbers}>8</button>
          <button value="9" css={styles.btn} onClick={handleNumbers}>9</button>
          <button value="-" css={styles.btn} tw="bg-indigo-200" onClick={handleOperators}>-</button>

          <button value="4" css={styles.btn} onClick={handleNumbers}>4</button>
          <button value="5" css={styles.btn} onClick={handleNumbers}>5</button>
          <button value="6" css={styles.btn} onClick={handleNumbers}>6</button>
          <button value="+" css={styles.btn} tw="bg-indigo-200" onClick={handleOperators}>+</button>

          <button value="1" css={styles.btn} onClick={handleNumbers}>1</button>
          <button value="2" css={styles.btn} onClick={handleNumbers}>2</button>
          <button value="3" css={styles.btn} onClick={handleNumbers}>3</button>

          <button css={styles.btn} tw="h-40 bg-green-100" onClick={handleCalculate}>=</button>
          <button value="0" css={styles.btn} tw="w-40 -my-20 -mx-10" onClick={handleNumbers}>0</button>
          <button css={styles.btn} tw="-my-20 mx-10" onClick={handleDecimal}>.</button>
        </div>
      </div>

      <h1 css={[tw`text-center text-lg text-gray-400`]}>Developed By: <a href="http://www.Armoun.com" target="_blank" rel="noreferrer">EmIT</a></h1>
    </>
  );
}

export default MyCalculator;
