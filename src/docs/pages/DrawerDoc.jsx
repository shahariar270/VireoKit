import { useState } from "react";
import { Page } from "../Page";
import { Example } from "../Example";
import { PropsTable } from "../PropsTable";
import { Drawer, Button, Input } from "../../index";

function Demo({ position }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open {position}</Button>
      <Drawer isOpen={open} onClose={() => setOpen(false)} title="Filters" position={position}>
        <div style={{ display: "grid", gap: 12 }}>
          <Input label="Search" placeholder="Keyword…" />
          <Button onClick={() => setOpen(false)}>Apply</Button>
        </div>
      </Drawer>
    </>
  );
}

export default function DrawerDoc() {
  return (
    <Page title="Drawer" lead="Off-canvas panel that slides in from the left or right, with overlay and Escape-to-close.">
      <Example
        title="Position"
        code={`const [open, setOpen] = useState(false);
<Button onClick={() => setOpen(true)}>Open</Button>
<Drawer isOpen={open} onClose={() => setOpen(false)} title="Filters" position="right">
  …
</Drawer>`}
      >
        <Demo position="right" />
        <Demo position="left" />
      </Example>

      <h2>Props</h2>
      <PropsTable
        rows={[
          { name: "isOpen", type: "boolean", description: "Controls visibility." },
          { name: "onClose", type: "function", description: "Called on ✕, overlay, or Escape." },
          { name: "title", type: "ReactNode", description: "Header title." },
          { name: "position", type: "'left' | 'right'", default: "'right'", description: "Edge to slide from." },
          { name: "showClose", type: "boolean", default: "true", description: "Show the close button." },
        ]}
      />
    </Page>
  );
}
