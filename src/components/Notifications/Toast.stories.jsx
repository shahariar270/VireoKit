import { NotificationProvider, useNotification } from ".";
import Button from "../Buttons";

export default {
  title: "Feedback/Toast",
  component: NotificationProvider,
  tags: ["autodocs"],
  decorators: [(Story) => <NotificationProvider><Story /></NotificationProvider>],
};

const Demo = () => {
  const { showNotification } = useNotification();
  const fire = (type) =>
    showNotification({
      type,
      title: type[0].toUpperCase() + type.slice(1),
      message: `This is a ${type} toast.`,
    });

  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Button onClick={() => fire("info")}>Info</Button>
      <Button variant="secondary" onClick={() => fire("success")}>Success</Button>
      <Button variant="secondary" onClick={() => fire("warning")}>Warning</Button>
      <Button variant="danger" onClick={() => fire("error")}>Error</Button>
    </div>
  );
};

export const Playground = {
  render: () => <Demo />,
};
