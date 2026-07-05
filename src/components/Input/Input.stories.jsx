import { useState } from "react";
import { Input } from ".";

export default {
  title: "Primitives/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    label: "Email",
    placeholder: "you@example.com",
  },
};

export const Playground = {
  render: (args) => {
    const [value, setValue] = useState("");
    return <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
  },
};

export const WithError = {
  args: { label: "Email", value: "not-an-email", error: "Enter a valid email" },
};

export const Multiline = {
  args: { label: "Notes", multiline: true, placeholder: "Write something…" },
};

export const Disabled = {
  args: { label: "Locked", value: "Read only", disabled: true },
};
