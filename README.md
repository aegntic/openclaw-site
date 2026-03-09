# OpenClaw — Production Website Pack

A polished Next.js App Router website for OpenClaw: a market-facing product site shaped around the OpenClaw architecture, with docs, onboarding, pricing paths, architecture storytelling, and a Supabase-ready waitlist/contact pipeline.

## What you get

- premium homepage with strong positioning and CTAs
- platform, architecture, docs, pricing, and contact pages
- beginner-first onboarding path for people who have never touched agent systems
- Supabase-ready waitlist API route and SQL migration
- GitHub Actions CI workflow
- deploy-ready config for Netlify and Cloudflare Workers
- sitemap, robots, metadata, structured content, and FAQ blocks

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Supabase setup

1. Create a Supabase project.
2. Copy your project URL and publishable key into `.env.local`.
3. Add your service role key for server-side inserts.
4. Run the SQL in `supabase/migrations/001_waitlist.sql`.

The contact and waitlist form posts to `/api/waitlist`.

### Demo mode

If the Supabase environment variables are missing, the API route returns a successful **demo-mode** response instead of storing the lead. This makes the site previewable without backend credentials while staying transparent about storage.

## Deploy to Netlify

1. Push this folder to GitHub.
2. Import the repo into Netlify.
3. Add the same environment variables from `.env.example`.
4. Trigger a deploy.

This project is set up so Netlify can auto-detect the Next.js app.

## Deploy to Cloudflare Workers

1. Install dependencies.
2. Add your Cloudflare credentials locally.
3. Run:

```bash
npx wrangler deploy
```

The included `wrangler.jsonc` and `open-next.config.ts` are aligned to the current OpenNext-on-Workers pattern.

## Recommended production checklist

- wire a custom domain
- add analytics (Plausible, PostHog, or GA4)
- add Sentry or another error monitor
- rotate and scope all environment secrets
- configure email notifications for waitlist submissions
- connect a CRM or enrichment layer if you want high-touch outreach
- replace placeholder pricing language with your real commercial motion

## Pages

- `/` — homepage
- `/platform` — product and capability breakdown
- `/architecture` — the OpenClaw operating model
- `/docs` — docs entry point
- `/docs/new-here` — beginner path
- `/docs/getting-started` — setup path
- `/docs/concepts` — system language
- `/pricing` — launch paths
- `/contact` — waitlist and architecture session CTA

## GitHub workflow

The workflow in `.github/workflows/ci.yml` installs dependencies, lints, and builds the site on pushes and pull requests.
