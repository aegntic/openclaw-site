import Link from "next/link";
import { WaitlistForm } from "@/components/waitlist-form";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="eyebrow">for builders whose main agent is doing too much and still underdelivering</div>
          <h1>
            <span className="hero-line hero-line-primary">Stop building one</span>
            <span className="hero-line hero-line-primary">overloaded AI agent.</span>
            <span className="hero-line hero-line-secondary">Build an agent civilization instead.</span>
          </h1>
          <p className="sub">A simple, sharp blueprint for <strong>OpenClaw multi-agent architecture</strong>: <strong>Genesis Agent</strong>, <strong>Agent Registry</strong>, <strong>Scheduler</strong>, <strong>Dispatcher</strong>, <strong>Lifecycle</strong>, <strong>Contracts</strong>, and the specialist AI worker pattern that actually scales.</p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="#waitlist">Get instant access — $29</Link>
            <Link className="btn btn-secondary" href="#free">Read the free alpha first</Link>
          </div>
          <div className="micro">Useful immediately. No fluff. No inflated guru haze. Built for people already in the arena.</div>

          <div className="grid">
            <div className="card hero-card">
              <div className="card-pad">
                <div className="notice">The core insight</div>
                <h2 className="section-heading" style={{marginTop:"14px"}}>Your operator should be calm. Your workers should be boring. Your system should be legible.</h2>
                <p className="lead" style={{fontSize:"17px", margin:0}}>Most broken agent stacks are not failing because the model is too weak. They are failing because identity, routing, scheduling, memory, and scope are all blurred together inside one overburdened loop.</p>
                <div className="kpis" style={{marginTop:"18px"}}>
                  <div className="kpi"><strong>1</strong><span className="muted">thin operator</span></div>
                  <div className="kpi"><strong>many</strong><span className="muted">narrow specialists</span></div>
                  <div className="kpi"><strong>0</strong><span className="muted">prompt soup tolerated</span></div>
                </div>
              </div>
            </div>
            <div className="card hero-card">
              <div className="card-pad">
                <div className="notice">Free architecture map</div>
                <div className="diag" style={{marginTop:"14px"}}>{`Human
  ↓
Operator
  ↓
Genesis ───────→ Registry
  ↓                ↓
Planner ←→ Dispatcher ←→ Scheduler
  ↓                ↓
Workers ←→ Mailboxes / Event Bus ←→ Artifacts / Memory / Logs
  ↓
Evaluator / Repair / Policy / Lifecycle`}</div>
                <p className="muted" style={{margin:"14px 0 0"}}>This page gives away enough to improve a weak setup now. The paid layer compresses the whole framework into one coherent product.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="free">
        <div className="wrap">
          <h2 className="section-heading">Free alpha you can use now</h2>
          <p className="lead">Take these and implement them immediately. They will improve most messy OpenClaw multi-agent systems even before you buy anything.</p>
          <div className="split">
            <div className="list">
              <div className="item">
                <h3>1. Split time from thinking</h3>
                <p>Do not run cron jobs through your main agent. Use a scheduler to wake a dormant specialist with a narrow contract. The operator should not pretend to be a clock.</p>
              </div>
              <div className="item">
                <h3>2. Give every agent a compact identity stack</h3>
                <p>At minimum: <strong>SOUL</strong>, <strong>IDENTITY</strong>, <strong>HEARTBEAT</strong>, <strong>USER</strong>, <strong>RULES</strong>, <strong>CONTRACT</strong>, <strong>CAPABILITIES</strong>. That stops role drift before it starts.</p>
              </div>
              <div className="item">
                <h3>3. Create a registry before you create more agents</h3>
                <p>If you cannot answer "who can do what, with which tools, in which state, under which constraints?" then you do not yet have an ecosystem. You have a pile.</p>
              </div>
            </div>
            <div className="list">
              <div className="item">
                <h3>4. Route by contract, not by vibes</h3>
                <p>Each agent should declare what it accepts, what it returns, how it fails, and when it escalates. This makes dispatching reliable and debugging much faster.</p>
              </div>
              <div className="item">
                <h3>5. Use lifecycle states</h3>
                <p>Draft. Validated. Registered. Active. Dormant. Paused. Degraded. Quarantined. Deprecated. Retired. Broken systems often fail simply because everything is treated as permanently "active."</p>
              </div>
              <div className="item">
                <h3>6. Externalize outputs as artifacts</h3>
                <p>Named artifacts beat giant context dumps. Save reports, summaries, decisions, logs, and state as versioned outputs that other agents can reference cleanly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="card">
            <div className="card-pad">
              <h2 className="section-heading">Three mistakes that make your main agent feel dumb</h2>
              <div className="split">
                <div className="item">
                  <h3>Context pollution</h3>
                  <p>One agent is carrying strategic planning, cron timing, memory retrieval, execution, and reporting at the same time. It starts to reason like a cluttered room.</p>
                </div>
                <div className="item">
                  <h3>Hidden permissions</h3>
                  <p>When tool access and file scope are implicit, agents behave inconsistently. Explicit capabilities make behavior legible and safer.</p>
                </div>
                <div className="item">
                  <h3>No observability</h3>
                  <p>If you cannot trace who woke, what they touched, what they returned, and why they failed, you will blame the model for architectural problems.</p>
                </div>
                <div className="item">
                  <h3>No dispatcher/scheduler split</h3>
                  <p>The operator should govern. The dispatcher should route. The scheduler should handle time. Blending these roles makes everything mushy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="inside">
        <div className="wrap">
          <h2 className="section-heading">What&apos;s inside the OpenClaw paid blueprint</h2>
          <p className="lead">This is the compact operator&apos;s manual for turning a weak single-agent setup into a structured OpenClaw multi-agent system.</p>
          <div className="split">
            <div className="list">
              <div className="item"><h3>Genesis Agent expanded</h3><p>Spec intake, role decomposition, constitution rendering, capability shaping, validation before birth, registration handshake, and lifecycle placement.</p></div>
              <div className="item"><h3>Agent Registry model</h3><p>The fields, the relationships, the query patterns, the graph logic, and the way discovery, routing, and health tracking should work.</p></div>
              <div className="item"><h3>Scheduler + Dispatcher design</h3><p>The clean separation of time, routing, concurrency, wake rules, dormant specialists, backoff, retries, and overlap prevention.</p></div>
              <div className="item"><h3>Contract layer</h3><p>Accepted inputs, return types, failure modes, escalation behavior, latency expectations, and idempotency rules.</p></div>
            </div>
            <div className="list">
              <div className="item"><h3>Memory fabric</h3><p>Scratch, working, identity, project, user, system, and audit memory layers so each agent only sees what it needs.</p></div>
              <div className="item"><h3>Lifecycle + policy + evaluator</h3><p>The governance pieces that stop bad outputs, scope creep, and silent degradation from spreading across the system.</p></div>
              <div className="item"><h3>Repair loop + shadow mode</h3><p>How to evolve agents safely, compare species in parallel, and improve weak components without detonating production.</p></div>
              <div className="item"><h3>Best build order</h3><p>A phased sequence so you do not mass-produce confusion before the host infrastructure is ready.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing">
        <div className="wrap">
          <div className="offer">
            <div className="card">
              <div className="card-pad">
                <div className="notice">Low-friction entry offer</div>
                <h2 className="section-heading" style={{marginTop:"14px"}}>Reasonably priced. Immediately useful.</h2>
                <p>Built for builders who want signal fast, not a bloated course with 47 modules and a fake countdown timer.</p>
                <div className="price">$29 <span className="strike">$79</span></div>
                <p className="muted">One-time. Digital delivery. Start with the free alpha on this page, then take the compressed full stack when you want the clean architecture in one place.</p>
                <div className="cta-row">
                  <Link className="btn btn-primary" href="#waitlist">Buy the blueprint</Link>
                  <Link className="btn btn-secondary" href="#faq">See FAQ</Link>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-pad">
                <h2 className="section-heading">You&apos;re buying compression</h2>
                <div className="list">
                  <div className="item"><h3>No-code fluff removed</h3><p>You get the architecture logic, not hype theatre.</p></div>
                  <div className="item"><h3>Useful before implementation</h3><p>Even reading it will help you diagnose why your current setup is underperforming.</p></div>
                  <div className="item"><h3>Designed to convert chaos into structure</h3><p>The whole point is to replace overloaded prompts with a clean operating model.</p></div>
                  <div className="item"><h3>Best used alongside your own stack</h3><p>OpenClaw, n8n, Docker-based flows, internal operator systems, or custom agent platforms.</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="wrap">
          <h2 className="section-heading">FAQ</h2>
          <div className="faq">
            <details open>
              <summary>Is this for beginners?</summary>
              <p className="muted">It is written simply, but it is aimed at people already building or planning agent systems. If you have ever felt your "main agent" was trying to do too much, this is for you.</p>
            </details>
            <details>
              <summary>Is the free material on this page actually enough to help?</summary>
              <p className="muted">Yes. The free section is intentionally useful. The paid version gives you the full structured model, relationships, components, and sequencing in one compact package.</p>
            </details>
            <details>
              <summary>Why is the price this low?</summary>
              <p className="muted">Because this is positioned as a sharp front-end digital product, not consulting. The goal is fast adoption, not artificial scarcity theatre.</p>
            </details>
            <details>
              <summary>Will this work with only one agent?</summary>
              <p className="muted">It will improve one agent by clarifying identity and scope, but the real leverage appears when you separate operator, dispatcher, scheduler, and specialist workers.</p>
            </details>
          </div>
        </div>
      </section>

      <section id="waitlist">
        <div className="wrap two-column">
          <div>
            <h2 className="section-heading">Get early access</h2>
            <p className="lead">Join the waitlist to get notified when the full blueprint launches, plus early supporter pricing.</p>
            <div className="notice">Push this repo to GitHub, wire your environment variables, and you have a serious product front door that can deploy to Netlify or Cloudflare in one move.</div>
          </div>
          <div className="contact-panel">
            <h3>Join the OpenClaw waitlist</h3>
            <p>Tell us what you&apos;re building, what&apos;s currently failing, and where you need the system to stop acting like mush.</p>
            <WaitlistForm />
          </div>
        </div>
      </section>

      <div className="sticky-cta">
        <Link className="btn btn-primary" href="#waitlist">Get the Blueprint — $29</Link>
      </div>
    </>
  );
}
