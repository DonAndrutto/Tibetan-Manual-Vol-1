# Project notes for Claude

## Stack
- Vite + React 19 + Tailwind v4 (`@tailwindcss/vite`)
- Single-file build via `vite-plugin-singlefile` → outputs to `docs/`
- TypeScript, no test suite
- `npm run lint` = `tsc --noEmit`
- `npm run build` = `vite build` (outputs `docs/index.html`)

## docs/index.html is generated — DO NOT edit or rebuild manually

`docs/index.html` is the GitHub Pages artifact. It is rebuilt automatically by
`.github/workflows/deploy.yml` on every push to `main` (the workflow has
`paths-ignore: ['docs/**', '.github/workflows/**']` to prevent self-triggering).

When making code changes:
- Edit `src/` only
- Run `npm run lint` and `npm run build` locally to verify, then **`git checkout -- docs/index.html`** to discard the rebuild before committing
- Never include `docs/index.html` in a commit. The workflow owns that file.

## Branch / PR workflow

Sandboxed sessions cannot push to `main` directly — work lands on `main` only
when a PR is merged. After pushing, **always check the PR state before adding
more commits**:

- If the PR is **open** → push follow-up commits to the same branch, they ride the PR
- If the PR is **merged or closed** → open a **new PR**. Pushing to a closed-PR branch leaves the work stranded on the branch with no path to `main`.

Use `mcp__github__pull_request_read` (method `get`) to check state. The `merged`
boolean and `state: closed` will tell you. If unsure, list PRs for the head
branch with `mcp__github__list_pull_requests` (filter by `head`).

## Sidebar layout gotcha (mobile)

The sidebar nav (`<nav>` in `src/App.tsx` around line 634) uses
`flex-1 min-h-0 overflow-y-auto`. The `min-h-0` is **load-bearing** — flexbox
defaults `min-height: auto`, which prevents `flex-1` items from shrinking
below their content size, so `overflow-y-auto` never engages. Don't remove it.

The chapter hint is rendered at the bottom of each section in
`SectionWrapper` (main content area), not in the sidebar — putting it back in
the sidebar will cover nav items when the chapter list is long.

## Section / nav data

`navItems` in `src/App.tsx` is the ordered source of truth for both the
sidebar and the "Next topic →" button. Adding a new section means:
1. Add the id to the `Section` union type (around line 152)
2. Add the entry to `navItems` (around line 228) in the order it should appear
3. Render its `{activeSection === '<id>' && (<SectionWrapper>...)}` block in main
