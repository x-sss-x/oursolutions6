import React from "react";
import { Story } from "@storybook/react";
import CustomerRequesting, { CustomerRequestingProps } from "../components/CustomerRequesting";
import ProfileIcon from "../../public/Images/Profile/profile.png";

export default {
  title: "Components/CustomerRequesting",
  component: CustomerRequesting,
};

const Template: Story<CustomerRequestingProps> = (args) => <CustomerRequesting {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSrc: ProfileIcon,
 
};