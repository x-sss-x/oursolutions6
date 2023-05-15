import type { Meta, StoryObj } from '@storybook/react';
import Input, { InputsProps } from '../components/Inputs';

const meta: Meta<typeof Input> = {
  title: 'Components/Inputs',
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Default Inputs",
  },
};

export const Email: Story = {
  args: {
    placeholder: "Email",
    inputsVariant: "email",
  },
};

export const Username: Story = {
  args: {
    placeholder: "Username",
    inputsVariant: "username",
  },
};



export const PhoneNumber: Story = {
    args: {
      placeholder: "Phone Number",
      inputsVariant: "phoneNumber",
  },
  };

  export const IDproof: Story = {
    args: {
      placeholder: "IDproof",
      inputsVariant: "idproof",
  },
  };

  
  export const Address: Story = {
    args: {
      placeholder: "Address",
      inputsVariant: "address",
  },
  };
  export const Specialisation: Story = {
    args: {
      placeholder: "Specialisation",
     inputsVariant: "specialisation",
  },
  };

  
  export const Password: Story = {
    args: {
      placeholder: "********",
      inputsVariant: "password",
  },
  };

  export const ConfirmPassword: Story = {
    args: {
      placeholder: "********",
      inputsVariant: "password",
  },
  };