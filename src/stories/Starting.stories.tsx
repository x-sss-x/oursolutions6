import { Meta, Story } from '@storybook/react';
import Starting, { StartingProps } from '../components/Starting';


const meta: Meta<Starting> = {
  title: 'Categories/Starting',
  component:Starting,
};

export default meta;

export const Default: Story<StartingProps> = (args) => <Starting {...args} />;

Default.args = {
 text: 'WE WORK TO MAKE YOU HAPPY',

};