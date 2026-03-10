"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckoutModal } from "@/components/checkout-modal";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  useEffect(() => {
    const handleOpenCheckout = () => setIsCheckoutOpen(true);
    window.addEventListener("openCheckout", handleOpenCheckout);
    return () => window.removeEventListener("openCheckout", handleOpenCheckout);
  }, []);

  useEffect(() => {
    const wordTargets = document.querySelectorAll(
      ".hero .eyebrow, .hero .sub, .hero .micro, p.lead, .notice, summary, footer .wrap > div"
    );

    function splitWordsInNode(node: Node): Node {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent;
        if (!text?.trim()) return document.createTextNode(text || "");
        const frag = document.createDocumentFragment();
        const parts = text.split(/(\s+)/);

        parts.forEach((part) => {
          if (/^\s+$/.test(part)) {
            frag.appendChild(document.createTextNode(part));
            return;
          }

          if (!part) return;

          const wrap = document.createElement("span");
          wrap.className = "word-wrap";

          const inner = document.createElement("span");
          inner.className = "word";
          inner.setAttribute("aria-hidden", "true");
          inner.textContent = part;

          wrap.appendChild(inner);
          frag.appendChild(wrap);
        });

        return frag;
      }

      if (node.nodeType === Node.ELEMENT_NODE) {
        const clone = (node as Element).cloneNode(false) as Element;
        Array.from(node.childNodes).forEach((child) => {
          clone.appendChild(splitWordsInNode(child));
        });
        return clone;
      }

      return node.cloneNode(true);
    }

    function splitElement(el: Element) {
      if ((el as HTMLElement).dataset.splitDone || el.closest(".diag")) return;
      el.setAttribute("aria-label", el.textContent?.trim() || "");

      const fragment = document.createDocumentFragment();
      Array.from(el.childNodes).forEach((child) => {
        fragment.appendChild(splitWordsInNode(child));
      });

      el.innerHTML = "";
      el.appendChild(fragment);
      (el as HTMLElement).dataset.splitDone = "true";
    }

    wordTargets.forEach(splitElement);

    const heroTimeline = gsap.timeline({ defaults: { ease: "power4.out" } });

    heroTimeline
      .from(".nav", { y: -24, opacity: 0, duration: 0.7 })
      .from(".hero .eyebrow .word", { x: 50, opacity: 0, filter: "blur(8px)", stagger: 0.02, duration: 0.8 }, "-=0.25")
      .from(".hero h1", { y: -120, opacity: 0, scaleY: 0.92, transformOrigin: "50% 0%", duration: 1.05, ease: "bounce.out" }, "-=0.3")
      .from(".hero .sub .word", { x: -42, opacity: 0, filter: "blur(8px)", stagger: 0.016, duration: 0.82 }, "-=0.62")
      .from(".hero .cta-row .btn", { y: 22, opacity: 0, stagger: 0.08, duration: 0.7 }, "-=0.55")
      .from(".hero .micro .word", { x: 30, opacity: 0, stagger: 0.01, duration: 0.6 }, "-=0.55")
      .from(".hero .hero-card", { y: 36, opacity: 0, scale: 0.985, stagger: 0.12, duration: 0.9 }, "-=0.5");

    gsap.utils.toArray(".section-heading").forEach((el) => {
      gsap.from(el as Element, {
        y: -34,
        opacity: 0,
        duration: 0.72,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el as Element,
          start: "top 86%",
          once: true
        }
      });
    });

    gsap.utils.toArray("p.lead, .notice, summary, footer .wrap > div").forEach((el, index) => {
      const words = (el as Element).querySelectorAll(".word");
      if (!words.length) return;

      gsap.from(words, {
        x: index % 2 === 0 ? -18 : 18,
        opacity: 0,
        filter: "blur(2px)",
        stagger: 0.008,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el as Element,
          start: "top 90%",
          once: true
        }
      });
    });

    gsap.utils.toArray(".item, .kpi, details, #pricing .card, section > .wrap > .card").forEach((el, index) => {
      gsap.from(el as Element, {
        x: index % 2 === 0 ? -28 : 28,
        y: 8,
        opacity: 0,
        duration: 0.68,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el as Element,
          start: "top 91%",
          once: true
        }
      });
    });

    // Price flip animation - alarm clock countdown
    const priceEl = document.getElementById("price-flip");
    if (priceEl) {
      const tensDigit = priceEl.querySelector(".digit-tens") as HTMLElement | null;
      const onesDigit = priceEl.querySelector(".digit-ones") as HTMLElement | null;

      if (tensDigit && onesDigit) {
        gsap.timeline({
          scrollTrigger: {
            trigger: "#pricing",
            start: "top 70%",
            once: true
          },
          delay: 0.5
        })
        // Flip tens digit from 7 to 2
        .to(tensDigit, {
          rotateX: -90,
          duration: 0.15,
          ease: "power2.in",
          transformOrigin: "50% 50% 20px"
        })
        .call(() => { tensDigit.textContent = "2"; })
        .to(tensDigit, {
          rotateX: -180,
          duration: 0.15,
          ease: "power2.out"
        })
        .set(tensDigit, { rotateX: 0 })
        // Flip ones digit from 9 to 9 (bounce effect)
        .to(onesDigit, {
          rotateX: -90,
          duration: 0.15,
          ease: "power2.in",
          transformOrigin: "50% 50% 20px"
        }, "-=0.1")
        .call(() => { onesDigit.textContent = "9"; })
        .to(onesDigit, {
          rotateX: -180,
          duration: 0.15,
          ease: "power2.out"
        })
        .set(onesDigit, { rotateX: 0 })
        // Add struck-through $79
        .call(() => {
          const oldPrice = document.createElement("span");
          oldPrice.className = "price-old-final";
          oldPrice.textContent = " $79";
          priceEl.appendChild(oldPrice);
          gsap.fromTo(oldPrice,
            { opacity: 0, x: -10 },
            { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" }
          );
        });
      }
    }

    gsap.to(".hero .hero-card:first-child", {
      y: 10,
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    });

    gsap.to(".hero .hero-card:last-child", {
      y: -10,
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    });

    gsap.from(".sticky-cta", {
      y: 24,
      opacity: 0,
      duration: 0.7,
      delay: 0.5,
      ease: "power3.out"
    });

    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((btn) => {
      gsap.set(btn, { y: 2 });

      btn.addEventListener("mouseenter", () => {
        gsap.to(btn, { y: -4, scale: 1.012, duration: 0.24, ease: "power2.out", overwrite: true });
      });

      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { y: 2, scale: 1, duration: 0.28, ease: "power2.out", overwrite: true });
      });

      function press() {
        const restingY = btn.matches(":hover") ? -4 : 2;
        gsap.timeline({ defaults: { overwrite: true } })
          .to(btn, { y: 7, scale: 0.985, duration: 0.08, ease: "power2.in" })
          .to(btn, { y: -8, scale: 1.018, duration: 0.34, ease: "elastic.out(1, 0.45)" })
          .to(btn, { y: restingY, scale: 1, duration: 0.18, ease: "power2.out" });
      }

      btn.addEventListener("mousedown", press);
      btn.addEventListener("keydown", (e) => {
        if ((e as KeyboardEvent).key === "Enter" || (e as KeyboardEvent).key === " ") press();
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="eyebrow">for builders whose main agent is doing too much and still underdelivering</div>
          <h1>
            <span className="hero-line hero-line-primary">Stop building one</span>
            <span className="hero-line hero-line-primary">overloaded AI agent.</span>
            <br />
            <span className="hero-line hero-line-secondary">Build an agent civilization instead.</span>
          </h1>
          <p className="sub">A simple, sharp blueprint for <strong>OpenClaw multi-agent architecture</strong>: <strong>Genesis Agent</strong>, <strong>Agent Registry</strong>, <strong>Scheduler</strong>, <strong>Dispatcher</strong>, <strong>Lifecycle</strong>, <strong>Contracts</strong>, and the specialist AI worker pattern that actually scales.</p>
          <div className="cta-row">
            <button className="btn btn-primary" onClick={() => setIsCheckoutOpen(true)}>Get instant access</button>
            <a className="btn btn-secondary" href="#free">Read the free alpha first</a>
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
                <p>If you cannot answer &quot;who can do what, with which tools, in which state, under which constraints?&quot; then you do not yet have an ecosystem. You have a pile.</p>
              </div>
            </div>
            <div className="list">
              <div className="item">
                <h3>4. Route by contract, not by vibes</h3>
                <p>Each agent should declare what it accepts, what it returns, how it fails, and when it escalates. This makes dispatching reliable and debugging much faster.</p>
              </div>
              <div className="item">
                <h3>5. Use lifecycle states</h3>
                <p>Draft. Validated. Registered. Active. Dormant. Paused. Degraded. Quarantined. Deprecated. Retired. Broken systems often fail simply because everything is treated as permanently &quot;active.&quot;</p>
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
                <div className="price" id="price-flip">
                  <span className="price-prefix">$</span>
                  <span className="price-digits">
                    <span className="digit-tens">7</span>
                    <span className="digit-ones">9</span>
                  </span>
                </div>
                <p className="muted">One-time payment. <strong>No subscription.</strong> No recurring fees. Ever.</p>
                <p className="muted" style={{marginTop:"8px"}}>Digital delivery. Start with the free alpha on this page, then take the compressed full stack when you want the clean architecture in one place.</p>
                <div className="cta-row">
                  <button className="btn btn-primary" onClick={() => setIsCheckoutOpen(true)}>Buy the blueprint</button>
                  <a className="btn btn-secondary" href="#faq">See FAQ</a>
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
              <p className="muted">It is written simply, but it is aimed at people already building or planning agent systems. If you have ever felt your &quot;main agent&quot; was trying to do too much, this is for you.</p>
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

      <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />

    </>
  );
}
