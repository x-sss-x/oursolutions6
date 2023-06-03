import React from 'react';
import { Meta, Story } from '@storybook/react';

import ProfilePicture from '../components/Profilepic';

export default {
  title: 'Profile Picture',
  component: ProfilePicture,
} as Meta;

const Template: Story = () => <ProfilePicture />;

export const Default = Template.bind({});