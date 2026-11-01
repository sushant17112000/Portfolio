# Sushant Bhat Portfolio

Interactive portfolio: work projects by ownership and impact, GitHub builds, white papers, thesis, decks.

## How it works
- `portfolio.html` is the single source. The same file is published as the Claude artifact.
- `build.js` wraps it into a full page at `dist/index.html`.
- Vercel runs `node build.js` on every push to `main` and serves `dist/`.

## Run locally
```
node build.js
open dist/index.html
```
