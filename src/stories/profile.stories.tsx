import React from 'react';
import ProfilePage from '../components/profile';
export default {
  title: 'Profile Page',
  component: ProfilePage,
};

const Template = (args) => <ProfilePage {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Varshitha',
  email: 'varshitha@example.com',
  password:'*******',
  onSubmit: (data) => console.log(data),
};