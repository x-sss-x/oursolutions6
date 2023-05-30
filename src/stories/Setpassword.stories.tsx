import { Meta, Story } from '@storybook/react';
import Setpassword, { SetpasswordProps } from '../components/Setpassword';


const meta: Meta<Setpassword> = {
  title: 'Categories/Setpassword',
  component:Setpassword,
};

export default meta;

export const Default: Story<SetpasswordProps> = (args) => <Setpassword {...args} />;

Default.args = {
 text: 'Set new password',
};