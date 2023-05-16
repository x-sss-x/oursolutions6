import type { Meta, StoryObj } from "@storybook/react";
import Update from "../components/Update";

const meta: Meta<typeof Update> = {
  title: "components/Update",
  component: Update,
};

//exporting meta of button story
export default meta;

type Story = StoryObj<typeof Update>;

//exporting primary varient of button
export const Updates: Story = {
  args: {
    varient: "Updates",
    children: "Update Profile",
  },
  argTypes: {},
};

