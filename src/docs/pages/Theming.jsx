import { Page } from "../Page";
import { Example } from "../Example";
import { CodeBlock } from "../CodeBlock";
import { Button } from "../../index";
import { useTheme } from "../../theme/ThemeProvider";

const COLORS = [
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
];

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button onClick={toggleTheme}>
      Current: {theme} — toggle
    </Button>
  );
}

export default function Theming() {
  return (
    <Page
      title="Theming & Tokens"
      lead="Every design decision is a CSS custom property on :root, overridden under [data-theme='dark']. Components reference token names only — never hardcoded values — so re-theming is a token swap."
    >
      <h2>Colors</h2>
      <Example padded code={`background: var(--color-primary);`}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 16, width: "100%" }}>
          {COLORS.map((t) => (
            <div key={t} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ height: 52, borderRadius: 10, background: `var(${t})`, border: "1px solid var(--border-muted)" }} />
              <code style={{ fontSize: 12 }}>{t}</code>
            </div>
          ))}
        </div>
      </Example>

      <h2>Radius, shadow & spacing</h2>
      <Example padded code={`border-radius: var(--radius-md);\nbox-shadow: var(--shadow-medium);\npadding: var(--space-4);`}>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {["--radius-sm", "--radius-md", "--radius-lg", "--radius-pill"].map((t) => (
            <div key={t} style={{ textAlign: "center" }}>
              <div style={{ width: 70, height: 70, background: "var(--color-primary)", borderRadius: `var(${t})` }} />
              <code style={{ fontSize: 11 }}>{t}</code>
            </div>
          ))}
          {["--shadow-soft", "--shadow-medium", "--shadow-premium"].map((t) => (
            <div key={t} style={{ textAlign: "center" }}>
              <div style={{ width: 90, height: 70, background: "var(--bg-surface)", borderRadius: 12, boxShadow: `var(${t})` }} />
              <code style={{ fontSize: 11 }}>{t}</code>
            </div>
          ))}
        </div>
      </Example>

      <h2>Dark mode</h2>
      <p>Toggle the theme with the bundled provider — it sets <code>data-theme</code> on the document and persists the choice.</p>
      <Example code={`import { useTheme } from "stui";

const { theme, toggleTheme } = useTheme();
<Button onClick={toggleTheme}>Toggle</Button>`}>
        <ThemeToggle />
      </Example>

      <h2>Override tokens</h2>
      <p>Re-brand by redefining tokens after the stylesheet import:</p>
      <CodeBlock
        language="css"
        code={`:root {
  --color-primary: #7c3aed;      /* your brand */
  --radius-md: 14px;
}
[data-theme="dark"] {
  --bg-body: #0a0a0a;
}`}
      />
    </Page>
  );
}
