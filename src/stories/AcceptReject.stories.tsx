import type { Meta, StoryObj } from "@storybook/react";
import AcceptReject from "../components/AcceptReject";

const meta: Meta<typeof AcceptReject> = {
  title: "componentsAcceptReject",
  component: AcceptReject,
};

//exporting meta of button story
export default meta;

type Story = StoryObj<typeof Request>;

//exporting primary varient of button
export const  accept: Story = {
  args: {
    varient: "accepted",
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