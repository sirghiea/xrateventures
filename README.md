# XrateVentures

Website for XrateVentures — https://xrateventures.com

Built with Next.js (App Router, static export) and React. Deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

```bash
npm install
npm run dev     # local development at http://localhost:3000
npm run build   # static export to ./out
```

- Pages: `src/app/*/page.tsx`
- Shared components: `src/components/`
- Sectors, navigation, contact details: `src/content/site.ts`
- Design system: `src/app/globals.css`
- Images and static files: `public/`
