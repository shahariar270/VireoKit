import { Icon } from ".";
import { ICON_NAMES } from "./icons";

export default {
  title: "Primitives/Icon",
  component: Icon,
  tags: ["autodocs"],
  args: { name: "check", size: 24 },
  argTypes: {
    name: { control: "select", options: ICON_NAMES },
  },
};

export const Playground = {};

export const Gallery = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(96px, 1fr))", gap: 12 }}>
      {ICON_NAMES.map((name) => (
        <div
          key={name}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            padding: 12,
            border: "1px solid var(--border-muted)",
            borderRadius: 10,
            color: "var(--text-primary)",
          }}
        >
          <Icon name={name} size={24} />
          <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{name}</span>
        </div>
      ))}
    </div>
  ),
};
