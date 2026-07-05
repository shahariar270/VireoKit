import { Popover } from ".";

export default {
  title: "Overlays/Popover",
  component: Popover,
  tags: ["autodocs"],
  args: { label: "Hover me", trigger: "hover", align: "left" },
  argTypes: {
    trigger: { control: "inline-radio", options: ["hover", "click"] },
    align: { control: "inline-radio", options: ["left", "right"] },
  },
};

export const Playground = {
  render: (args) => (
    <div style={{ padding: 40 }}>
      <Popover {...args}>
        <strong>Popover title</strong>
        <p style={{ margin: "6px 0 0" }}>Some helpful contextual content.</p>
      </Popover>
    </div>
  ),
};
