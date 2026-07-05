import { useState } from "react";
import { Select } from ".";

const options = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
  { label: "Angular", value: "angular" },
];

export default {
  title: "Primitives/Select",
  component: Select,
  tags: ["autodocs"],
  args: { options, placeholder: "Pick a framework…" },
};

export const Playground = {
  render: (args) => {
    const [value, setValue] = useState();
    return (
      <div style={{ width: 280 }}>
        <Select {...args} value={value} onChange={setValue} />
      </div>
    );
  },
};

export const Disabled = {
  args: { disabled: true },
  render: (args) => (
    <div style={{ width: 280 }}>
      <Select {...args} />
    </div>
  ),
};
