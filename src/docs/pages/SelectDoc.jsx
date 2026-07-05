import { useState } from "react";
import { Page } from "../Page";
import { Example } from "../Example";
import { PropsTable } from "../PropsTable";
import { Select } from "../../index";

const options = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
  { label: "Angular", value: "angular" },
];

function Controlled() {
  const [value, setValue] = useState();
  return (
    <div style={{ width: 300 }}>
      <Select options={options} value={value} onChange={setValue} placeholder="Pick a framework…" />
    </div>
  );
}

export default function SelectDoc() {
  return (
    <Page title="Select" lead="Accessible custom dropdown with keyboard navigation and click-outside close — no external dependency.">
      <Example
        title="Basic"
        description="Arrow keys to move, Enter to select, Esc to close."
        code={`const options = [{ label: "React", value: "react" }, /* … */];
const [value, setValue] = useState();
<Select options={options} value={value} onChange={setValue} placeholder="Pick…" />`}
      >
        <Controlled />
      </Example>

      <Example
        title="Disabled"
        code={`<Select options={options} disabled placeholder="Unavailable" />`}
      >
        <div style={{ width: 300 }}>
          <Select options={options} disabled placeholder="Unavailable" />
        </div>
      </Example>

      <h2>Props</h2>
      <PropsTable
        rows={[
          { name: "options", type: "{ label, value }[]", description: "Selectable options." },
          { name: "value", type: "string | number", description: "Selected value (controlled)." },
          { name: "onChange", type: "(value, option) => void", description: "Fires on selection." },
          { name: "placeholder", type: "string", default: "'Select…'", description: "Empty-state text." },
          { name: "disabled", type: "boolean", default: "false", description: "Disables the control." },
        ]}
      />
    </Page>
  );
}
