import { Page } from "../Page";
import { Example } from "../Example";
import { PropsTable } from "../PropsTable";
import { Skeleton } from "../../index";

export default function SkeletonDoc() {
  return (
    <Page title="Skeleton" lead="Placeholder shapes shown while content loads — a lower-jank alternative to a spinner. Text, rectangle, and circle variants with pulse or wave animation.">
      <Example
        title="Text lines"
        description="count renders multiple lines; the last one is shortened automatically."
        code={`<Skeleton variant="text" count={3} />`}
      >
        <div style={{ width: 320 }}>
          <Skeleton variant="text" count={3} />
        </div>
      </Example>

      <Example
        title="Shapes"
        code={`<Skeleton variant="circle" width={56} />
<Skeleton variant="rect" width={200} height={100} />`}
      >
        <Skeleton variant="circle" width={56} />
        <Skeleton variant="rect" width={200} height={100} />
      </Example>

      <Example
        title="Animation: wave"
        code={`<Skeleton variant="rect" height={120} animation="wave" />`}
      >
        <div style={{ width: 320 }}>
          <Skeleton variant="rect" height={120} animation="wave" />
        </div>
      </Example>

      <Example
        title="Card placeholder"
        description="Compose skeletons to mirror the real layout."
        code={`<div className="card">
  <Skeleton variant="rect" height={140} radius={10} />
  <div style={{ display: "flex", gap: 12, marginTop: 14 }}>
    <Skeleton variant="circle" width={40} />
    <div style={{ flex: 1 }}>
      <Skeleton variant="text" count={2} />
    </div>
  </div>
</div>`}
      >
        <div style={{ width: 280, border: "1px solid var(--border-muted)", borderRadius: 12, padding: 16 }}>
          <Skeleton variant="rect" height={140} radius={10} />
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 14 }}>
            <Skeleton variant="circle" width={40} />
            <div style={{ flex: 1 }}>
              <Skeleton variant="text" count={2} />
            </div>
          </div>
        </div>
      </Example>

      <h2>Props</h2>
      <PropsTable
        rows={[
          { name: "variant", type: "'text' | 'rect' | 'circle'", default: "'text'", description: "Placeholder shape." },
          { name: "count", type: "number", default: "1", description: "Number of lines/blocks (last text line is shorter)." },
          { name: "width", type: "number | string", description: "Width (px number or CSS value)." },
          { name: "height", type: "number | string", description: "Height (px number or CSS value)." },
          { name: "radius", type: "number | string", description: "Corner radius override." },
          { name: "animation", type: "'pulse' | 'wave' | 'none'", default: "'pulse'", description: "Shimmer style; respects reduced-motion." },
        ]}
      />
    </Page>
  );
}
