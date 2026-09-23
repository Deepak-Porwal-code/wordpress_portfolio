import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Code2,
  ExternalLink,
  Gauge,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  RefreshCw,
  Search,
  ShoppingBag,
  Wrench,
  X,
} from "lucide-react";
import { useState } from "react";
import { Button } from "../components/ui/button";
// ponytail: local public/ images, not Lovable CDN (CDN urls 404 outside Lovable hosting).
// IMG prefixes the deploy subpath (/wordpress_portfolio on Pages, "" in dev).
const IMG = import.meta.env.BASE_URL.replace(/\/$/, "");
const portraitAsset = { url: `${IMG}/images/deepak-porwal.jpg` };
const advoPreview = { url: `${IMG}/images/advo-preview.jpg` };
const dsusPreview = { url: `${IMG}/images/dsus-preview.jpg` };
const tieronePreview = { url: `${IMG}/images/tierone-preview.jpg` };
const humdPreview = { url: `${IMG}/images/humd-preview.jpg` };

const emailHref =
  "mailto:porwal99deepak@gmail.com?subject=Freelance%20project%20enquiry&body=Hi%20Deepak%2C%0A%0AI%27d%20like%20to%20discuss%20a%20project.%0A%0AProject%20type%3A%0ATimeline%3A%0ABudget%20range%3A%0A%0AThank%20you.";
const whatsappHref =
  "https://wa.me/917374953088?text=Hi%20Deepak%2C%20I%27d%20like%20to%20discuss%20a%20website%20project.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Deepak Porwal — Freelance WordPress Developer" },
      {
        name: "description",
        content:
          "Hire Deepak Porwal for professional WordPress websites, WooCommerce stores, redesigns, speed improvements, and ongoing website support.",
      },
      { property: "og:title", content: "Deepak Porwal — Freelance WordPress Developer" },
      {
        property: "og:description",
        content:
          "Professional WordPress websites, online stores, redesigns, speed improvements, and reliable ongoing support.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const services = [
  {
    icon: Code2,
    number: "01",
    title: "Business websites",
    copy: "A professional, responsive WordPress presence that explains your offer clearly and makes it easy for customers to contact you.",
    points: ["Custom page builds", "Mobile-ready layouts", "Forms and integrations"],
  },
  {
    icon: ShoppingBag,
    number: "02",
    title: "WooCommerce stores",
    copy: "Easy-to-manage online stores with clear product journeys, dependable checkout setup, and room to grow.",
    points: ["Store setup", "Product and category pages", "Payments and shipping"],
  },
  {
    icon: RefreshCw,
    number: "03",
    title: "Redesigns & migrations",
    copy: "Refresh an outdated website, improve its structure, or move it carefully without losing the content your business depends on.",
    points: ["Visual redesign", "Content migration", "WordPress to MERN"],
  },
  {
    icon: Gauge,
    number: "04",
    title: "Speed & support",
    copy: "Practical performance improvements and ongoing help to keep your website secure, current, and working as expected.",
    points: ["Speed optimization", "Security and backups", "Ongoing maintenance"],
  },
];

const projects = [
  {
    name: "ADVO.AE",
    type: "Printing agency · WordPress",
    description:
      "A clear, trust-led website for a Dubai printing agency, with structured services and direct enquiry paths.",
    href: "https://advo.ae",
    image: advoPreview.url,
    imageAlt: "ADVO printing agency homepage preview",
    accent: "bg-highlight",
    hoverText: "group-hover:text-highlight-foreground",
    number: "01",
  },
  {
    name: "DSUSVIP.AE",
    type: "Auto care · WordPress",
    description:
      "A full auto-care experience for Al Quoz Dubai — services, gallery, blog and appointment flow with tap-to-call header.",
    href: "https://dsusvip.ae",
    image: dsusPreview.url,
    imageAlt: "DSUS VIP auto care homepage preview",
    accent: "bg-accent",
    hoverText: "group-hover:text-accent-foreground",
    number: "02",
  },
  {
    name: "TIERONE.AE",
    type: "HPC & AI infrastructure · WordPress",
    description:
      "A polished corporate presence that organizes specialist infrastructure services into a clear, approachable experience.",
    href: "https://tierone.ae",
    image: tieronePreview.url,
    imageAlt: "TierOne website homepage preview",
    accent: "bg-primary",
    hoverText: "group-hover:text-primary-foreground",
    number: "03",
  },
  {
    name: "HUMD.AE",
    type: "Corporate gifts · WordPress → MERN",
    description:
      "Commerce experience spanning WordPress delivery, product development, and AI-supported catalog, pricing, and stock workflows.",
    href: "https://humd.ae",
    image: humdPreview.url,
    imageAlt: "HUMD store homepage preview",
    accent: "bg-secondary",
    hoverText: "group-hover:text-secondary-foreground",
    number: "04",
  },
];

