## Overview

This is a modern, dark-themed personal portfolio for **Sowmiya Devi**, a **Frontend Angular Developer** with 4+ years of experience building and migrating enterprise-scale applications using Angular and TypeScript.

The site focuses on:
- **Growth** and continuous learning
- **Vision** for advanced Angular architecture
- **Ambition** to work on complex, product-based applications
- **Remote-ready professionalism** and collaboration
- **Future career direction** toward scalable enterprise frontends

All content is rendered dynamically on the client using **TypeScript** and **template literals**, with styling via **Tailwind CSS** and a small amount of custom CSS.

## Tech Stack

- **HTML5** (semantic, minimal root containers)
- **CSS** with **Tailwind CSS** (via CDN) and custom styles in `styles.css`
- **TypeScript** (strict mode, ES Modules)
- **No frameworks**: no Angular, React, or Vue on the frontend – pure static site

## Folder Structure

```text
/portfolio
 ├── index.html       # Root HTML shell – only contains container and script/style includes
 ├── styles.css       # Custom styles (background, glassmorphism, animations, scroll behavior)
 ├── data.ts          # Structured data for all sections (hero, skills, experience, projects, etc.)
 ├── main.ts          # TypeScript entry; renders all sections and hooks up interactions
 ├── tsconfig.json    # Strict TypeScript configuration (ES modules, outDir=dist)
 ├── package.json     # TypeScript build scripts
 ├── README.md        # This file
 └── dist/            # (Generated) Compiled JavaScript output from TypeScript
```

> Note: You can optionally add a resume PDF next to `index.html` (e.g. `SowmiyaDevi-Frontend-Angular-Resume.pdf`) and update `resumeUrl` in `data.ts` if needed.

## Setup Instructions

From the repository root (already in your Git workspace), navigate into the `portfolio` folder:

```bash
cd "S:/SOWMIYA/SOWMIYA/New folder/sowmiya-portfolio/sowmiya-portfolio/portfolio"
```

Install TypeScript locally:

```bash
npm install
```

or, if you prefer a one-off install:

```bash
npm install --save-dev typescript
```

### Build

Compile the TypeScript files to JavaScript:

```bash
npm run build
```

This will create the `dist/` folder with `main.js`, which is loaded by `index.html` using a `<script type="module" src="./dist/main.js" defer></script>`.

To rebuild on changes during development:

```bash
npm run build:watch
```

Then open `index.html` in a browser (or serve via a simple static server).

## Deployment (GitHub Pages)

You can deploy this portfolio using **GitHub Pages** for free.

### 1. Push Code to GitHub

Assuming you have already initialized a Git repository and added your remote:

```bash
git add .
git commit -m "Add static TypeScript + Tailwind portfolio"
git push origin main
```

If your default branch is `master`, replace `main` with `master`.

### 2. Build Before Deploy

Make sure the compiled JavaScript exists in `dist/`:

```bash
cd portfolio
npm install
npm run build
cd ..
```

Commit the generated `dist/` folder so that GitHub Pages can serve the final JavaScript:

```bash
git add portfolio/dist
git commit -m "Include compiled JS for GitHub Pages"
git push origin main
```

### 3. Enable GitHub Pages

1. Go to your GitHub repository in the browser.
2. Open **Settings**.
3. Navigate to **Pages** (or **Code & automation → Pages**).
4. Under **Source**, choose:
   - **Branch**: `main` (or your default branch)
   - **Folder**: `/root` (or `/docs` if you move the portfolio there)
5. Click **Save**.

If you want the portfolio to live at the repo root:
- Ensure `portfolio/index.html` is moved or copied to the repository root or into `/docs`, depending on the Pages configuration you select.

### 4. Live URL Format

- If the repository is named `sowmiya-portfolio`, your URL will look like:
  - `https://<your-github-username>.github.io/sowmiya-portfolio/`
- If you configure a `docs/` folder, the URL is usually the same; just ensure `index.html` is inside the published folder.

## Optional: Custom Domain

1. Buy a domain from any registrar (e.g. Namecheap, GoDaddy, etc.).
2. In your GitHub repository, go to **Settings → Pages**.
3. Under **Custom domain**, enter your domain (e.g. `sowmiyadevi.dev`) and save.
4. At your domain registrar, create **DNS A records** pointing to GitHub Pages IPs (check the latest in GitHub Docs) or a **CNAME** record pointing to:
   - `<your-github-username>.github.io`
5. Wait for DNS propagation (can take from a few minutes up to 24 hours).

## Live URL Placeholder

Once deployed, update this section with your real link:

- **Live Portfolio**: `https://<your-github-username>.github.io/sowmiya-portfolio/`

