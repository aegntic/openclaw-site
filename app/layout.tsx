import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GlobalCheckout } from "@/components/global-checkout";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "OpenClaw Agent Blueprint | Genesis Agent, Agent Registry, Scheduler & Multi-Agent System Architecture",
    template: `%s | ${site.name}`
  },
  description: "OpenClaw Agent Blueprint is a practical guide to Genesis Agents, Agent Registries, schedulers, dispatchers, contracts, lifecycle systems, and specialist AI workers for scalable multi-agent architecture.",
  keywords: "OpenClaw, agent architecture, Genesis agent, agent registry, multi-agent system, AI orchestration, scheduler, dispatcher, agent lifecycle, prompt engineering, agent OS",
  authors: [{ name: "Mattae Cooper" }],
  openGraph: {
    title: "OpenClaw Agent Blueprint",
    description: "A practical OpenClaw guide to Genesis Agents, Agent Registries, schedulers, dispatchers, contracts, lifecycle systems, and scalable multi-agent architecture.",
    url: site.url,
    siteName: site.name,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenClaw Agent Blueprint",
    description: "Genesis Agent, Agent Registry, Scheduler, Dispatcher, Contracts, Lifecycle, Memory Fabric, and specialist worker design for OpenClaw-style systems."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <GlobalCheckout />
      </body>
    </html>
  );
}
