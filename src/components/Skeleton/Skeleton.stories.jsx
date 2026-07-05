import { Skeleton } from ".";

export default {
  title: "Feedback/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  args: { variant: "text", animation: "pulse" },
  argTypes: {
    variant: { control: "inline-radio", options: ["text", "rect", "circle"] },
    animation: { control: "inline-radio", options: ["pulse", "wave", "none"] },
  },
};

export const Text = {
  args: { count: 3 },
  render: (args) => (
    <div style={{ width: 320 }}>
      <Skeleton {...args} />
    </div>
  ),
};

export const Shapes = {
  render: (args) => (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <Skeleton {...args} variant="circle" width={56} />
      <Skeleton {...args} variant="rect" width={200} height={100} />
    </div>
  ),
};

export const CardPlaceholder = {
  render: (args) => (
    <div style={{ width: 280, border: "1px solid var(--border-muted)", borderRadius: 12, padding: 16 }}>
      <Skeleton {...args} variant="rect" height={140} radius={10} />
      <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 14 }}>
        <Skeleton {...args} variant="circle" width={40} />
        <div style={{ flex: 1 }}>
          <Skeleton {...args} variant="text" count={2} />
        </div>
      </div>
    </div>
  ),
};
