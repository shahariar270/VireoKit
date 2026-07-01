import Table from ".";
import { Badge } from "../Badge";

const columns = [
  { key: "name", title: "Name" },
  { key: "role", title: "Role" },
  {
    key: "status",
    title: "Status",
    render: (v) => (
      <Badge variant={v === "Active" ? "success" : "warning"}>{v}</Badge>
    ),
  },
];

const data = [
  { name: "Ada Lovelace", role: "Engineer", status: "Active" },
  { name: "Alan Turing", role: "Researcher", status: "Active" },
  { name: "Grace Hopper", role: "Admiral", status: "Pending" },
];

export default {
  title: "Data/Table",
  component: Table,
  tags: ["autodocs"],
  args: { columns, data, sortable: true },
};

export const Playground = {};

export const Empty = {
  args: { data: [], emptyMessage: "No records found" },
};
