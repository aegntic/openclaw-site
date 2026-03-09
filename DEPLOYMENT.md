# Deployment Guide

## Netlify

1. Push the repo to GitHub.
2. In Netlify, choose **Add new site** → **Import an existing project**.
3. Select the repository.
4. Add these environment variables:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `NEXT_PUBLIC_GITHUB_URL`
5. Deploy.

Netlify should auto-detect the Next.js project. The included `netlify.toml` is intentionally light.

## Cloudflare Workers

1. Install dependencies.
2. Authenticate Wrangler.
3. Add environment variables through Cloudflare or your CI pipeline.
4. Run:

```bash
npm run deploy:cloudflare
```

The project includes:
- `wrangler.jsonc`
- `open-next.config.ts`
- Cloudflare build scripts in `package.json`

## Supabase

Run the migration in `supabase/migrations/001_waitlist.sql`.

The form route uses the service role key on the server. Keep it out of the browser and out of client-side code.
