import Tab from ".";

const tabs = [
  { label: "Overview", content: <p>Overview panel content.</p> },
  { label: "Activity", content: <p>Activity panel content.</p> },
  { label: "Settings", content: <p>Settings panel content.</p> },
];

export default {
  title: "Navigation/Tab",
  component: Tab,
  tags: ["autodocs"],
  args: { tabs, variant: "pills" },
  argTypes: {
    variant: { control: "inline-radio", options: ["pills", "underline"] },
  },
};

export const Playground = {};

export const Underline = {
  args: { variant: "underline" },
};
