# Design System — Build Plan

A plan for turning this repo (`G:/react/designSystem`) into a real, reusable, themeable React + SCSS design system. The extracted UI patterns that this system targets are documented in [pattern-reference.md](./pattern-reference.md) — that file is the **spec** (what "done" looks like); this file is the **plan** (how we get there).

> **Decisions locked for v1**
> - **Docs/preview:** Storybook (Storybook 8 on Vite).
> - **Language:** stay **JSX + PropTypes/JSDoc** (all three consumer apps use JSX/`jsconfig`; TypeScript is a possible later upgrade, not v1).
> - **Distribution:** build **standalone first**, then ship it as a proper **npm component library** (`stui`) that any app installs and imports from. This is the eventual target (see [Phase 6](#phase-6--npm-component-library-future)); it is **not** a v1 blocker.

---

## 1. Goals

1. **One source of truth** for tokens (color, type, spacing, radius, shadow, motion) as CSS custom properties.
2. **Themeable** — same component code, swappable themes via a `:root` / `[data-theme]` token set (matches the 3 apps' existing values in the reference).
3. **Consistent component API** — predictable props, variants, and class naming across every component.
4. **Documented & previewable** — every component has a Storybook story with controls and usage notes.
5. **Portable** — packaged so `expense-tracker`, `E-commerce/admin`, and `Prortfolio-2.0` can adopt it later with minimal churn.

## 2. Current State (baseline)

**Stack:** Vite 6, React 19, Sass 1.89, Redux Toolkit, react-router 6.

**Exists today:**
- Token layer: `src/assets/styles/common/_root.scss` (CSS vars — **colors only**) + `_typography.scss` (Sass maps `$font-sizes/$font-weights/$line-heights/$letter-spacing` + `.text-*` utility classes and `.h1–.h6/.p/.span`).
- Component partials in `src/assets/styles/Component/`: button, drawer, loading, modal, notification, popovers, tab, table.
- Component JSX in `src/components/`: Buttons, Breadcrumb, Loading, Modal, Notifications, Popover, Select, Tab, Table (+TableContainer), drawer.
- `global.scss` imports the partials; `main.jsx` wires `NotificationProvider` + router; `App.jsx` demos components ad-hoc alongside `practice/` code.

**Gaps to close:**
- No **spacing / radius / shadow / z-index / transition / breakpoint** tokens.
- Token inconsistency: `_typography.scss` `$text-colors` are **hardcoded** (`#333`, `#666`…) instead of referencing the `--text-*` CSS vars in `_root.scss`.
- `Select` appears empty and neither `Select` nor `Breadcrumb` has a wired-in style partial (`global.scss` doesn't import them).
- No **Input**, **Badge**, or **Icon** primitive; no **Layout/Sidebar/Topbar** shell components.
- Inconsistent prop APIs (e.g. `Button` uses `onclick` + `label` instead of React-idiomatic `onClick` + `children`).
- No dark-mode wiring (tokens support it, nothing toggles it).
- No Storybook, no tests, no prop-types; `package.json` name is still `protfolio`.

## 3. Target Architecture

```
src/
  tokens/                 # SCSS token layer (single source of truth)
    _colors.scss          # semantic color vars per theme (:root + [data-theme="dark"])
    _typography.scss      # font stacks, size/weight/line-height/tracking maps
    _spacing.scss         # spacing scale (8/12/16/20/24/32) as vars + map
    _radius.scss          # --radius-sm/md/lg/pill
    _shadow.scss          # --shadow-soft/medium/premium
    _motion.scss          # transition durations + easings
    _layout.scss          # z-index scale + breakpoints (Sass mixins)
    _index.scss           # forwards all token partials
  styles/
    global.scss           # @use tokens + component styles + resets
    _reset.scss
    utilities/            # .text-*, flex/gap helpers (from current typography util)
  components/
    <Component>/
      index.jsx
      <Component>.stories.jsx
      _styles.scss        # or keep in styles/Component/ — pick one, see Phase 1
      README.md           # short usage + prop table (optional; Storybook autodocs preferred)
  theme/
    ThemeProvider.jsx     # sets [data-theme], exposes useTheme()
```

**Conventions**
- Class naming: block `.st-{component}`, modifiers `--{variant}` / `--{size}` / `--{state}`, elements `__{part}` (BEM-ish, matches reference).
- Every component style references **token vars only** — never a literal hex/px for a themeable value.
- Migrate SCSS from `@import` → `@use`/`@forward` (Sass deprecates `@import`).
- Prop API: `children` for content, `onClick`/`onChange` (camelCase), `variant`, `size`, `disabled`, `className` passthrough; PropTypes on every component.

## 4. Phased Roadmap

> **Build status (branch `st-pakage-build`):** Phases 0–6 complete — all components (incl. Icon + Layout shell), Sass `@use` migration, Storybook, and the npm library build (`dist/index.js` + `dist/style.css`) are shipped and pushed. Remaining polish: skeleton Loading variant, `.d.ts` types, CI/Changesets release, and consumer adoption.

### Phase 0 — Project hygiene
- [x] Rename `package.json` `name` to `stui` (scoped, for future publish).
- [ ] Move `practice/` and playground code out of the component path (keep in a `sandbox/` route or delete).
- [x] Ensure `npm run build` is clean (only Sass `@import`/global-builtin deprecation warnings remain — see below).
- [x] Style-file location decided: keep central `src/assets/styles/Component/` partials.

### Phase 1 — Token foundation (the critical path)
- [x] Token layer for **color, typography, spacing, radius, shadow, motion, z-index, breakpoints** (in `common/_root.scss` CSS vars + `_typography.scss` maps).
- [x] Fix the typography/color inconsistency — `$text-colors` now resolve to the `--text-*` vars.
- [x] Add `[data-theme="dark"]` overrides + `ThemeProvider`/`useTheme`.
- [x] Sass mixins: `respond-to($bp)`, `focus-ring`, `reduced-motion`, `truncate` (`common/_mixins.scss`).
- [ ] **Follow-up:** migrate SCSS from `@import` → `@use`/`@forward` and `sass:map` (clears remaining deprecation warnings).

### Phase 2 — Primitives
- [x] **Button** — `.st-btn`, `children`+`onClick` API (back-compat `label`/`onclick`), variants `primary|secondary|danger|transparent`, sizes `sm|md|lg`, `loading`/`disabled`, focus-ring, icon slots.
- [x] **Input / TextArea** — label, helper/error text, focus ring, disabled, `multiline`, a11y.
- [x] **Select** — custom accessible dropdown (no dep); keyboard nav + listbox roles.
- [x] **Badge** — pill, semantic tints + solid fill, optional dot.
- [x] **Icon** — inline SVG registry wrapper (17 icons, `currentColor`, tree-shakeable).

### Phase 3 — Overlays & feedback
- [x] **Modal** — `.st-modal`, overlay, sizes, header/close, ESC + scroll-lock, `role=dialog`.
- [x] **Drawer** — left/right slide, overlay, ESC close, a11y.
- [x] **Popover** — hover/click trigger, click-outside, arrow, left/right align.
- [x] **Toast/Notifications** — provider/hook API, semantic types + icon + per-toast duration.
- [x] **Loading** — spinner, sizes, label, fullscreen; reduced-motion aware. _(skeleton variant TODO)_

### Phase 4 — Data & navigation
- [x] **Table** — card-row style, sortable headers, empty/loading/compact/bordered.
- [x] **Pagination** — page-size select + prev/next.
- [x] **Tabs** — pills/underline variants, disabled tabs, `?tab=` sync.
- [x] **Breadcrumb** — tokenized, auto-derive or explicit `items`, custom separator.
- [x] **Layout shell** — `Sidebar` + `Topbar` + two-column `Layout`, off-canvas collapse at `768px`.

### Phase 5 — Storybook & documentation
- [x] Storybook 8 (react-vite); loads `global.scss` in `.storybook/preview.jsx`.
- [x] Addons: **essentials** (controls/args/docs), **a11y**, **themes** (light/dark data-attribute toggle).
- [x] A `*.stories.jsx` per component + a **Foundation/Design Tokens** page (color/radius/shadow/spacing).
- [x] Wired `npm run storybook` / `build-storybook` (build verified). _(Vercel/GH-Pages deploy optional.)_

### Phase 6 — npm component library

Goal: publish this as an installable, tree-shakeable React component library so any app does `npm i stui` and `import { Button } from 'stui'`.

**Build & bundle**
- [x] Vite **library mode** (`vite.lib.config.js`, `build.lib`) with `react`/`react-dom`/`react-router-dom`/`prop-types` external; emits **ESM** `dist/index.js`.
- [x] Ship styles: `build:css` compiles SCSS → `dist/style.css`; `./scss` export exposes the source for token reuse.
- [x] `"sideEffects": ["**/*.css","**/*.scss"]` for tree-shaking. _( `.d.ts` types still TODO.)_

**Package manifest (`package.json`)**
- [x] `"name": "stui"`, semver `"version"`, `"type": "module"`.
- [x] `"exports"` map (`.` + `./styles` + `./scss`), `"main"`/`"module"`, `"files": ["dist","src/assets/styles"]`.
- [x] `react`/`react-dom`/`react-router-dom` moved to `"peerDependencies"`; app-only deps (redux, react-youtube) demoted to devDeps.
- [x] `"prepublishOnly": "npm run build:pkg"`.

**Release & CI (remaining)**
- [ ] Adopt **Changesets** for semver bumps + auto CHANGELOG.
- [ ] GitHub Action: build → lint → `build-storybook` → `npm publish` on tag.
- [ ] Choose registry: **GitHub Packages** or npm; flip `"private": true` when ready to publish.
- [ ] Publish Storybook (Vercel/GH Pages) as the public component catalog/docs.

**Adoption (remaining)**
- [ ] Write a migration guide (install, import styles, theme setup, per-component mapping).
- [ ] Pilot-adopt in one app — recommend **E-commerce/admin** (its tokens already match `_root.scss`) — then roll out to `expense-tracker` and `Prortfolio-2.0`.
- [ ] Version consumers against a pinned release; iterate via semver.

## 5. Quality Bar (applies to every component)

- **Accessibility:** semantic elements, keyboard operable, visible focus ring, ARIA where needed, respects `prefers-reduced-motion`.
- **Responsive:** works at the `768px` / `600px` / `475px` breakpoints from the reference.
- **Theming:** renders correctly in light and dark; zero hardcoded themeable values.
- **API:** PropTypes + sensible defaults + `className`/`style` passthrough; documented in its story.
- **Motion:** default `0.2s–0.3s ease`; longer/spring timing reserved for marketing surfaces only.

## 6. Milestones

| Milestone | Contents | Definition of done |
|---|---|---|
| **M1 — Foundations** | Phase 0 + 1 | Token layer complete, dark mode toggles, build clean |
| **M2 — Primitives + Storybook** | Phase 2 + 5 (bootstrap) | Button/Input/Select/Badge/Icon shipped with stories |
| **M3 — Overlays & Feedback** | Phase 3 | Modal/Drawer/Popover/Toast/Loading done + stories |
| **M4 — Data & Nav** | Phase 4 | Table/Pagination/Tabs/Breadcrumb/Layout done + stories |
| **M5 — npm library & adopt** | Phase 6 | Published as `stui` on a registry + one app migrated to the package |

## 7. Open Decisions (revisit before the relevant phase)

- Icon strategy: reuse the icomoon font already in the apps, or move to an inline SVG icon set?
- Style-file location: co-locate per component vs. central `styles/Component/`.
- Redux dependency: the current Notification system uses Redux Toolkit — keep it, or make the toast store internal so consumers aren't forced onto Redux?
- Distribution registry (Phase 6): GitHub Packages vs. private npm.
