import { Page } from "../Page";
import { Example } from "../Example";
import { PropsTable } from "../PropsTable";
import { Button, Icon } from "../../index";

export default function ButtonDoc() {
  return (
    <Page title="Button" lead="Primary interactive element with variants, sizes, icon slots, and loading/disabled states.">
      <Example
        title="Variants"
        description="Four visual styles for different emphasis."
        code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>
<Button variant="transparent">Transparent</Button>`}
      >
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="transparent">Transparent</Button>
      </Example>

      <Example
        title="Sizes"
        code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
      >
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </Example>

      <Example
        title="With icons"
        description="Use startIcon / endIcon, or drop an <Icon> as a child."
        code={`<Button startIcon={<Icon name="plus" size={16} />}>New</Button>
<Button variant="secondary" endIcon={<Icon name="chevron-right" size={16} />}>Next</Button>
<Button variant="danger"><Icon name="trash" size={16} /></Button>`}
      >
        <Button startIcon={<Icon name="plus" size={16} />}>New</Button>
        <Button variant="secondary" endIcon={<Icon name="chevron-right" size={16} />}>Next</Button>
        <Button variant="danger"><Icon name="trash" size={16} /></Button>
      </Example>

      <Example
        title="States"
        code={`<Button loading>Saving</Button>
<Button disabled>Disabled</Button>`}
      >
        <Button loading>Saving</Button>
        <Button disabled>Disabled</Button>
      </Example>

      <h2>Props</h2>
      <PropsTable
        rows={[
          { name: "variant", type: "'primary' | 'secondary' | 'danger' | 'transparent'", default: "'primary'", description: "Visual style." },
          { name: "size", type: "'sm' | 'md' | 'lg'", default: "'md'", description: "Control size." },
          { name: "loading", type: "boolean", default: "false", description: "Shows a spinner and disables interaction." },
          { name: "disabled", type: "boolean", default: "false", description: "Disables the button." },
          { name: "startIcon / endIcon", type: "ReactNode", description: "Icon rendered before/after the label." },
          { name: "border", type: "'none' | 'primary' | 'focus'", default: "'none'", description: "Optional border style." },
          { name: "onClick", type: "function", description: "Click handler." },
          { name: "children", type: "ReactNode", description: "Button content." },
        ]}
      />
    </Page>
  );
}
