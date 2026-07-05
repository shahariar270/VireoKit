import { useMemo, useState } from "react";
import "./App.css";
import {
  Layout,
  Sidebar,
  Topbar,
  Breadcrumb,
  Icon,
  Button,
  Badge,
  Table,
  Pagination,
  Tab,
  Input,
  Select,
  Modal,
  Drawer,
  Popover,
  Loading,
  useNotification,
  useTheme,
} from "./index";

const NAV = [
  { key: "dashboard", label: "Dashboard", icon: "menu" },
  { key: "users", label: "Users", icon: "user" },
  { key: "settings", label: "Settings", icon: "edit" },
];

const USERS = [
  { id: 1, name: "Ada Lovelace", email: "ada@acme.io", role: "Engineer", status: "Active" },
  { id: 2, name: "Alan Turing", email: "alan@acme.io", role: "Researcher", status: "Active" },
  { id: 3, name: "Grace Hopper", email: "grace@acme.io", role: "Admiral", status: "Pending" },
  { id: 4, name: "Katherine Johnson", email: "kate@acme.io", role: "Analyst", status: "Active" },
  { id: 5, name: "Linus Torvalds", email: "linus@acme.io", role: "Maintainer", status: "Suspended" },
  { id: 6, name: "Margaret Hamilton", email: "maggie@acme.io", role: "Engineer", status: "Active" },
  { id: 7, name: "Dennis Ritchie", email: "dennis@acme.io", role: "Engineer", status: "Pending" },
  { id: 8, name: "Barbara Liskov", email: "barbara@acme.io", role: "Professor", status: "Active" },
];

const STATUS_VARIANT = { Active: "success", Pending: "warning", Suspended: "error" };

const ROLE_OPTIONS = [
  { label: "Engineer", value: "engineer" },
  { label: "Researcher", value: "researcher" },
  { label: "Analyst", value: "analyst" },
  { label: "Professor", value: "professor" },
];

function StatCard({ icon, label, value }) {
  return (
    <div className="demo__card">
      <div className="demo__stat-top">
        <span>{label}</span>
        <span className="demo__stat-icon">
          <Icon name={icon} size={18} />
        </span>
      </div>
      <div className="demo__stat-value">{value}</div>
    </div>
  );
}

function DashboardPage() {
  const recent = USERS.slice(0, 4);
  return (
    <>
      <div className="demo__stats">
        <StatCard icon="user" label="Total Users" value="8,240" />
        <StatCard icon="check" label="Active" value="6,110" />
        <StatCard icon="info" label="Pending" value="1,204" />
        <StatCard icon="warning" label="Suspended" value="926" />
      </div>

      <div className="demo__card">
        <Tab
          variant="underline"
          tabs={[
            {
              label: "Recent Users",
              content: (
                <Table
                  columns={[
                    { key: "name", title: "Name" },
                    { key: "role", title: "Role" },
                    {
                      key: "status",
                      title: "Status",
                      render: (v) => <Badge variant={STATUS_VARIANT[v]}>{v}</Badge>,
                    },
                  ]}
                  data={recent}
                />
              ),
            },
            {
              label: "Activity",
              content: (
                <div style={{ padding: "8px 0", color: "var(--text-secondary)" }}>
                  <p>· Ada updated the billing settings</p>
                  <p>· Grace invited 3 new members</p>
                  <p>· Linus was suspended</p>
                </div>
              ),
            },
            {
              label: "Loading",
              content: (
                <div style={{ height: 140 }}>
                  <Loading label="Fetching data…" />
                </div>
              ),
            },
          ]}
        />
      </div>
    </>
  );
}

function UsersPage({ columns, data, ...pagination }) {
  return (
    <div className="demo__section">
      <Table columns={columns} data={data} sortable />
      <Pagination {...pagination} />
    </div>
  );
}

