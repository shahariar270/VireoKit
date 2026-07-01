# Shared Design System

Consolidated UI pattern reference derived from three existing frontends:
- **expense-tracker** (`G:/MERN/expense-tracker/client`) — Apple-inspired, blue accent
- **E-commerce admin** (`G:/MERN/E-commerce/admin`) — corporate blue/purple accent
- **Prortfolio-2.0** (`G:/MERN/Prortfolio-2.0/client`) — teal accent, dark mode support

All three already share the same DNA: plain **SCSS with CSS custom properties**, a `.st-` class prefix, and a `component--variant--size` BEM-ish naming scheme. This document merges them into one canonical system for this `designSystem` package, keeping each project's actual token values as a "theme" so any of the three can consume the same component code.

---

## 1. Methodology

- **SCSS**, no utility framework (no Tailwind/MUI/styled-components).
- Design tokens live as **CSS custom properties on `:root`**, not Sass variables — enables runtime theming.
- File layout: `assets/styles/global.scss` (entry) → `common/` (variables, typography, utility classes) → `Component/` (one partial per component).
- Class naming: `.st-{component}` for the block, `.btn--{variant}`, `.btn--{size}` for BEM-style modifiers, `.table__header-cell` for BEM elements, `.is-active` / `--disabled` for state.
- Theming: expose the same variable *names* across projects with different values (see §2). Dark mode (as done in Prortfolio-2.0) toggles via `[data-theme="dark"]` overriding the same custom properties.

## 2. Design Tokens

### 2.1 Color roles (same variable names, per-project values)

| Role | expense-tracker | E-commerce admin | Prortfolio-2.0 (light / dark) |
|---|---|---|---|
| `--color-primary` | `#007AFF` | `#2988ee` | `#0f766e` / `#14b8a6` |
| `--color-primary-hover` | `#0062CC` | `#8ec5fc` | `#115e59` / `#2dd4bf` |
| `--color-secondary` | `#E8E8ED` | `#fff6f2` | `#2563eb` / `#60a5fa` |
| `--color-success` | `#34C759` | `#22c55e` | — |
| `--color-error` | `#FF3B30` | `#ef4444` | `#dc2626` |
| `--color-warning` | `#FF9F0A` | `#f59e0b` | — |
| `--text-primary` | `#1D1D1F` | `#2f3a4a` | `#172033` / `#e2e8f0` |
| `--text-secondary` | `#86868B` | `#5a6b7b` | `#64748b` / `#94a3b8` |
| `--text-disabled` | `#BCBCC2` | `#9aa8b6` | — |
| `--text-white` | `#FFFFFF` | `#FFFFFF` | `#ffffff` |
| `--bg-body` | `#F5F5F7` | `#f5f9ff` | `--layout-bg: #e8f1f3` / `#0b1220` |
| `--bg-surface` | `#FFFFFF` | `#FFFFFF` | `#ffffff` / `#111c31` |
| `--bg-muted` | `#F2F2F7` | `#eef3fa` | `#f8fafc` / `#0f172a` |
| `--border-default` | `#D2D2D7` | `#e3eaf3` | `#d8e2eb` / `#334155` |
| `--border-focus` | `#007AFF` | `#8ec5fc` | `--color-primary` |

**Rule going forward:** every new project theme must define this exact variable set. Component SCSS should only ever reference the variable name, never a literal hex — that's what already makes the expense-tracker and E-commerce codebases nearly drop-in compatible.

### 2.2 Typography

- Font stacks differ (Inter/SF Pro in expense-tracker & portfolio, Roboto in E-commerce) — keep font-family as a themeable variable (`--font-sans`), everything else shared.
- Shared numeric scale (expense-tracker & E-commerce use this verbatim; portfolio uses `clamp()` for the same steps to get fluid headings):

| Token | Size |
|---|---|
| `--text-xs` | 12px |
| `--text-sm` | 14px |
| `--text-base` | 16px |
| `--text-lg` | 18px |
| `--text-xl` | 20px |
| `--text-2xl` | 24px |
| `--text-3xl` | 30px |
| `--text-4xl` | 36px |
| `--text-5xl` | 48px |

- Weights: 400 / 500 / 600 / 700 (portfolio adds 800 for uppercase "eyebrow" labels).
- Headings default to weight 600–700; body defaults to 400.

### 2.3 Spacing, radius, shadow

- Spacing scale (px): **8, 12, 16, 20, 24, 32** — used consistently for padding/gaps across all three.
- Border radius:
  - `--radius-sm`: 4–8px (inputs, small buttons)
  - `--radius-md`: 8–12px (buttons, cards, table rows)
  - `--radius-lg`: 16–24px (modals, containers)
  - `--radius-pill`: 999px / 20px (badges)
- Shadows (elevation ladder, same shape across projects, opacity/color themed):
  - `--shadow-soft`: `0 4px 12px rgba(0,0,0,.05–.08)`
  - `--shadow-medium`: `0 8px 24px rgba(0,0,0,.08–.12)`
  - `--shadow-premium`: `0 20px 40px rgba(0,0,0,.12)` (modals, hero panels)
- Standard transition: `all 0.2s–0.3s ease` (or `cubic-bezier(0.4,0,0.2,1)`).

