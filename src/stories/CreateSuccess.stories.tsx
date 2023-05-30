import { Meta, Story } from '@storybook/react';
import CreateSuccess, {CreateSuccessProps } from '../components/CreateSuccess';


const meta: Meta<CreateSuccess> = {
  title: 'Categories/CreateSuccess',
  component:CreateSuccess,
};

export default meta;

export const Default: Story<CreateSuccessProps> = (args) => <CreateSuccess {...args} />;

Default.args = {
 text: 'Congratulations your account has been sucessfully created',
};