function SettingsPage({ form, setForm, onSave }) {
  const set = (k) => (eOrVal) =>
    setForm((f) => ({ ...f, [k]: eOrVal?.target ? eOrVal.target.value : eOrVal }));

  return (
    <div className="demo__card" style={{ maxWidth: 720 }}>
      <h3 className="demo__section-title">Profile</h3>
      <div className="demo__form">
        <Input label="Full name" value={form.name} onChange={set("name")} placeholder="Jane Doe" />
        <Input
          label="Email"
          type="email"
          value={form.email}
          onChange={set("email")}
          placeholder="jane@acme.io"
          error={form.email && !form.email.includes("@") ? "Enter a valid email" : ""}
        />
        <Select
          options={ROLE_OPTIONS}
          value={form.role}
          onChange={set("role")}
          placeholder="Select a role…"
        />
      </div>

      <div style={{ marginTop: 16 }}>
        <Input label="Bio" multiline value={form.bio} onChange={set("bio")} placeholder="A short bio…" />
      </div>

      <div className="demo__form-actions">
        <Button onClick={onSave}>Save changes</Button>
        <Button
          variant="secondary"
          onClick={() => setForm({ name: "", email: "", role: undefined, bio: "" })}
        >
          Reset
        </Button>
      </div>
    </div>
  );
}

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const { showNotification } = useNotification();

  const [page, setPage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // users page state
  const [pageNum, setPageNum] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [detailUser, setDetailUser] = useState(null);
  const [deleteUser, setDeleteUser] = useState(null);

  // settings form state
  const [form, setForm] = useState({ name: "", email: "", role: undefined, bio: "" });

  const pageLabel = NAV.find((n) => n.key === page)?.label ?? "";

  const pagedUsers = useMemo(
    () => USERS.slice((pageNum - 1) * pageSize, pageNum * pageSize),
    [pageNum, pageSize]
  );

  const goTo = (key) => {
    setPage(key);
    setSidebarOpen(false);
  };

  const userColumns = [
    { key: "name", title: "Name" },
    { key: "email", title: "Email" },
    { key: "role", title: "Role" },
    {
      key: "status",
      title: "Status",
      render: (v) => <Badge variant={STATUS_VARIANT[v] || "default"}>{v}</Badge>,
    },
    {
      key: "actions",
      title: "",
      render: (_, row) => (
        <div className="demo__row">
          <Button size="sm" variant="secondary" onClick={() => setDetailUser(row)}>
            View
          </Button>
          <Button size="sm" variant="danger" onClick={() => setDeleteUser(row)}>
            <Icon name="trash" size={14} />
          </Button>
        </div>
      ),
    },
  ];

  const sidebar = (
    <Sidebar
      logo={
        <span className="demo__row" style={{ gap: 8 }}>
          <Icon name="plus" size={18} /> Acme Admin
        </span>
      }
      items={NAV.map((n) => ({ ...n, onClick: () => goTo(n.key) }))}
      activeKey={page}
      open={sidebarOpen}
      onClose={() => setSidebarOpen(false)}
      footer={<small style={{ color: "var(--text-secondary)" }}>v0.1.0 · design-system</small>}
    />
  );

  const topbar = (
    <Topbar
      onMenuClick={() => setSidebarOpen(true)}
      right={
        <div className="demo__row">
          <Popover label={<Icon name="info" size={18} />} trigger="click" align="right">
            <strong>Notifications</strong>
            <p style={{ margin: "6px 0 0" }}>You're all caught up 🎉</p>
          </Popover>
          <Button size="sm" variant="secondary" onClick={toggleTheme}>
            <Icon name={theme === "dark" ? "success" : "menu"} size={16} />
            {theme === "dark" ? "Light" : "Dark"}
          </Button>
          <Button
            size="sm"
            onClick={() =>
              showNotification({ type: "success", title: "Created", message: "New item added." })
            }
          >
            <Icon name="plus" size={16} /> New
          </Button>
        </div>
      }
    >
      <Breadcrumb items={[{ label: "Home", to: "/" }, { label: pageLabel }]} />
    </Topbar>
  );

  return (
    <Layout sidebar={sidebar} topbar={topbar}>
      <div className="demo__page-head">
        <div>
          <h1 className="demo__title">{pageLabel}</h1>
          <p className="demo__subtitle">Built entirely with shahariar-design-system components.</p>
        </div>
      </div>

      {page === "dashboard" && <DashboardPage />}
      {page === "users" && (
        <UsersPage
          columns={userColumns}
          data={pagedUsers}
          page={pageNum}
          pageSize={pageSize}
          total={USERS.length}
          onPageChange={setPageNum}
          onPageSizeChange={(s) => {
            setPageSize(s);
            setPageNum(1);
          }}
        />
      )}
      {page === "settings" && (
        <SettingsPage
          form={form}
          setForm={setForm}
          onSave={() =>
            showNotification({ type: "success", title: "Saved", message: "Settings updated." })
          }
        />
      )}

      {/* user details drawer */}
      <Drawer isOpen={!!detailUser} onClose={() => setDetailUser(null)} title="User details">
        {detailUser && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div>
              <div className="demo__stat-top">Name</div>
              <div style={{ fontWeight: 600 }}>{detailUser.name}</div>
            </div>
            <div>
              <div className="demo__stat-top">Email</div>
              <div>{detailUser.email}</div>
            </div>
            <div>
              <div className="demo__stat-top">Status</div>
              <Badge variant={STATUS_VARIANT[detailUser.status]}>{detailUser.status}</Badge>
            </div>
          </div>
        )}
      </Drawer>

      {/* delete confirm modal */}
      <Modal isOpen={!!deleteUser} onClose={() => setDeleteUser(null)} title="Delete user?" size="sm">
        <p>
          This will permanently remove <strong>{deleteUser?.name}</strong>.
        </p>
        <div className="demo__form-actions" style={{ justifyContent: "flex-end" }}>
          <Button variant="secondary" onClick={() => setDeleteUser(null)}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              showNotification({ type: "error", title: "Deleted", message: `${deleteUser.name} removed.` });
              setDeleteUser(null);
            }}
          >
            Delete
          </Button>
        </div>
      </Modal>
    </Layout>
  );
}
