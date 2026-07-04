# Tibetan Treasury — Grammar Vol. I

An interactive study companion for Standard Tibetan grammar, inspired by Gen
Dawa's teachings. Nine chapters cover the alphabet and orthography, nouns and
particles, sentence structure, adjectives and numbers, the verb system and
evidentiality, imperatives and requests, modality, complex syntax, and
idiomatic nuance — with tap-to-reveal quizzes, reading practice, a syllable
builder, and cross-linked topics throughout.

## Development

**Prerequisites:** Node.js 20+

```bash
npm install    # install dependencies
npm run dev    # start the dev server on http://localhost:3000
npm run lint   # type-check (tsc --noEmit)
npm run build  # build the single-file bundle into docs/
```

## Architecture

- **Vite + React 19 + Tailwind v4** (`@tailwindcss/vite`), animations via
  [`motion`](https://motion.dev), icons via `lucide-react`.
- The whole app lives in [`src/App.tsx`](src/App.tsx); all lesson content is
  data in [`src/constants.ts`](src/constants.ts).
- `vite-plugin-singlefile` inlines everything into **one HTML file** at
  `docs/index.html`, which GitHub Pages serves directly.

## Deployment

`docs/index.html` is a **generated artifact — never edit or commit it
manually**. The [`Build & Deploy` workflow](.github/workflows/deploy.yml)
rebuilds and commits it automatically on every push to `main`. After building
locally to verify changes, discard the rebuilt file with
`git checkout -- docs/index.html` before committing.
