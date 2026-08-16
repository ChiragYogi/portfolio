import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Smartphone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  experience,
  metrics,
  profile,
  project,
  skills,
} from "./data";

const navItems = [
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="font-display text-sm font-bold tracking-tight">
          CG<span className="text-primary">.</span>
        </a>
        <div className="hidden items-center gap-7 text-sm text-muted-foreground sm:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Open menu"
              className="grid size-9 place-items-center rounded-md text-muted-foreground transition-colors hover:text-foreground sm:hidden"
            >
              <Menu className="size-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-3/4 sm:hidden">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <div className="mt-10 flex flex-col gap-6 text-lg">
              {navItems.map((item) => (
                <SheetClose asChild key={item.href}>
                  <a
                    href={item.href}
                    className="text-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero-glow">
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
        <h1 className="animate-rise mt-6 text-5xl font-bold leading-[1.05] sm:text-7xl">
          {profile.name}
        </h1>
        <p className="animate-rise mt-4 font-display text-xl text-primary sm:text-2xl">
          {profile.role}
        </p>
        <p className="animate-rise mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg whitespace-pre-line">
          {profile.pitch}
        </p>
        <div className="animate-rise mt-9 flex flex-wrap gap-3">
          <Button asChild size="lg" className="shadow-glow">
            <a href={`mailto:${profile.email}`}>
              <Mail /> Get in touch
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin /> LinkedIn
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github /> GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function Metrics() {
  return (
    <section className="border-y border-border bg-surface-elevated">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-5 py-10 sm:grid-cols-4 sm:gap-10">
        {metrics.map((m) => (
          <div key={m.label} className="py-3">
            <div className="font-display text-3xl font-bold text-primary sm:text-4xl">
              {m.value}
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {m.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
      {children}
    </span>
  );
}

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading eyebrow="Career" title="Where I've built things" />
      <div className="space-y-8">
        {experience.map((job) => (
          <article
            key={job.company}
            className="rounded-xl border border-border bg-card p-6 shadow-card sm:p-8"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-xl font-semibold sm:text-2xl">{job.company}</h3>
                <p className="mt-1 text-sm text-primary">{job.role}</p>
              </div>
              <span className="text-sm text-muted-foreground">{job.period}</span>
            </div>
            <ul className="mt-6 space-y-3">
              {job.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {job.stack.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Work() {
  return (
    <section id="work" className="border-y border-border bg-surface-elevated">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <SectionHeading eyebrow="Personal Published app" title="Shipped on Google Play" />
        <article className="rounded-xl border border-border bg-card p-6 shadow-card sm:p-8">
          <div className="flex items-start gap-4">
            <div className="grid size-12 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
              <Smartphone className="size-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold sm:text-2xl">{project.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>
            </div>
          </div>
          <ul className="mt-6 space-y-3">
            {project.points.map((p) => (
              <li
                key={p}
                className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
              >
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild variant="outline" size="sm">
              <a href={profile.playStore} target="_blank" rel="noreferrer">
                Play Store <ArrowUpRight />
              </a>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Github /> Source
              </a>
            </Button>
          </div>
        </article>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading eyebrow="Toolkit" title="Technical skills" />
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.group}
            className="rounded-xl border border-border bg-card p-6 shadow-card"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
              {group.group}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border bg-hero-glow"
    >
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">
          Hiring for Android, Kotlin or KMP? Let's talk.
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          I'm happy to walk through the POS, KMP and performance work in detail.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm transition-colors hover:border-primary"
          >
            <Mail className="size-4 text-primary" /> {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm transition-colors hover:border-primary"
          >
            <Phone className="size-4 text-primary" /> {profile.phone}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm transition-colors hover:border-primary"
          >
            <Linkedin className="size-4 text-primary" /> LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm transition-colors hover:border-primary"
          >
            <Github className="size-4 text-primary" /> GitHub
          </a>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <MapPin className="size-4" /> {profile.location}
          </span>
        </div>
      </div>
    </section>
  );
}
