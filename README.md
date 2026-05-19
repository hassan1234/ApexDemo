# APEX Demolition

Vite + React build of the APEX Demolition site.

## Local dev

```bash
npm install
npm run dev
```

Visit http://localhost:5173.

## Build

```bash
npm run build
```

Static output lands in `dist/`.

## Deploy to Vercel

1. Push to a Git repo.
2. Import the repo in Vercel — Vite is auto-detected (the `vercel.json` here pins it explicitly).
3. No env vars needed.

Or, from the CLI:

```bash
npm i -g vercel
vercel
```

## Structure

```
vite-app/
├── index.html              Vite entry HTML
├── package.json
├── vite.config.js
├── vercel.json             Vercel framework hint
├── public/
│   └── assets/             Static media (hero video + poster)
└── src/
    ├── main.jsx            ReactDOM.createRoot entry
    ├── App.jsx             Page shell + tweaks
    ├── styles.css          Global styles
    ├── hooks.jsx           useScrollY, useInView, CountUp, FadeUp
    └── components/
        ├── Nav.jsx
        ├── Hero.jsx
        ├── Marquee.jsx
        ├── Stats.jsx
        ├── SectionHead.jsx
        ├── Services.jsx
        ├── Process.jsx
        ├── Projects.jsx
        ├── BeforeAfter.jsx
        ├── Fleet.jsx
        ├── Cta.jsx
        ├── Footer.jsx
        └── TweaksPanel.jsx
```

## Tweaks

`<TweaksPanel>` includes a localStorage-persisted version of the original edit-mode protocol so accent color, hero video URL, scroll FX, etc. survive reloads in production.
