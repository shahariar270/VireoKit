import { Link } from "react-router-dom";
import { Page } from "../Page";
import { CodeBlock } from "../CodeBlock";
import { PropsTable } from "../PropsTable";
import { Button } from "../../index";

export default function LayoutDoc() {
  return (
    <Page
      title="App Shell"
      lead="Layout, Sidebar, and Topbar compose a responsive admin shell — a fixed sidebar beside a scrollable main column, collapsing to an off-canvas menu under 768px."
    >
      <p>
        These components are full-viewport by design, so see them running in the{" "}
        <Link to="/demo">Live Demo</Link>. Compose them like this:
      </p>

      <CodeBlock
        code={`import { Layout, Sidebar, Topbar, Breadcrumb, Button } from "shahariar-design-system";

const [open, setOpen] = useState(false);

<Layout
  sidebar={
    <Sidebar
      logo="Acme Admin"
      items={[
        { key: "dashboard", label: "Dashboard", icon: "menu", onClick: () => {} },
        { key: "users", label: "Users", icon: "user", onClick: () => {} },
      ]}
      activeKey="dashboard"
      open={open}
      onClose={() => setOpen(false)}
    />
  }
  topbar={
    <Topbar onMenuClick={() => setOpen(true)} right={<Button size="sm">New</Button>}>
      <Breadcrumb />
    </Topbar>
  }
>
  <YourPageContent />
</Layout>`}
      />

      <div style={{ marginTop: 16 }}>
        <Link to="/demo">
          <Button>Open the live demo →</Button>
        </Link>
      </div>

      <h2>Layout props</h2>
      <PropsTable
        rows={[
          { name: "sidebar", type: "ReactNode", description: "The <Sidebar> element." },
          { name: "topbar", type: "ReactNode", description: "The <Topbar> element." },
          { name: "children", type: "ReactNode", description: "Main page content." },
        ]}
      />

      <h2>Sidebar props</h2>
      <PropsTable
        rows={[
          { name: "logo", type: "ReactNode", description: "Brand area at the top." },
          { name: "items", type: "{ key, label, icon?, href?, onClick? }[]", description: "Navigation items." },
          { name: "activeKey", type: "string", description: "Key of the active item." },
          { name: "footer", type: "ReactNode", description: "Bottom area (e.g. version, user)." },
          { name: "open / onClose", type: "boolean / function", description: "Mobile off-canvas state." },
        ]}
      />

      <h2>Topbar props</h2>
      <PropsTable
        rows={[
          { name: "children", type: "ReactNode", description: "Left slot (title / breadcrumb)." },
          { name: "right", type: "ReactNode", description: "Right slot (actions)." },
          { name: "onMenuClick", type: "function", description: "Shows a menu button (mobile) to open the sidebar." },
        ]}
      />
    </Page>
  );
}
