
import { Meta, Story } from '@storybook/react';
import Forgotpasserror, {ForgotpasserrorProps } from '../components/Forgotpasserror';


const meta: Meta<Forgotpasserror> = {
  title: 'Categories/Forgotpasserror',
  component:Forgotpasserror,
};

export default meta;

export const Default: Story<ForgotpasserrorProps> = (args) => <Forgotpasserror {...args} />;

