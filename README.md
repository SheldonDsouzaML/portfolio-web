# Sheldon Dsouza — AI/ML Engineer Portfolio

Premium, recruiter-focused portfolio built with **React 18 + Vite + TypeScript + Tailwind CSS**.

## Getting Started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
npm run preview  # preview the built site
```

## Tech Stack
- React 18 + TypeScript
- Vite 5 (build tool)
- Tailwind CSS 3
- lucide-react (icons)
- Custom animated neural-network canvas background
- Glassmorphism design system

## Project Structure
```
.
├── index.html              # Vite entry HTML
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── public/
│   └── robots.txt
└── src/
    ├── main.tsx            # React bootstrap
    ├── App.tsx             # Full portfolio page
    ├── index.css           # Tailwind + design tokens
    └── components/
        ├── NeuralBackground.tsx
        └── Typewriter.tsx
```

## Deploying to Vercel
1. Push this folder to a GitHub repo.
2. Go to https://vercel.com → **New Project** → import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output: `dist`.
4. Click **Deploy**. Done.

Also works out of the box on Netlify, Cloudflare Pages, GitHub Pages, or any static host.

## Customize
- Edit copy / project list in `src/App.tsx` (constants at the top).
- Drop your resume at `public/resume.pdf` so the **Resume** button works.
- Colors live as CSS variables in `src/index.css`.

— Sheldon Dsouza
