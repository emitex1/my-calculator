import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonDocumentations from './Button.docs.mdx';

import Button from '../components/Button/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    count: {
      control: "number",
      // control: "range",
      // control: { type: 'range', min: 0, max: 9, step: 1 }
    },
  },
  parameters:{
    layout:'centered',
    docs: {
      page: ButtonDocumentations,
    }
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Number = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Number.args = {
  label: '1',
  type: 'number'
};

export const Operator = Template.bind({});
Operator.args = {
  label: '+',
  type: 'operator'
};

export const Equal = Template.bind({});
Equal.args = {
  label: '=',
  type: 'equal'
};

export const Reset = Template.bind({});
Reset.args = {
  label: 'C',
  type: 'reset',
};

//////////////////////////////////////////////////////////////////

export const All = () => {
  return (
    <>
      <Button type="number" label="1" onClick={() => {}} />
      <Button type="number" label="2" onClick={() => {}} />
      <Button type="number" label="3" onClick={() => {}} />
      <Button type="number" label="4" onClick={() => {}} />

      <br/>

      <Button type="operator" label="+" onClick={() => {}} />
      <Button type="operator" label="-" onClick={() => {}} />
      <Button type="operator" label="*" onClick={() => {}} />
      <Button type="operator" label="/" onClick={() => {}} />

      <br />

      <Button type="equal" label="=" onClick={() => {}} />
      <Button type="reset" label="C" onClick={() => {}} />
    </>
  )
}

//////////////////////////////////////////////////////////////////

interface RangeTemplateArgsType {
  count: number;
}

const RangeTemplate: ComponentStory<JSX.Element[]> = (args: RangeTemplateArgsType) => {
  const count = Math.min(9, args.count);

  const arr = [];
  for(let i=0; i<=count; ++i)
    arr.push(i.toString());

  const list = arr.map( (n: string) => (
    <Button type="number" label={n} onClick={()=>{}} />
  ));
  return list;
}

export const Range = RangeTemplate.bind({});
Range.args = {
  count: '5'
};