## 3. Component Patterns

These are the components already present in `src/components/` of this design-system package — treat this as the spec for each.

### Button (`Buttons/`)
`.btn` base + `.btn--{primary|secondary|transparent|danger|edit|delete}` color variant + `.btn--{sm|md|lg}` size + optional `.btn__border--{style}`.
- Disabled: opacity 0.5–0.6, `cursor: not-allowed`, no hover transform.
- Hover: `translateY(-1px)` + shadow lift, or a sliding `::before` fill (E-commerce style) — pick one animation idiom per theme, not both.

### Input / Select (`Select/`, form partials)
- Base fill style: muted background, transparent/subtle border, `--radius-sm`/`md`.
- Focus: border → `--border-focus`, plus a 3–4px tinted ring `box-shadow: 0 0 0 4px rgba(primary, .1–.15)`.
- Disabled: opacity 0.5–0.7, `not-allowed` cursor.
- Error state: red border/text via `--color-error`, helper text 12–13px below field.
- `Select` wraps `react-select`; restyle via `classNamePrefix` to match the same tokens (control height ~42–46px, menu uses `--shadow-medium`).

### Modal (`Modal/`)
- `.modal-overlay`: fixed inset, `rgba(0,0,0,.5)`, centers content, `z-index: 50`.
- `.modal`: max-width ~400px (90% on mobile), `--bg-surface`, `--radius-lg`, `--shadow-premium`/`0 10px 25px rgba(0,0,0,.2)`, padding 1.5rem.
- `.modal-header`: flex space-between with a borderless `.modal-close` (font-size 1.5rem, hover darkens).

### Drawer (`drawer/`)
- Fixed to one edge, `translateX(100%)` ↔ `translateX(0)` transition, own dim overlay (`rgba(0,0,0,.4)`).

### Popover (`Popover/`)
- Absolutely positioned relative to trigger, small fixed width (~240px), `--bg-surface`, `--shadow-soft`, thin border, optional arrow via rotated square.

### Table (`Table/`, `Pagination.jsx`, `TableContainer.jsx`)
- **Card-row table**: `border-collapse: separate; border-spacing: 0 8px;` — every row looks like a floating card.
- `.table__header-cell`: uppercase, `--text-secondary`, letter-spacing .05em, optional sortable `↕` affordance.
- `.table__body-row`: `--bg-surface`, `--radius-md`; hover → `translateY(-2px)` + `--shadow-medium`.
- `.table__body-cell`: padding `20px 24px`.
- Pagination bar: own card (`--bg-surface`, `--radius-lg`, `--shadow-soft`), page-size select + prev/next buttons using the muted button style.

### Tab (`Tab/`)
- Pill container: `--bg-secondary` background, `--radius-md`, padding 4px.
- Each tab button: `--radius-sm`, active = solid `--color-primary` fill + white text; inactive = `--text-secondary`.
- Content panel fades in (`0.2s ease`) below the tab bar.

### Badge (embedded in Table/Notifications)
- Pill radius, tinted background at 10% of the semantic color + solid text of that color (e.g. success/income = green tint+text, error/expense = red tint+text).

### Notifications / Toast (`Notifications/`)
- Fixed top-right stack, `z-index: 9999`, `gap: 10–12px`.
- Each toast: left color bar or solid background per type (info/success/warning/error), slide/fade-in animation (~0.3s), optional auto-dismiss progress bar.

### Breadcrumb (`Breadcrumb/`)
- Inline flex list, `/` or similar text separator, current segment in `--text-primary`, others in `--text-secondary`.

### Loading (`Loading/`)
- Centered spinner, `border-radius: 50%`, one accent border side, `animation: spin 1s linear infinite`.

### Navigation shell (sidebar / topbar / two-column layout)
Three shapes seen, pick per app type:
1. **Sidebar + topbar** (E-commerce, expense-tracker): fixed 250–280px sidebar, `--bg-surface`/dark variant, active link = solid `--color-primary` pill; topbar sticky with breadcrumb.
2. **Sticky split layout** (Portfolio): fixed-width left identity panel + scrollable right content panel, glassmorphic sticky header (`backdrop-filter: blur(14px)`).
Both collapse to a single column with an off-canvas/stacked nav under `768px`.

## 4. Responsive Breakpoints

- `max-width: 768px` — primary mobile breakpoint (sidebar/drawer collapses, padding drops from 24px → 16px).
- `max-width: 600px` / `475px` — secondary tightening for type size and page padding on the smallest screens.

## 5. Adoption Rules for New/Shared Components

1. Reference tokens (`var(--color-primary)`), never hex, inside any component partial added to this package.
2. Every component ships a base block class (`.st-{name}` or bare semantic name) plus BEM `--modifier` variants for color/size/state — don't invent a new naming style per component.
3. Elevation is expressed only through the three shadow tokens (`soft`/`medium`/`premium`) — no ad-hoc `box-shadow` values.
4. Motion defaults to `0.2s–0.3s ease`; reserve longer/spring-like timing for hero/marketing surfaces only (as Portfolio does), not for form/table components.
5. New theme = new set of token values under a project-level `:root` (or `[data-theme]`) block; component SCSS itself never changes between projects.
