import Button from ".";

export default {
  title: "Primitives/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
    disabled: false,
    loading: false,
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger", "transparent"],
    },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    onClick: { action: "clicked" },
  },
};

export const Playground = {};

export const Variants = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <Button {...args} variant="primary">Primary</Button>
      <Button {...args} variant="secondary">Secondary</Button>
      <Button {...args} variant="danger">Danger</Button>
      <Button {...args} variant="transparent">Transparent</Button>
    </div>
  ),
};

export const Sizes = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
  ),
};

export const States = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12 }}>
      <Button {...args}>Default</Button>
      <Button {...args} loading>Loading</Button>
      <Button {...args} disabled>Disabled</Button>
    </div>
  ),
};
