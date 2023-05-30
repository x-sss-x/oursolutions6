import { Meta, Story } from '@storybook/react';
import Createerror, {CreateerrorProps } from '../components/Createerror';


const meta: Meta<Createerror> = {
  title: 'Categories/Createerror',
  component:Createerror,
};

export default meta;

export const Default: Story<CreateerrorProps> = (args) => <Createerror {...args} />;

Default.args = {
 text: 'Ooops.something wrong ,try one more time',
};