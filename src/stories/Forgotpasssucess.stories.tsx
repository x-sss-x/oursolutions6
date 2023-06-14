import { Meta, Story } from '@storybook/react';
import Forgotpasssucess, {ForgotpasssucessProps } from '../components/Forgotpasssucess';


const meta: Meta<Forgotpasssucess> = {
  title: 'Categories/Forgotpasssucess',
  component:Forgotpasssucess,
};

export default meta;

export const Default: Story<ForgotpasssucessProps> = (args) => <Forgotpasssucess {...args} />;
