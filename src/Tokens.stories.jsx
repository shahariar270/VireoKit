// Design-token reference page (colors, radius, shadow, spacing).
export default {
  title: "Foundation/Design Tokens",
  tags: ["autodocs"],
};

const Swatch = ({ token }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
    <div
      style={{
        height: 56,
        borderRadius: 10,
        background: `var(${token})`,
        border: "1px solid var(--border-muted)",
      }}
    />
    <code style={{ fontSize: 12, color: "var(--text-secondary)" }}>{token}</code>
  </div>
);

const Grid = ({ children }) => (
  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 16 }}>
    {children}
  </div>
);

export const Colors = {
  render: () => (
    <Grid>
      {[
        "--color-primary",
        "--color-secondary",
        "--color-success",
        "--color-warning",
        "--color-error",
        "--color-info",
        "--text-primary",
        "--text-secondary",
        "--bg-surface",
        "--bg-muted",
        "--border-default",
      ].map((t) => (
        <Swatch key={t} token={t} />
      ))}
    </Grid>
  ),
};

export const Radius = {
  render: () => (
    <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
      {["--radius-sm", "--radius-md", "--radius-lg", "--radius-pill"].map((t) => (
        <div key={t} style={{ textAlign: "center" }}>
          <div
            style={{
              width: 80,
              height: 80,
              background: "var(--color-primary)",
              borderRadius: `var(${t})`,
            }}
          />
          <code style={{ fontSize: 12 }}>{t}</code>
        </div>
      ))}
    </div>
  ),
};

export const Shadow = {
  render: () => (
    <div style={{ display: "flex", gap: 32, flexWrap: "wrap", padding: 20 }}>
      {["--shadow-soft", "--shadow-medium", "--shadow-premium"].map((t) => (
        <div key={t} style={{ textAlign: "center" }}>
          <div
            style={{
              width: 120,
              height: 80,
              background: "var(--bg-surface)",
              borderRadius: 12,
              boxShadow: `var(${t})`,
            }}
          />
          <code style={{ fontSize: 12 }}>{t}</code>
        </div>
      ))}
    </div>
  ),
};

export const Spacing = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {["--space-1", "--space-2", "--space-3", "--space-4", "--space-5", "--space-6", "--space-8", "--space-10"].map(
        (t) => (
          <div key={t} style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ height: 16, width: `var(${t})`, background: "var(--color-primary)", borderRadius: 4 }} />
            <code style={{ fontSize: 12 }}>{t}</code>
          </div>
        )
      )}
    </div>
  ),
};
