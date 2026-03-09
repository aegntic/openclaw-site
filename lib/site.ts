export const site = {
  name: "OpenClaw",
  title: "OpenClaw — Agent infrastructure that stays legible under pressure",
  description:
    "A premium product website for OpenClaw: the agent runtime built around constitutions, registries, scheduling, routing, observability, and evolutionary improvement.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/your-org/openclaw"
};

export const heroMetrics = [
  { value: "4-core", label: "substrate: Registry, Dispatcher, Scheduler, Genesis" },
  { value: "8 phases", label: "from constitution to shadow evolution" },
  { value: "1 trace", label: "should reconstruct the whole organism" }
] as const;

export const pillars = [
  {
    title: "Constitutional agents",
    copy:
      "Every agent gets a genome: SOUL, IDENTITY, HEARTBEAT, USER, RULES, CONTRACT, CAPABILITIES, and durable state."
  },
  {
    title: "Registry-first routing",
    copy:
      "Discovery, health, lifecycle, and contract resolution live in one source of truth instead of inside a bloated operator prompt."
  },
  {
    title: "Dormant specialist activation",
    copy:
      "The scheduler wakes narrow workers only when needed, so time-based automation does not pollute your main operator."
  },
  {
    title: "Observable artifact flow",
    copy:
      "Work becomes named artifacts, with lineage, trace IDs, evaluator checks, and repair loops instead of vague chat residue."
  }
] as const;

export const platformCards = [
  {
    title: "Operator",
    eyebrow: "Governance",
    text:
      "The operator stops being the smartest thing in the room and becomes the calmest: intake, visibility, escalation, and route selection."
  },
  {
    title: "Registry",
    eyebrow: "Source of truth",
    text:
      "Agents, capabilities, lifecycle state, health, relationships, and mailbox addressing are queryable rather than implied."
  },
  {
    title: "Dispatcher",
    eyebrow: "Routing",
    text:
      "Tasks resolve by contract, policy, lifecycle, cost, and health. No hard-coded spaghetti."
  },
  {
    title: "Scheduler",
    eyebrow: "Time",
    text:
      "Cron logic is isolated into a purpose-built clock so specialist workers stay dormant until a clean wake signal arrives."
  },
  {
    title: "Genesis",
    eyebrow: "Birth pipeline",
    text:
      "Genesis compiles new agent species from templates, binds capabilities, validates behavior, and registers the result."
  },
  {
    title: "Evaluator + Repair",
    eyebrow: "Immunity",
    text:
      "Bad work gets scored, retried, rerouted, or quarantined before it spreads."
  }
] as const;

export const launchPaths = [
  {
    name: "Core",
    price: "Free",
    priceId: null,
    summary: "For solo builders who want the architecture, the site, and the first living slice.",
    bullets: [
      "Website + docs",
      "Registry / Dispatcher / Scheduler story",
      "Supabase-ready waitlist",
      "Cloudflare + Netlify deploy path"
    ]
  },
  {
    name: "Studio",
    price: "$29/mo",
    priceId: process.env.NEXT_PUBLIC_STRIPE_STUDIO_PRICE_ID || "price_STUDIO-placeholder",
    summary: "For teams shaping internal agent infrastructure and wanting a sharper market-facing front door.",
    bullets: [
      "Expanded docs and launch narrative",
      "Branded deployments",
      "Lead capture + CRM connection",
      "Architecture consultation motion"
    ]
  },
  {
    name: "Enterprise Partner",
    price: "Custom",
    priceId: null,
    summary: "For groups designing controlled agent fabrics, governance layers, and high-trust operational surfaces.",
    bullets: [
      "Security review path",
      "Private deployment model",
      "Design-partner onboarding",
      "Custom content + technical proof pages"
    ]
  }
] as const;

export const beginnerSteps = [
  {
    step: "01",
    title: "See the organism, not the prompt",
    text:
      "OpenClaw is easier to understand when you stop imagining a chatbot and start imagining bounded processes with memory, law, scheduling, and identity."
  },
  {
    step: "02",
    title: "Meet the first four cores",
    text:
      "Registry holds truth, Dispatcher routes work, Scheduler governs time, and Genesis births new agents when the host system is ready."
  },
  {
    step: "03",
    title: "Run one honest vertical slice",
    text:
      "Begin with Operator, GitHub Monitor, and Artifact Evaluator. Let a scheduled tick create a traceable artifact and score it."
  },
  {
    step: "04",
    title: "Scale by multiplication, not mush",
    text:
      "Once routing, contracts, and lifecycle are real, you can safely multiply narrow agents instead of inflating one overworked brain."
  }
] as const;

export const faqs = [
  {
    q: "Is this a marketing site, docs site, or product shell?",
    a: "All three. The build is designed to sell the idea, teach the model, and capture interest without forcing you to split your story across separate properties on day one."
  },
  {
    q: "Do I need Supabase to run the website?",
    a: "No. The site renders without Supabase. Supabase is only needed when you want waitlist/contact submissions stored and routed cleanly."
  },
  {
    q: "Should I deploy to Netlify or Cloudflare?",
    a: "Both paths are supported in the pack. Netlify is the smoother route for rapid import from GitHub. Cloudflare is excellent when you want a Worker-native edge posture."
  },
  {
    q: "Can brand-new users understand OpenClaw from this site?",
    a: "That is one of the central design goals. The docs and homepage are written so a newcomer can go from zero to a clear mental model quickly."
  }
] as const;

export const useCases = [
  {
    title: "Founders",
    text: "Give your product a precise story before the runtime is fully mature."
  },
  {
    title: "Platform teams",
    text: "Explain governance, contracts, observability, and lifecycle in language executives and engineers can both metabolize."
  },
  {
    title: "AI infra operators",
    text: "Publish a convincing front door for agent systems that need more than a generic SaaS template."
  }
] as const;

export const architecturePlanes = [
  {
    plane: "Control plane",
    items: ["Operator", "Registry", "Dispatcher", "Scheduler", "Policy", "Lifecycle"]
  },
  {
    plane: "Execution plane",
    items: ["Workers", "Mailboxes", "Artifacts", "Evaluator", "Repair"]
  },
  {
    plane: "Knowledge plane",
    items: ["Identity memory", "Project memory", "Audit memory", "Schemas", "Runbooks"]
  }
] as const;
