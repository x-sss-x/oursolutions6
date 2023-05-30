import { Meta, Story } from '@storybook/react';
import Forgot, { ForgotProps } from '../components/Forgot';


const meta: Meta<ForgotProps> = {
  title: 'Categories/Forgot',
  component: Forgot,
};

export default meta;

export const Default: Story<ForgotProps> = (args) => <Forgot {...args} />;

Default.args = {
 text: 'Forgot password ?',
};