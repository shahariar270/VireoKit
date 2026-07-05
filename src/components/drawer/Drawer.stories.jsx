import { useState } from "react";
import Drawer from ".";
import Button from "../Buttons";

export default {
  title: "Overlays/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  args: { title: "Filters", position: "right" },
  argTypes: {
    position: { control: "inline-radio", options: ["left", "right"] },
  },
};

export const Playground = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open drawer</Button>
        <Drawer {...args} isOpen={open} onClose={() => setOpen(false)}>
          <p>Drawer body content goes here.</p>
        </Drawer>
      </>
    );
  },
};
