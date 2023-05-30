import { Meta, Story } from '@storybook/react';
import Checkemail, { CheckemailProps } from '../components/Checkemail';


const meta: Meta<Checkemail> = {
  title: 'Categories/Checkemail',
  component: Checkemail,
};

export default meta;

export const Default: Story<CheckemailProps> = (args) => <Checkemail {...args} />;

Default.args = {
 text: 'Check your email',
};