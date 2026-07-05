import { Loading } from ".";

export default {
  title: "Feedback/Loading",
  component: Loading,
  tags: ["autodocs"],
  args: { size: "md", label: "" },
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
  },
};

export const Playground = {
  render: (args) => (
    <div style={{ height: 160 }}>
      <Loading {...args} />
    </div>
  ),
};

export const Sizes = {
  render: () => (
    <div style={{ display: "flex", gap: 40, alignItems: "center", height: 120 }}>
      <Loading size="sm" />
      <Loading size="md" />
      <Loading size="lg" label="Loading…" />
    </div>
  ),
};
