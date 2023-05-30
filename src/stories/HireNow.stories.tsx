import { Meta, Story } from '@storybook/react';
import HireNow, {HireNowProps } from '../components/HireNow';


const meta: Meta<HireNow> = {
  title: 'Categories/HireNow',
  component:HireNow,
};

export default meta;

export const Default: Story<HireNowProps> = (args) => <HireNow {...args} />;

Default.args = {
 text:'$50/day',
};