import type { Meta, StoryObj } from '@storybook/react';
import Inputs, { InputsProps } from '../components/Inputs';

const meta: Meta<typeof Inputs> = {
  title: 'Components/Inputs',
  component: Inputs,
};

export default meta;

type Story = StoryObj<typeof Inputs>;

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

  export const Age: Story = {
    args: {
      placeholder: "Age",
      inputsVariant: "age",
  },
  };

  
  export const Address: Story = {
    args: {
      placeholder: "Address",
      inputsVariant: "address",
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
  
export const Specialization : Story = {
args : {
  placeholder: 'Specialization',
  inputsVariant: 'specialization' as const,
},
};
export const idproff : Story = {
  args : {
    placeholder: 'idproff',
    inputsVariant: 'idproff' as const,
  },
  };