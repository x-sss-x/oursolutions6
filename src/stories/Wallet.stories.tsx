import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Story } from "@storybook/react";
import WalletButton from "../components/Wallet";

// Create a query client
const queryClient = new QueryClient();

export default {
  title: "Components/WalletButton",
  component: WalletButton,
} as const;

const Template: Story = () => (
  <QueryClientProvider client={queryClient}>
    <WalletButton />
  </QueryClientProvider>
);

export const Default = Template.bind({});