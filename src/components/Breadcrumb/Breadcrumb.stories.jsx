import { MemoryRouter } from "react-router-dom";
import { Breadcrumb } from ".";

export default {
  title: "Navigation/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/orders/2026/details"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const FromRoute = {};

export const ExplicitItems = {
  args: {
    items: [
      { label: "Home", to: "/" },
      { label: "Orders", to: "/orders" },
      { label: "Details" },
    ],
  },
};
