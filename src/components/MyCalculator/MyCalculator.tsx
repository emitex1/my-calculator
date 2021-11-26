import React from "react";
/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from 'twin.macro'
import {css} from '@emotion/react'
import Button from "../Button/Button";

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
    <>
      <h1 css={[tw`text-center text-6xl animate-pulse`, css`font-family: digital-7`]}>My Calculator</h1>

      <div id="calculator" css={[tw`border-0 mx-auto p-1`, css`width: 21rem`]}>
        <div css={[tw`w-full bg-white text-gray-700 p-2.5 box-border text-5xl h-20 flex justify-end items-center`, css`font-family: digital-7`]} id="display">{replaceSigns(curExpr)}</div>

        <div id="buttons" tw="flex justify-center flex-wrap bg-white">
          <Button type="reset" label="Clear" tw="w-40" onClick={handleClear} />
          <Button type="operator" label={DEVIDE_SIGN} value="/" onClick={handleOperators} />
          <Button type="operator" label={MULTIPLY_SIGN} value="*" onClick={handleOperators} />

          <Button type="number" label="7" onClick={handleNumbers} />
          <Button type="number" label="8" onClick={handleNumbers} />
          <Button type="number" label="9" onClick={handleNumbers} />
          <Button type="operator" label="-" onClick={handleOperators} />

          <Button type="number" label="4" onClick={handleNumbers} />
          <Button type="number" label="5" onClick={handleNumbers} />
          <Button type="number" label="6" onClick={handleNumbers} />
          <Button type="operator" label="+" onClick={handleOperators} />

          <Button type="number" label="1" onClick={handleNumbers} />
          <Button type="number" label="2" onClick={handleNumbers} />
          <Button type="number" label="3" onClick={handleNumbers} />

          <Button type="equal" label="=" tw="h-40" onClick={handleCalculate} />
          <Button type="number" label="0" tw="w-40 -my-20 -mx-10" onClick={handleNumbers} />
          <Button type="number" label="." tw="-my-20 mx-10" onClick={handleDecimal} />
        </div>
      </div>

      <h1 css={[tw`text-center text-lg text-gray-400 cursor-pointer hover:animate-ping`]}>
        <a href="http://www.Armoun.com" target="_blank" rel="noreferrer">Developed By: EmIT</a>
      </h1>
    </>
  );
}

export default MyCalculator;
