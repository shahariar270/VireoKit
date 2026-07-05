import { Page } from "../Page";
import { Example } from "../Example";
import { PropsTable } from "../PropsTable";
import { Popover } from "../../index";

export default function PopoverDoc() {
  return (
    <Page title="Popover" lead="Small floating panel anchored to a trigger. Opens on hover or click, aligns left or right, closes on outside click.">
      <Example
        title="Hover vs click"
        code={`<Popover label="Hover me" trigger="hover">Panel content</Popover>
<Popover label="Click me" trigger="click">Panel content</Popover>`}
      >
        <Popover label="Hover me" trigger="hover">
          <strong>Popover</strong>
          <p style={{ margin: "6px 0 0" }}>Contextual content on hover.</p>
        </Popover>
        <Popover label="Click me" trigger="click">
          <strong>Popover</strong>
          <p style={{ margin: "6px 0 0" }}>Click again or outside to close.</p>
        </Popover>
      </Example>

      <Example
        title="Align"
        code={`<Popover label="Right aligned" trigger="click" align="right">…</Popover>`}
      >
        <Popover label="Right aligned" trigger="click" align="right">
          <p style={{ margin: 0 }}>Aligned to the right edge.</p>
        </Popover>
      </Example>

      <h2>Props</h2>
      <PropsTable
        rows={[
          { name: "label", type: "ReactNode", description: "Trigger content." },
          { name: "trigger", type: "'hover' | 'click'", default: "'hover'", description: "How the panel opens." },
          { name: "align", type: "'left' | 'right'", default: "'left'", description: "Panel alignment." },
          { name: "children", type: "ReactNode", description: "Panel content." },
        ]}
      />
    </Page>
  );
}
