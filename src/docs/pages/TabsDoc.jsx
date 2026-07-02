import { Page } from "../Page";
import { Example } from "../Example";
import { PropsTable } from "../PropsTable";
import { Tab } from "../../index";

const tabs = [
  { label: "Overview", content: <p style={{ margin: 0 }}>Overview panel content.</p> },
  { label: "Activity", content: <p style={{ margin: 0 }}>Activity panel content.</p> },
  { label: "Settings", content: <p style={{ margin: 0 }}>Settings panel content.</p> },
];

export default function TabsDoc() {
  return (
    <Page title="Tabs" lead="Tabbed panels in pill or underline styles, with disabled tabs and optional URL sync.">
      <Example
        title="Pills (default)"
        code={`const tabs = [{ label: "Overview", content: <A/> }, /* … */];
<Tab tabs={tabs} variant="pills" />`}
      >
        <Tab tabs={tabs} variant="pills" />
      </Example>

      <Example
        title="Underline"
        code={`<Tab tabs={tabs} variant="underline" />`}
      >
        <Tab tabs={tabs} variant="underline" />
      </Example>

      <h2>Props</h2>
      <PropsTable
        rows={[
          { name: "tabs", type: "{ label, content, disabled? }[]", description: "Tab definitions." },
          { name: "variant", type: "'pills' | 'underline'", default: "'pills'", description: "Visual style." },
          { name: "fullWidth", type: "boolean", default: "false", description: "Stretch to container width." },
          { name: "link", type: "boolean", default: "false", description: "Sync active tab with a ?tab= query param." },
        ]}
      />
    </Page>
  );
}