const experience = [
  {
    period: "APR 2026 — NOW",
    role: "Junior Software Developer",
    company: "Humd.ae",
    copy: "Delivering WordPress, React, Node.js, and AI-supported e-commerce work across catalog uploads, pricing, and stock workflows.",
  },
  {
    period: "NOV 2025 — MAR 2026",
    role: "Frontend Developer",
    company: "Powerplay",
    copy: "Owned a real-time construction dashboard used by 500+ people across four departments and improved performance by 35%.",
  },
  {
    period: "SEP — NOV 2025",
    role: "Software Developer Intern",
    company: "Swastya.ai",
    copy: "Built an AI WhatsApp assistant handling 1,000+ monthly patient interactions through LangChain, Twilio, and WATI.",
  },
  {
    period: "JUL — NOV 2024",
    role: "Frontend Developer Intern",
    company: "Balansha",
    copy: "Translated Figma into a responsive e-commerce frontend and integrated APIs across Node.js and Spring Boot services.",
  },
];

const faq = [
  {
    question: "What types of projects can I contact you about?",
    answer:
      "New WordPress business websites, WooCommerce stores, website redesigns, performance improvements, migrations, maintenance, and selected full-stack development work.",
  },
  {
    question: "Can we work together if I am outside Bengaluru or India?",
    answer:
      "Yes. I can work remotely and keep the project moving through agreed calls, written updates, and clear review stages.",
  },
  {
    question: "How will communication work during the project?",
    answer:
      "We begin by clarifying your goals, pages, content, and timeline. During the build, I share progress at agreed stages and collect feedback before launch.",
  },
  {
    question: "Will I be able to manage my WordPress website?",
    answer:
      "Yes. The site is built to remain practical to manage, and the handover can cover the everyday updates relevant to your website.",
  },
  {
    question: "Can you support the website after launch?",
    answer:
      "Yes. Ongoing maintenance, updates, speed checks, security, backups, and future improvements can be discussed based on what your website needs.",
  },
];

