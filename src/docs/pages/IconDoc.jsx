import { Page } from "../Page";
import { Example } from "../Example";
import { PropsTable } from "../PropsTable";
import { Icon } from "../../index";
import { ICON_NAMES } from "../../components/Icon/icons";

export default function IconDoc() {
  return (
    <Page title="Icon" lead="Inline SVG icons from a built-in registry. They use currentColor, so they inherit text color and scale by the size prop.">
      <Example
        title="Usage"
        code={`<Icon name="check" size={24} />
<Icon name="trash" size={20} />
<Icon name="search" size={20} />`}
      >
        <Icon name="check" size={24} />
        <Icon name="trash" size={20} />
        <Icon name="search" size={20} />
        <Icon name="user" size={20} />
      </Example>

      <Example
        title="Inherits color"
        code={`<span style={{ color: "var(--color-error)" }}>
  <Icon name="error" size={22} />
</span>`}
      >
        <span style={{ color: "var(--color-primary)" }}><Icon name="info" size={22} /></span>
        <span style={{ color: "var(--color-success)" }}><Icon name="success" size={22} /></span>
        <span style={{ color: "var(--color-warning)" }}><Icon name="warning" size={22} /></span>
        <span style={{ color: "var(--color-error)" }}><Icon name="error" size={22} /></span>
      </Example>

      <Example title="All icons" description="The complete built-in set." padded>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(92px, 1fr))", gap: 12, width: "100%" }}>
          {ICON_NAMES.map((name) => (
            <div key={name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, padding: 12, border: "1px solid var(--border-muted)", borderRadius: 10 }}>
              <Icon name={name} size={22} />
              <span style={{ fontSize: 11, color: "var(--text-secondary)" }}>{name}</span>
            </div>
          ))}
        </div>
      </Example>

      <h2>Props</h2>
      <PropsTable
        rows={[
          { name: "name", type: "string", description: "Icon key from the registry (required)." },
          { name: "size", type: "number | string", default: "20", description: "Width & height in px." },
          { name: "strokeWidth", type: "number", default: "2", description: "SVG stroke width." },
          { name: "title", type: "string", description: "Accessible label; omit for decorative icons." },
        ]}
      />
    </Page>
  );
}
