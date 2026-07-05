import { Page } from "../Page";
import { Example } from "../Example";
import { PropsTable } from "../PropsTable";
import { Breadcrumb } from "../../index";

export default function BreadcrumbDoc() {
  return (
    <Page title="Breadcrumb" lead="Trail of links to the current route. Auto-derives from the URL, or pass explicit items.">
      <Example
        title="Explicit items"
        description="Provide your own trail; the last item is the current page."
        code={`<Breadcrumb
  items={[
    { label: "Home", to: "/" },
    { label: "Orders", to: "/orders" },
    { label: "Details" },
  ]}
/>`}
      >
        <Breadcrumb
          items={[
            { label: "Home", to: "/" },
            { label: "Orders", to: "/orders" },
            { label: "Details" },
          ]}
        />
      </Example>

      <Example
        title="Custom separator"
        code={`<Breadcrumb separator="›" items={[…]} />`}
      >
        <Breadcrumb
          separator="›"
          items={[
            { label: "Docs", to: "/" },
            { label: "Components", to: "/" },
            { label: "Breadcrumb" },
          ]}
        />
      </Example>

      <p style={{ marginTop: 16 }}>
        With no <code>items</code>, it builds the trail from the current route path automatically
        (requires a router context).
      </p>

      <h2>Props</h2>
      <PropsTable
        rows={[
          { name: "items", type: "{ label, to? }[]", description: "Explicit trail; omit to derive from the URL." },
          { name: "homeLabel", type: "string", default: "'Home'", description: "Root label when auto-deriving." },
          { name: "separator", type: "ReactNode", default: "'/'", description: "Separator between crumbs." },
        ]}
      />
    </Page>
  );
}
