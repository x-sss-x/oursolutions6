import { Meta, Story } from '@storybook/react';
import LoginSuccessfully, {LoginSuccessfullyProps } from '../components/LoginSuccessfully';


const meta: Meta<LoginSuccessfully> = {
  title: 'Categories/LoginSuccessfully',
  component:LoginSuccessfully,
};

export default meta;

export const Default: Story<LoginSuccessfullyProps> = (args) => <LoginSuccessfully {...args} />;

Default.args = {
 text: 'Logged in successfully.',
};