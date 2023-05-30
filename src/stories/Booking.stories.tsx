import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Story } from "@storybook/react";
import BookingButton from "../components/Booking";

// Create a query client
const queryClient = new QueryClient();

export default {
  title: "Components/BookingButton",
  component: BookingButton,
} as const;

const Template: Story = () => (
  <QueryClientProvider client={queryClient}>
    <BookingButton />
  </QueryClientProvider>
);

export const Default = Template.bind({});