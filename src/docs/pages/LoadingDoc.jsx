import { Page } from "../Page";
import { Example } from "../Example";
import { PropsTable } from "../PropsTable";
import { Loading } from "../../index";

export default function LoadingDoc() {
  return (
    <Page title="Loading" lead="Spinner with sizes, an optional label, and a fullscreen overlay mode. Respects reduced-motion.">
      <Example
        title="Sizes & label"
        code={`<Loading size="sm" />
<Loading size="md" />
<Loading size="lg" label="Loading…" />`}
      >
        <div style={{ display: "flex", gap: 48, alignItems: "center", height: 120 }}>
          <Loading size="sm" />
          <Loading size="md" />
          <Loading size="lg" label="Loading…" />
        </div>
      </Example>

      <h2>Props</h2>
      <PropsTable
        rows={[
          { name: "size", type: "'sm' | 'md' | 'lg'", default: "'md'", description: "Spinner size." },
          { name: "label", type: "ReactNode", description: "Text under the spinner." },
          { name: "fullscreen", type: "boolean", default: "false", description: "Cover the viewport with a dim overlay." },
        ]}
      />
    </Page>
  );
}
