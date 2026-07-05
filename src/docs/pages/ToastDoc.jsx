import { Page } from "../Page";
import { Example } from "../Example";
import { PropsTable } from "../PropsTable";
import { Button, useNotification } from "../../index";

function Demo() {
  const { showNotification } = useNotification();
  const fire = (type) =>
    showNotification({
      type,
      title: type[0].toUpperCase() + type.slice(1),
      message: `This is a ${type} toast.`,
    });
  return (
    <>
      <Button onClick={() => fire("info")}>Info</Button>
      <Button variant="secondary" onClick={() => fire("success")}>Success</Button>
      <Button variant="secondary" onClick={() => fire("warning")}>Warning</Button>
      <Button variant="danger" onClick={() => fire("error")}>Error</Button>
    </>
  );
}

export default function ToastDoc() {
  return (
    <Page title="Toast" lead="Transient notifications via a provider + hook. Wrap your app in NotificationProvider, then call showNotification from anywhere.">
      <Example
        title="Fire a toast"
        code={`// once, near the root:
<NotificationProvider>…</NotificationProvider>

// anywhere:
const { showNotification } = useNotification();
showNotification({ type: "success", title: "Saved", message: "All good" });`}
      >
        <Demo />
      </Example>

      <h2>showNotification(options)</h2>
      <PropsTable
        rows={[
          { name: "type", type: "'info' | 'success' | 'warning' | 'error'", default: "'info'", description: "Toast style + icon." },
          { name: "title", type: "string", description: "Bold heading (optional)." },
          { name: "message", type: "string", description: "Body text." },
          { name: "duration", type: "number", default: "3000", description: "Auto-dismiss ms; 0 to persist." },
        ]}
      />

      <h2>Provider props</h2>
      <PropsTable
        rows={[
          { name: "duration", type: "number", default: "3000", description: "Default auto-dismiss for all toasts." },
        ]}
      />
    </Page>
  );
}
