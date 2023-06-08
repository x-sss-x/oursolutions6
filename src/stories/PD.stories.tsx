import { Story, Meta } from '@storybook/react';
import PD from '../components/PD';

export default {
  title: 'pages/Editprofile/PD',
  component: PD,
} as Meta;

const Template: Story = () => <PD />;

export const Default = Template.bind({});