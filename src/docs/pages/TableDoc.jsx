import { Page } from "../Page";
import { Example } from "../Example";
import { PropsTable } from "../PropsTable";
import { Table, Badge } from "../../index";

const columns = [
  { key: "name", title: "Name" },
  { key: "role", title: "Role" },
  {
    key: "status",
    title: "Status",
    render: (v) => <Badge variant={v === "Active" ? "success" : "warning"}>{v}</Badge>,
  },
];

const data = [
  { name: "Ada Lovelace", role: "Engineer", status: "Active" },
  { name: "Alan Turing", role: "Researcher", status: "Active" },
  { name: "Grace Hopper", role: "Admiral", status: "Pending" },
];

export default function TableDoc() {
  return (
    <Page title="Table" lead="Card-row data table with sortable headers, custom cell renderers, and empty/loading states.">
      <Example
        title="With sorting & custom cells"
        description="Click a header to sort. The status column uses a render function to show a Badge."
        padded={false}
        code={`const columns = [
  { key: "name", title: "Name" },
  { key: "role", title: "Role" },
  { key: "status", title: "Status",
    render: (v) => <Badge variant={v === "Active" ? "success" : "warning"}>{v}</Badge> },
];
<Table columns={columns} data={data} sortable />`}
      >
        <div style={{ padding: "8px 24px" }}>
          <Table columns={columns} data={data} sortable />
        </div>
      </Example>

      <Example
        title="Empty state"
        padded={false}
        code={`<Table columns={columns} data={[]} emptyMessage="No records found" />`}
      >
        <div style={{ padding: "8px 24px" }}>
          <Table columns={columns} data={[]} emptyMessage="No records found" />
        </div>
      </Example>

      <h2>Props</h2>
      <PropsTable
        rows={[
          { name: "columns", type: "{ key, title, render?, width?, align? }[]", description: "Column definitions." },
          { name: "data", type: "object[]", description: "Row data." },
          { name: "sortable", type: "boolean", default: "false", description: "Enable header sorting." },
          { name: "onRowClick", type: "(row) => void", description: "Row click handler." },
          { name: "loading", type: "boolean", default: "false", description: "Dim + disable while loading." },
          { name: "emptyMessage", type: "ReactNode", default: "'No data available'", description: "Shown when data is empty." },
          { name: "compact / bordered", type: "boolean", default: "false", description: "Density / border variants." },
        ]}
      />
    </Page>
  );
}
