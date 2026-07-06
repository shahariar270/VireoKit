import { Link } from "react-router-dom";
import { Page } from "../Page";
import { CodeBlock } from "../CodeBlock";

export default function Intro() {
  return (
    <Page
      title="stui"
      lead="A themeable React + SCSS component library. Design-token driven, accessible, and light/dark ready — every component documented here with live, copyable examples."
    >
      <h2>Installation</h2>
      <CodeBlock
        language="bash"
        code={`npm install stui
# peers: react >=18, react-dom >=18, react-router-dom >=6`}
      />

      <h2>Quick start</h2>
      <p>Wrap your app once, import the stylesheet, then use any component.</p>
      <CodeBlock
        code={`import { ThemeProvider, NotificationProvider, Button } from "stui";
import "stui/styles";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <NotificationProvider>
        <Button variant="primary" onClick={() => {}}>Get started</Button>
      </NotificationProvider>
    </ThemeProvider>
  );
}`}
      />

      <h2>Explore</h2>
      <div className="doc-cards">
        <Link className="doc-cards__card" to="/theming">
          <strong>Theming &amp; Tokens</strong>
          <span>CSS-variable tokens and dark mode.</span>
        </Link>
        <Link className="doc-cards__card" to="/components/button">
          <strong>Components</strong>
          <span>16 components with every use case.</span>
        </Link>
        <Link className="doc-cards__card" to="/demo">
          <strong>Live Demo</strong>
          <span>A full admin dashboard built from the kit.</span>
        </Link>
      </div>
    </Page>
  );
}
