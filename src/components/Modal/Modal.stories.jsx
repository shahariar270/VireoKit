import { useState } from "react";
import { Modal } from ".";
import Button from "../Buttons";

export default {
  title: "Overlays/Modal",
  component: Modal,
  tags: ["autodocs"],
  args: { title: "Confirm action", size: "md" },
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "md", "lg", "xl"] },
  },
};

export const Playground = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal {...args} isOpen={open} onClose={() => setOpen(false)}>
          <p>Are you sure you want to continue? This action can be undone later.</p>
          <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 16 }}>
            <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="danger" onClick={() => setOpen(false)}>Confirm</Button>
          </div>
        </Modal>
      </>
    );
  },
};