function LogoMark() {
  return (
    <a
      href="#top"
      className="flex items-center gap-3 font-display text-xl font-bold"
      aria-label="Deepak Porwal, home"
    >
      <span className="grid size-9 place-items-center bg-primary text-sm text-primary-foreground">
        DP
      </span>
      <span>Deepak Porwal</span>
    </a>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = ["services", "work", "process", "experience", "faq"];

  return (
    <main id="top" className="overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center px-5 sm:px-8 lg:px-10">
          <LogoMark />
          <nav
            className="hidden items-center gap-7 text-sm font-semibold lg:flex"
            aria-label="Main navigation"
          >
            {nav.map((item) => (
              <a key={item} className="nav-link capitalize" href={`#${item}`}>
                {item}
              </a>
            ))}
            <a
              className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-primary-foreground transition-transform hover:-translate-y-0.5"
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              Discuss a project <MessageCircle className="size-4" />
            </a>
          </nav>
          <Button
            variant="outline"
            size="icon"
            className="rounded-none lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav
            className="grid border-t border-border bg-background px-5 py-5 text-base font-semibold lg:hidden"
            aria-label="Mobile navigation"
          >
            {nav.map((item) => (
              <a
                key={item}
                className="border-b border-border py-3 capitalize"
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              className="mt-5 inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 text-primary-foreground"
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              Discuss a project <MessageCircle className="size-4" />
            </a>
          </nav>
        )}
      </header>

      <section className="relative border-b border-border pt-18">
        <div className="portfolio-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[1.15fr_.85fr] lg:px-10 lg:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-8 flex flex-wrap items-center gap-3 text-xs font-bold uppercase text-muted-foreground">
              <span className="size-2 animate-pulse rounded-full bg-highlight" /> Available for
              freelance projects <span className="text-border">/</span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="size-3.5" /> Bengaluru · Working remotely
              </span>
            </div>
            <p className="mb-4 font-mono text-sm font-bold uppercase text-accent">
              Freelance WordPress & full stack developer
            </p>
            <h1 className="max-w-4xl font-display text-[clamp(3.25rem,7.5vw,7.25rem)] font-bold leading-[.88]">
              A website built to <span className="text-accent">win trust.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              I build professional WordPress websites and online stores, improve slow or outdated
              sites, and provide dependable support after launch.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-primary px-6 py-4 font-bold text-primary-foreground transition-transform hover:-translate-y-1"
              >
                Discuss your project <MessageCircle className="size-5" />
              </a>
              <a
                href={emailHref}
                className="inline-flex items-center justify-center gap-3 border border-foreground px-6 py-4 font-bold transition-colors hover:bg-foreground hover:text-background"
              >
                Send an email <Mail className="size-5" />
              </a>
            </div>
            <div className="mt-12 grid max-w-2xl grid-cols-3 border-y border-border py-5">
              <div>
                <strong className="block font-display text-2xl sm:text-3xl">2+</strong>
                <span className="text-xs text-muted-foreground">Years building</span>
              </div>
              <div className="border-x border-border px-3 sm:px-5">
                <strong className="block font-display text-2xl sm:text-3xl">500+</strong>
                <span className="text-xs text-muted-foreground">Product users</span>
              </div>
              <div className="pl-3 sm:pl-5">
                <strong className="block font-display text-2xl sm:text-3xl">35%</strong>
                <span className="text-xs text-muted-foreground">Performance gain</span>
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[540px] self-center">
            <div className="absolute -left-3 top-8 z-10 bg-highlight px-4 py-3 font-mono text-xs font-bold text-highlight-foreground shadow-sharp sm:-left-10">
              WORDPRESS
              <br />+ MERN
            </div>
            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
              <img
                src={portraitAsset.url}
                alt="Deepak Porwal, freelance WordPress and full stack developer"
                className="h-full w-full scale-[.94] object-cover object-[50%_15%] saturate-[.8]"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-foreground/85 p-5 text-background backdrop-blur-sm">
                <div>
                  <p className="text-xs uppercase text-background/70">Based in</p>
                  <p className="font-display text-xl font-bold">Bengaluru, India</p>
                </div>
                <Code2 className="size-8 text-highlight" />
              </div>
            </div>
            <div className="absolute -bottom-7 -right-2 grid size-24 place-items-center rounded-full bg-accent text-center font-mono text-xs font-bold uppercase text-accent-foreground shadow-sharp sm:-right-8">
              Plan
              <br />
              build
              <br />
              support
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden border-t border-border bg-primary py-3 text-primary-foreground">
          <div className="marquee-track flex w-max gap-8 whitespace-nowrap font-mono text-xs font-bold uppercase">
            {[0, 1].map((set) => (
              <span key={set}>
                Business websites &nbsp; ✦ &nbsp; WooCommerce stores &nbsp; ✦ &nbsp; Website
                redesigns &nbsp; ✦ &nbsp; Speed improvements &nbsp; ✦ &nbsp; Ongoing support &nbsp;
                ✦ &nbsp;
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="section-kicker text-accent">01 / Services</p>
              <h2 className="mt-4 max-w-3xl font-display text-5xl font-bold sm:text-6xl">
                Choose the help your website needs.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-right">
              From a first launch to a focused improvement, every engagement starts with your
              business goal.
            </p>
          </div>
          <div className="mt-12 grid border-l border-t border-border md:grid-cols-2">
            {services.map(({ icon: Icon, ...service }) => (
              <article key={service.title} className="border-b border-r border-border p-6 sm:p-9">
                <div className="flex items-start justify-between">
                  <Icon className="size-8 text-accent" />
                  <span className="font-mono text-xs">SERVICE / {service.number}</span>
                </div>
                <h3 className="mt-12 font-display text-3xl font-bold">{service.title}</h3>
                <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
                  {service.copy}
                </p>
                <ul className="mt-6 grid gap-2 text-sm font-semibold">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <Check className="size-4 text-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="bg-foreground py-20 text-background md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="section-kicker text-highlight">02 / Selected work</p>
              <h2 className="mt-4 font-display text-5xl font-bold sm:text-6xl">
                Real websites.
                <br />
                Built for business.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-background/60 md:text-right">
              Explore recent business, infrastructure, and e-commerce work delivered for live
              brands.
            </p>
          </div>
          <div className="grid gap-px bg-background/20 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="group flex min-h-[500px] flex-col overflow-hidden bg-foreground"
              >
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="relative block aspect-[16/9] overflow-hidden bg-background/10"
                  aria-label={`Visit ${project.name} website`}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  ) : (
                    <div className="portfolio-grid grid h-full place-items-center">
                      <span className="font-display text-5xl font-bold text-background/25">
                        {project.name}
                      </span>
                    </div>
                  )}
                  <span className="absolute right-4 top-4 grid size-11 place-items-center bg-background text-foreground">
                    <ExternalLink className="size-5" />
                  </span>
                </a>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-background/45">
                    <span>PROJECT / {project.number}</span>
                    <span>{project.type}</span>
                  </div>
                  <h3 className="mt-8 font-display text-4xl font-bold">{project.name}</h3>
                  <p className="mt-4 max-w-lg leading-relaxed text-background/60">
                    {project.description}
                  </p>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto flex items-center justify-between border-t border-background/20 pt-6 font-bold text-highlight"
                  >
                    Visit website <ArrowUpRight className="size-5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <p className="section-kicker text-accent">03 / How we work</p>
          <div className="mt-5 grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <h2 className="font-display text-5xl font-bold sm:text-6xl">
                Clear from first call to handover.
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                You know what is being built, when feedback is needed, and what happens after
                launch.
              </p>
            </div>
            <div className="grid border-l border-t border-foreground/20 sm:grid-cols-2">
              {[
                {
                  step: "01",
                  title: "Discover",
                  copy: "Clarify your audience, goals, pages, content, timeline, and the action visitors should take.",
                },
                {
                  step: "02",
                  title: "Plan",
                  copy: "Agree on structure, scope, and review stages so the work starts with shared expectations.",
                },
                {
                  step: "03",
                  title: "Build & review",
                  copy: "Create the responsive website, share progress, and incorporate feedback at agreed points.",
                },
                {
                  step: "04",
                  title: "Test & hand over",
                  copy: "Check key screens, forms, links, and performance before launch, then provide a practical handover.",
                },
              ].map((item) => (
                <article
                  key={item.step}
                  className="border-b border-r border-foreground/20 p-6 sm:p-8"
                >
                  <span className="font-mono text-xs font-bold text-accent">
                    STEP / {item.step}
                  </span>
                  <h3 className="mt-10 font-display text-3xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <p className="section-kicker text-accent">04 / Experience</p>
          <div className="mt-5 grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
            <div>
              <h2 className="font-display text-5xl font-bold sm:text-6xl">
                Production experience, not just concepts.
              </h2>
              <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">
                Experience across client websites, product teams, e-commerce, and systems used by
                real people.
              </p>
            </div>
            <div className="border-t border-foreground">
              {experience.map((item) => (
                <article
                  key={`${item.company}-${item.period}`}
                  className="grid gap-4 border-b border-border py-7 sm:grid-cols-[150px_1fr]"
                >
                  <p className="font-mono text-xs font-bold text-accent">{item.period}</p>
                  <div>
                    <h3 className="font-display text-2xl font-bold">{item.role}</h3>
                    <p className="mt-1 font-semibold text-muted-foreground">{item.company}</p>
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {item.copy}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent py-20 text-accent-foreground md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <p className="section-kicker text-accent-foreground/65">05 / Why work with me</p>
          <div className="mt-5 grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <h2 className="font-display text-5xl font-bold sm:text-6xl">
                A practical partner for the whole website journey.
              </h2>
            </div>
            <div className="grid gap-px bg-accent-foreground/25 sm:grid-cols-2">
              {[
                {
                  icon: Search,
                  title: "Business-first thinking",
                  copy: "I start with the audience, offer, and enquiry goal—not a template or a list of plugins.",
                },
                {
                  icon: MessageCircle,
                  title: "Clear collaboration",
                  copy: "A defined plan and review stages keep decisions visible and feedback focused.",
                },
                {
                  icon: CheckCircle2,
                  title: "Tested before launch",
                  copy: "Responsive screens, forms, links, and key visitor journeys are checked before handover.",
                },
                {
                  icon: Wrench,
                  title: "Support beyond launch",
                  copy: "My WordPress experience includes performance, security, backups, and ongoing improvements.",
                },
              ].map(({ icon: Icon, title, copy }) => (
                <article key={title} className="bg-accent p-6 sm:p-8">
                  <Icon className="size-7" />
                  <h3 className="mt-8 font-display text-2xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-accent-foreground/70">{copy}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-14 grid border-l border-t border-accent-foreground/25 sm:grid-cols-3">
            <div className="border-b border-r border-accent-foreground/25 p-6">
              <strong className="font-display text-4xl">500+</strong>
              <p className="mt-2 text-sm text-accent-foreground/65">
                Users supported through a production dashboard
              </p>
            </div>
            <div className="border-b border-r border-accent-foreground/25 p-6">
              <strong className="font-display text-4xl">35%</strong>
              <p className="mt-2 text-sm text-accent-foreground/65">
                Performance improvement in prior product work
              </p>
            </div>
            <div className="border-b border-r border-accent-foreground/25 p-6">
              <strong className="font-display text-4xl">1,000+</strong>
              <p className="mt-2 text-sm text-accent-foreground/65">
                Monthly interactions handled by an AI assistant
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-foreground py-20 text-background md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-10">
          <div>
            <p className="section-kicker text-highlight">06 / Toolkit</p>
            <h2 className="mt-5 font-display text-5xl font-bold leading-[.95] sm:text-6xl">
              The right tools, used with purpose.
            </h2>
            <p className="mt-7 max-w-md leading-relaxed text-background/65">
              The technology follows the project. The priority stays the same: a fast, maintainable
              website that supports your business.
            </p>
          </div>
          <div className="grid content-start gap-8">
            <div>
              <p className="font-mono text-xs uppercase text-background/45">WordPress delivery</p>
              <p className="mt-3 text-xl font-bold leading-relaxed">
                WordPress · WooCommerce · Elementor Pro · WPForms · SEO tooling · Performance
                caching · Security · Analytics
              </p>
            </div>
            <div className="border-t border-background/20 pt-7">
              <p className="font-mono text-xs uppercase text-background/45">Custom development</p>
              <p className="mt-3 text-xl font-bold leading-relaxed">
                React.js · JavaScript · Node.js · Express · MongoDB · Tailwind CSS · REST APIs ·
                Python
              </p>
            </div>
            <p className="border-t border-background/20 pt-6 text-sm leading-relaxed text-background/50">
              Tools are selected for the project’s needs, performance goals, and long-term
              maintenance—not added for their own sake.
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
          <p className="section-kicker text-accent">07 / Client FAQ</p>
          <h2 className="mt-5 font-display text-5xl font-bold sm:text-6xl">Before we start.</h2>
          <div className="mt-12 border-t border-foreground">
            {faq.map((item, index) => (
              <details key={item.question} className="group border-b border-border">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-xl font-bold sm:text-2xl">
                  <span className="flex items-start gap-4">
                    <span className="font-mono text-xs text-accent">0{index + 1}</span>
                    {item.question}
                  </span>
                  <span className="text-accent transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-3xl pb-7 pl-9 leading-relaxed text-muted-foreground">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-highlight py-20 text-highlight-foreground md:py-28">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-10">
          <p className="font-mono text-xs font-bold uppercase">Have a website project in mind?</p>
          <h2 className="mx-auto mt-5 max-w-4xl font-display text-5xl font-bold leading-[.95] sm:text-7xl">
            Tell me what you need. I’ll help you find the right next step.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-highlight-foreground/70">
            Share your project type, goals, preferred timeline, and budget range. I’ll reply with
            the most useful way forward.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-primary px-7 py-4 font-bold text-primary-foreground transition-transform hover:-translate-y-1"
            >
              Message on WhatsApp <MessageCircle className="size-5" />
            </a>
            <a
              href={emailHref}
              className="inline-flex items-center justify-center gap-3 border border-highlight-foreground px-7 py-4 font-bold transition-colors hover:bg-highlight-foreground hover:text-highlight"
            >
              Send project details <Mail className="size-5" />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-primary py-10 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 md:grid-cols-[1fr_auto] md:items-end lg:px-10">
          <div>
            <LogoMark />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/55">
              Professional WordPress websites, online stores, redesigns, performance improvements,
              and ongoing support.
            </p>
          </div>
          <div className="grid gap-3 text-sm font-semibold sm:grid-cols-2">
            <a className="footer-link" href={emailHref}>
              <Mail className="size-4" /> Email
            </a>
            <a className="footer-link" href={whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle className="size-4" /> WhatsApp
            </a>
            <a className="footer-link" href="tel:+917374953088">
              <Phone className="size-4" /> Call
            </a>
            <a
              className="footer-link"
              href="https://linkedin.com/in/deepak-porwal-504489254"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="size-4" /> LinkedIn
            </a>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-primary-foreground/15 px-5 pt-5 text-xs text-primary-foreground/40 sm:flex-row sm:justify-between sm:px-8 lg:px-10">
          <span>© 2026 Deepak Porwal</span>
          <span>Bengaluru, India · Available for remote projects</span>
        </div>
      </footer>
    </main>
  );
}
