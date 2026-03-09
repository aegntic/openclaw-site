import { SectionHeading } from "@/components/section-heading";

export default function DocsGettingStartedPage() {
  return (
    <>
      <SectionHeading
        eyebrow="Getting Started"
        title="Run the site fast, then harden it in layers"
        text="This is the launch path for a brand-new operator. Do not overcomplicate the first move. Get the site live, wire one backend path, and then deepen the organism."
      />
      <div className="check-grid">
        <article className="check-item">
          <h3>1. Clone and install</h3>
          <ul className="list tight">
            <li><code>npm install</code></li>
            <li><code>cp .env.example .env.local</code></li>
            <li><code>npm run dev</code></li>
          </ul>
        </article>
        <article className="check-item">
          <h3>2. Add Supabase</h3>
          <ul className="list tight">
            <li>Create a project.</li>
            <li>Paste URL and publishable key.</li>
            <li>Add the service role key for form writes.</li>
            <li>Run the migration in <code>supabase/migrations/001_waitlist.sql</code>.</li>
          </ul>
        </article>
        <article className="check-item">
          <h3>3. Push to GitHub</h3>
          <ul className="list tight">
            <li>Create a repo.</li>
            <li>Push this project.</li>
            <li>Enable the included CI workflow.</li>
          </ul>
        </article>
        <article className="check-item">
          <h3>4. Deploy</h3>
          <ul className="list tight">
            <li>Netlify: import the repo and add env vars.</li>
            <li>Cloudflare: run <code>npx wrangler deploy</code>.</li>
          </ul>
        </article>
      </div>
      <div className="panel" style={{ marginTop: "1rem" }}>
        <h3>Recommended first live posture</h3>
        <p className="muted">
          Keep the site lean. Ship the homepage, architecture page, docs entry, and waitlist flow first. Once that is breathing, connect analytics, CRM, and deeper launch content.
        </p>
      </div>
    </>
  );
}
