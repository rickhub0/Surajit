# Surajit Das — Premium 3D Portfolio

A premium, dark-theme 3D developer portfolio built with **React + Vite + Tailwind CSS + React Three Fiber + Framer Motion**.

## Features

- 3D animated hero scene using React Three Fiber + Drei
- Glassmorphism interface with animated gradient background
- Scroll-based section transitions with Framer Motion
- Floating particles, cursor effect, and animated badges
- Premium project cards with hover depth effects
- Responsive layout for desktop and mobile

## Tech Stack

- React (Vite)
- Tailwind CSS
- Three.js + React Three Fiber + Drei
- Framer Motion
- Lucide React (icons)

## Project Structure

```text
.
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    └── components
        ├── CustomCursor.jsx
        ├── LoaderScreen.jsx
        └── ThreeHeroScene.jsx
```

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Build production version:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## Deploy on Vercel

### Option A: Vercel Dashboard

1. Push this repository to GitHub.
2. Go to [https://vercel.com/new](https://vercel.com/new).
3. Import the repo.
4. Framework preset: **Vite** (auto-detected).
5. Build command: `npm run build`
6. Output directory: `dist`
7. Click **Deploy**.

### Option B: Vercel CLI

```bash
npm i -g vercel
vercel
```

Then follow prompts:
- Link/create project
- Confirm build settings (Vite)
- Deploy

For production deployment:

```bash
vercel --prod
```
