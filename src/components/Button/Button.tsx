import React from "react";
/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from 'twin.macro'
import {css} from '@emotion/react'

interface ButtonProps {
  label: string;
  type: "number" | "operator" | "equal" | "reset";
  value?: string;
  onClick: (e: any) => void;
}

const Button = (props: ButtonProps) => {
  let {label, type, value, onClick, ...restProps} = props;
  if(!value)
    value = label;

  const styles = {
    btn: [
      tw`w-18 h-18 border-0 m-1 rounded-md shadow-inner text-5xl
      cursor-pointer hover:text-white
      transition-all duration-700`,
      css`box-shadow: inset 0px 0px 8px 2px rgb(98 34 112 / 10%);`
    ],
    btnNumber: tw`bg-purple-200 hover:bg-purple-300`,
    btnOperator: tw`bg-indigo-200 hover:bg-indigo-300`,
    btnEqual: tw`bg-green-100 hover:bg-green-200`,
    btnReset: tw`bg-red-300 hover:bg-red-400`
  }

  return (
    <button value={value} onClick={onClick} {...restProps}
      css={[styles.btn,
        type==='number' && styles.btnNumber,
        type==='operator' && styles.btnOperator,
        type==='equal' && styles.btnEqual,
        type==='reset' && styles.btnReset
      ]}
    >
      {label}
    </button>
  )
}

export default Button
