import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
//import ButtonDocumentations from './Button.docs.mdx';

import Button from '../components/Button/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
  parameters:{
    layout:'centered',
    /*docs: {
      page: ButtonDocumentations,
    }*/
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
