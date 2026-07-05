import { useState } from "react";
import { Layout } from ".";
import { Sidebar } from "../Sidebar";
import { Topbar } from "../Topbar";
import Button from "../Buttons";

const items = [
  { key: "dashboard", label: "Dashboard", icon: "menu", onClick: () => {} },
  { key: "users", label: "Users", icon: "user", onClick: () => {} },
  { key: "orders", label: "Orders", icon: "check", onClick: () => {} },
  { key: "settings", label: "Settings", icon: "edit", onClick: () => {} },
];

export default {
  title: "Layout/App Shell",
  parameters: { layout: "fullscreen" },
};

export const Shell = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Layout
        sidebar={
          <Sidebar
            logo="Acme Admin"
            items={items}
            activeKey="dashboard"
            open={open}
            onClose={() => setOpen(false)}
            footer={<small style={{ color: "var(--text-secondary)" }}>v0.1.0</small>}
          />
        }
        topbar={
          <Topbar onMenuClick={() => setOpen(true)} right={<Button size="sm">New</Button>}>
            <strong>Dashboard</strong>
          </Topbar>
        }
      >
        <p>Main content area. Resize below 768px to see the sidebar collapse.</p>
      </Layout>
    );
  },
};
