# @shahariar/design-system

A themeable **React + SCSS** component library — 17 components spanning primitives,
overlays, data, and layout, all driven by CSS-variable design tokens with built-in
light/dark theming.

- **Plan:** [design_system.md](./design_system.md)
- **Extracted pattern spec:** [pattern-reference.md](./pattern-reference.md)

## Install

```bash
npm install @shahariar/design-system
# peers: react >=18, react-dom >=18, react-router-dom >=6
```

## Usage

Wrap your app once, import the stylesheet, then use any component:

```jsx
import {
  ThemeProvider,
  NotificationProvider,
  Button,
} from "@shahariar/design-system";
import "@shahariar/design-system/styles"; // ships dist/style.css

export default function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <NotificationProvider>
        <Button variant="primary" onClick={() => {}}>Save</Button>
      </NotificationProvider>
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

Every design decision is a CSS custom property on `:root`, overridden under
`[data-theme="dark"]`. Components reference token names only — re-theming is a token
swap. Toggle with the bundled provider:

```jsx
import { useTheme } from "@shahariar/design-system";
const { theme, toggleTheme } = useTheme();
```

Re-brand by redefining tokens after the stylesheet import:

```css
:root {
  --color-primary: #7c3aed;
  --radius-md: 14px;
}
```

## Components

| Group | Components |
| --- | --- |
| **Primitives** | `Button`, `Input`, `Select`, `Badge`, `Icon` |
| **Overlays & feedback** | `Modal`, `Drawer`, `Popover`, `NotificationProvider` / `useNotification`, `Loading`, `Skeleton` |
| **Data & navigation** | `Table`, `TableContainer`, `Pagination`, `Tab`, `Breadcrumb` |
| **Layout** | `Layout`, `Sidebar`, `Topbar` |
| **Theme** | `ThemeProvider`, `useTheme` |

## Documentation

The project ships its own docs website — a page per component with live, copyable
examples, props tables, a theming/tokens guide, and a full dashboard demo — plus a
Storybook catalog.

```bash
npm run dev            # docs site (component-wise examples + Live Demo)
npm run storybook      # Storybook catalog (port 6006)
npm run build          # build the docs site
npm run build:pkg      # build the library: dist/index.js + dist/style.css
npm run build-storybook
```

## Publishing

The package is currently `"private": true`. To publish: set `"private": false`, pick a
registry (npm or GitHub Packages), then `npm publish` — the `prepublishOnly` script
builds `dist/` automatically.

## Tech Stack

- **Framework**: React 19
- **Styling**: SCSS with CSS-variable tokens (`@use` module system)
- **Docs**: custom docs site + Storybook 8
- **Build**: Vite 6 (library mode)
