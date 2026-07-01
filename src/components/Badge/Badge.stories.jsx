import { Badge } from ".";

export default {
  title: "Primitives/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: { children: "Badge", variant: "default", solid: false, dot: false },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "success", "warning", "error", "info"],
    },
  },
};

export const Playground = {};

export const Tints = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
};

export const Solid = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Badge variant="success" solid dot>Paid</Badge>
      <Badge variant="warning" solid dot>Pending</Badge>
      <Badge variant="error" solid dot>Failed</Badge>
    </div>
  ),
};
