import { useState } from "react";
import { Page } from "../Page";
import { Example } from "../Example";
import { PropsTable } from "../PropsTable";
import { Modal, Button } from "../../index";

function Demo({ size }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open {size} modal</Button>
      <Modal isOpen={open} onClose={() => setOpen(false)} title="Confirm action" size={size}>
        <p>Press Escape, click the backdrop, or the × to close.</p>
        <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 16 }}>
          <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="danger" onClick={() => setOpen(false)}>Confirm</Button>
        </div>
      </Modal>
    </>
  );
}

export default function ModalDoc() {
  return (
    <Page title="Modal" lead="Centered dialog with overlay, size options, Escape-to-close, body scroll lock, and dialog a11y roles.">
      <Example
        title="Basic"
        code={`const [open, setOpen] = useState(false);
<Button onClick={() => setOpen(true)}>Open</Button>
<Modal isOpen={open} onClose={() => setOpen(false)} title="Confirm action">
  <p>Modal content…</p>
</Modal>`}
      >
        <Demo size="md" />
      </Example>

      <Example
        title="Sizes"
        code={`<Modal size="sm" … />
<Modal size="lg" … />`}
      >
        <Demo size="sm" />
        <Demo size="lg" />
      </Example>

      <h2>Props</h2>
      <PropsTable
        rows={[
          { name: "isOpen", type: "boolean", description: "Controls visibility." },
          { name: "onClose", type: "function", description: "Called on ×, backdrop, or Escape." },
          { name: "title", type: "ReactNode", description: "Header title." },
          { name: "size", type: "'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: "Dialog width." },
          { name: "closeOnOverlay", type: "boolean", default: "true", description: "Close when the backdrop is clicked." },
          { name: "showClose", type: "boolean", default: "true", description: "Show the × button." },
        ]}
      />
    </Page>
  );
}
