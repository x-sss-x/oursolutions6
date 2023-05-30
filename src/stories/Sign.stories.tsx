import { Story } from '@storybook/react';
import Sign from '../components/Sign';


export default {
  title: 'Profile',
  component: Sign,
};

const Template: Story = (args) => <Sign {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'varshitha',
  email: 'varshitha@example.com',
  customerId: '1234567890',
};