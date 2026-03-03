# UI Coding Standards

## Component Library

**All UI components must use [shadcn/ui](https://ui.shadcn.com/) exclusively.**

- Do **not** create custom UI components. If a UI element is needed, find the appropriate shadcn/ui component.
- Do **not** build wrappers around shadcn/ui components unless adding non-visual logic (e.g., data fetching, state management).
- Install components via the shadcn CLI:
  ```bash
  npx shadcn@latest add <component-name>
  ```
- Components are added to `src/components/ui/` and are owned by the project — edit them only when necessary to meet design requirements.

## Date Formatting

Use **[date-fns](https://date-fns.org/)** for all date formatting. Do not use `Date.prototype.toLocaleDateString`, `Intl.DateTimeFormat`, or any other date library.

### Required Format

Dates displayed in the UI must follow this format:

```
{ordinal day} {abbreviated month} {full year}
```

**Examples:**

| Date | Display |
|------|---------|
| 2025-09-01 | 1st Sep 2025 |
| 2025-08-02 | 2nd Aug 2025 |
| 2026-01-03 | 3rd Jan 2026 |
| 2024-06-04 | 4th Jun 2024 |

### Implementation

Use the `do` (ordinal day), `MMM` (abbreviated month), and `yyyy` (full year) format tokens:

```ts
import { format } from "date-fns";

format(date, "do MMM yyyy");
// e.g. "1st Sep 2025"
```
