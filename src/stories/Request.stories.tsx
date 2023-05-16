import type { Meta, StoryObj } from "@storybook/react";
import Request from "../components/Request";

const meta: Meta<typeof Request> = {
  title: "components/ Request",
  component:  Request,
};

//exporting meta of button story
export default meta;

type Story = StoryObj<typeof Request>;

//exporting primary varient of button
export const  accept: Story = {
  args: {
    varient: " accepted",
    children: "   Accept   ",
  },
  argTypes: {},
};

export const reject : Story = {
    args: {
      varient: "rejected",
      children: " Reject ",
    },
    argTypes: {},
  };