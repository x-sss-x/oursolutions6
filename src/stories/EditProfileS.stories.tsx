import { Story, Meta } from '@storybook/react';
import EditProfileS from '../components/EditProfileS';

export default {
  title: 'pages/Editprofile/Edit ProfileS',
  component: EditProfileS,
} as Meta;

const Template: Story = () => <EditProfileS />;

export const Default = Template.bind({});