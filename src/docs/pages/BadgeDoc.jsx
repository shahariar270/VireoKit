import { Page } from "../Page";
import { Example } from "../Example";
import { PropsTable } from "../PropsTable";
import { Badge } from "../../index";

export default function BadgeDoc() {
  return (
    <Page title="Badge" lead="Compact status or label pill with semantic colors, tinted or solid, with an optional dot.">
      <Example
        title="Tints"
        code={`<Badge variant="default">Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="info">Info</Badge>`}
      >
        <Badge variant="default">Default</Badge>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="error">Error</Badge>
        <Badge variant="info">Info</Badge>
      </Example>

      <Example
        title="Solid + dot"
        description="Great for statuses in tables and lists."
        code={`<Badge variant="success" solid dot>Paid</Badge>
<Badge variant="warning" solid dot>Pending</Badge>
<Badge variant="error" solid dot>Failed</Badge>`}
      >
        <Badge variant="success" solid dot>Paid</Badge>
        <Badge variant="warning" solid dot>Pending</Badge>
        <Badge variant="error" solid dot>Failed</Badge>
      </Example>

      <h2>Props</h2>
      <PropsTable
        rows={[
          { name: "variant", type: "'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'", default: "'default'", description: "Semantic color." },
          { name: "solid", type: "boolean", default: "false", description: "Solid fill instead of a tint." },
          { name: "dot", type: "boolean", default: "false", description: "Leading status dot." },
          { name: "children", type: "ReactNode", description: "Badge content." },
        ]}
      />
    </Page>
  );
}
