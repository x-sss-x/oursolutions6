import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button, { ButtonProps } from "../components/FeebBackButton";

export default {
  title: 'components/feedback/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args: ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Click Me',
};

export const PCVariant = Template.bind({});
PCVariant.args = {
  text: 'PC Button',
  pcWidth: '800px',
  pcHeight: '600px',
  textSize: '24px',
};