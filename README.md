# @shahariar/design-system

A themeable React + SCSS component library. Shared UI primitives, overlays, data and
layout components driven by CSS-variable design tokens with light/dark theming.

- **Plan:** [design_system.md](./design_system.md)
- **Extracted pattern spec:** [pattern-reference.md](./pattern-reference.md)

## Install

```bash
npm install @shahariar/design-system
# peers: react >=18, react-dom >=18, react-router-dom >=6
```

## Usage

```jsx
import { ThemeProvider, Button, Modal, Table } from "@shahariar/design-system";
import "@shahariar/design-system/styles"; // ships dist/style.css

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Button variant="primary" onClick={() => {}}>Save</Button>
    </ThemeProvider>
  );
}
```

Prefer to compile the SCSS yourself (to reuse tokens/mixins)? Import the source entry
instead of the built CSS:

```scss
@use "@shahariar/design-system/scss";
```

## Theming

All design decisions are CSS custom properties on `:root`, overridden under
`[data-theme="dark"]`. Toggle with the bundled provider:

```jsx
import { useTheme } from "@shahariar/design-system";
const { theme, toggleTheme } = useTheme();
```

## Components

Primitives: `Button`, `Input`, `Select`, `Badge`, `Icon` ·
Overlays & feedback: `Modal`, `Drawer`, `Popover`, `NotificationProvider`/`useNotification`, `Loading` ·
Data & nav: `Table`, `TableContainer`, `Pagination`, `Tab`, `Breadcrumb` ·
Layout: `Layout`, `Sidebar`, `Topbar`.

## Develop

```bash
npm run dev            # Vite playground
npm run storybook      # component catalog + token docs (port 6006)
npm run build:pkg      # build dist/index.js + dist/style.css (library)
```

## Tech Stack

- **Framework**: React 19
- **Styling**: SCSS with CSS-variable tokens (`@use` module system)
- **Docs**: Storybook 8
- **Build**: Vite 6 (library mode)
