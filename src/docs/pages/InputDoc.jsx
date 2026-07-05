import { useState } from "react";
import { Page } from "../Page";
import { Example } from "../Example";
import { PropsTable } from "../PropsTable";
import { Input } from "../../index";

function Controlled() {
  const [value, setValue] = useState("");
  return (
    <div style={{ width: 320 }}>
      <Input label="Email" placeholder="you@example.com" value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}

export default function InputDoc() {
  return (
    <Page title="Input" lead="Text field with label, helper/error text, error state, and a multiline mode.">
      <Example
        title="Basic"
        code={`const [value, setValue] = useState("");
<Input label="Email" placeholder="you@example.com"
  value={value} onChange={(e) => setValue(e.target.value)} />`}
      >
        <Controlled />
      </Example>

      <Example
        title="Helper & error"
        code={`<Input label="Username" helperText="Publicly visible" />
<Input label="Email" value="nope" error="Enter a valid email" />`}
      >
        <div style={{ display: "grid", gap: 16, width: 320 }}>
          <Input label="Username" helperText="Publicly visible" placeholder="jane" />
          <Input label="Email" value="nope" error="Enter a valid email" readOnly />
        </div>
      </Example>

      <Example
        title="Multiline & disabled"
        code={`<Input label="Bio" multiline placeholder="A short bio…" />
<Input label="Locked" value="Read only" disabled />`}
      >
        <div style={{ display: "grid", gap: 16, width: 320 }}>
          <Input label="Bio" multiline placeholder="A short bio…" />
          <Input label="Locked" value="Read only" disabled />
        </div>
      </Example>

      <h2>Props</h2>
      <PropsTable
        rows={[
          { name: "label", type: "ReactNode", description: "Field label." },
          { name: "value / onChange", type: "string / function", description: "Controlled value + change handler." },
          { name: "type", type: "string", default: "'text'", description: "Native input type." },
          { name: "helperText", type: "ReactNode", description: "Helper text below the field." },
          { name: "error", type: "ReactNode", description: "Error message; also sets the error state." },
          { name: "multiline", type: "boolean", default: "false", description: "Render a <textarea>." },
          { name: "required", type: "boolean", default: "false", description: "Adds a required indicator." },
          { name: "disabled", type: "boolean", default: "false", description: "Disables the field." },
        ]}
      />
    </Page>
  );
}
