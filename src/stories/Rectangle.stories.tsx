import React from 'react';
import { Story, Meta } from '@storybook/react';

import Rectangle from '../components/Reactangle';

export default {
  title: 'desrcipition',
  component: Rectangle,
} as Meta;

const Template: Story = () => <Rectangle />;

export const Default = Template.bind({});
Default.args = {};