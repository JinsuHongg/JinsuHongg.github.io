import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import PublicationsSection, { type AreaFilter } from "@/components/PublicationsSection";
import { newsItems } from "@/data/news";
import {
  education,
  grants,
  presentations,
  profile,
  profileLinks,
  researchExperience,
  service,
} from "@/data/profile";
import { interactiveTool, projects, type ProjectItem } from "@/data/projects";
import { researchAreas, type ResearchArea, type ResearchAreaKey } from "@/data/research";
import {
  ArrowDownRight,
  ArrowUpRight,
  Award,
  BrainCircuit,
  Code2,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Maximize2,
  Orbit,
  ScanSearch,
  Sparkles,
} from "lucide-react";

const areaIcons: Record<ResearchArea["iconName"], typeof Sparkles> = {
  sparkles: Sparkles,
  brain: BrainCircuit,
  orbit: Orbit,
  scan: ScanSearch,
};

export default function Home() {
  const [pubScope, setPubScope] = useState<"selected" | "all">("selected");
  const [pubArea, setPubArea] = useState<AreaFilter>("all");
  const [activeFigure, setActiveFigure] = useState<ProjectItem | null>(null);

  const scholarHref =
    profileLinks.find((link) => link.label === "Google Scholar")?.href ??
    "https://scholar.google.com/citations?user=_sb6QZMAAAAJ&hl=en";

  const handleJumpToArea = (area: ResearchAreaKey) => {
    setPubScope("all");
    setPubArea(area);
    document.getElementById("publications")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f7f7f4] text-slate-900">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:p-3"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-slate-900/10 bg-[#f7f7f4]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a href="#top" className="font-display text-lg font-bold tracking-tight">
            {profile.name}
          </a>
          <nav
            aria-label="Primary navigation"
            className="order-last flex w-full flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-600 md:order-none md:w-auto"
          >
            <a className="transition hover:text-slate-950" href="#news">
              News
            </a>
            <a className="transition hover:text-slate-950" href="#research">
              Research
            </a>
            <a className="transition hover:text-slate-950" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-slate-950" href="#publications">
              Publications
            </a>
            <a className="transition hover:text-slate-950" href="#experience">
              Experience
            </a>
            <a className="transition hover:text-slate-950" href="#contact">
              Contact
            </a>
          </nav>
          <a
            href={`mailto:${profile.email}`}
            className="text-sm font-semibold text-cyan-800 transition hover:text-cyan-950"
          >
            Email <ArrowUpRight className="inline h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section
          id="top"
          className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1fr_260px] md:py-14"
        >
          <div>
            <p className="eyebrow mb-5 text-cyan-800">{profile.eyebrow}</p>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-4 text-xl leading-8 text-slate-700">{profile.tagline}</p>
            {profile.bio.map((paragraph) => (
              <p key={paragraph} className="mt-4 max-w-2xl leading-7 text-slate-600 first-of-type:mt-5">
                {paragraph}
              </p>
            ))}

            <div className="mt-7 flex flex-wrap gap-2 text-xs font-medium text-slate-700">
              <span className="rounded-full border border-slate-300 bg-white px-3 py-1">
                Data Mining Lab · GSU
              </span>
              <span className="rounded-full border border-slate-300 bg-white px-3 py-1">
                FDL.AI Intern (2025)
              </span>
              <span className="rounded-full border border-slate-300 bg-white px-3 py-1">
                NSF ACCESS PI (2025–2026)
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="bg-slate-900 px-5 text-white hover:bg-slate-700">
                <a href="#publications">
                  View publications <ArrowDownRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-300 bg-transparent px-5 hover:bg-white"
              >
                <a href={profile.cvPath}>
                  <FileText className="mr-2 h-4 w-4" />
                  View CV
                </a>
              </Button>
            </div>
          </div>

          <aside className="border-l-2 border-cyan-700 pl-5 md:pt-3">
            <img
              src={profile.portrait}
              alt={`Portrait of ${profile.name}`}
              width={160}
              height={160}
              className="mb-6 aspect-square w-40 rounded-full object-cover object-center shadow-sm"
            />
            <p className="font-semibold">{profile.name}</p>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              {profile.role}
              <br />
              {profile.lab}
              <br />
              {profile.department}
              <br />
              {profile.institution}
            </p>
            <div className="mt-4 space-y-1.5 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-cyan-800" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-cyan-800" />
                <a
                  href={`mailto:${profile.email}`}
                  className="truncate transition hover:text-cyan-900"
                >
                  {profile.email}
                </a>
              </div>
            </div>
            <div className="mt-6 space-y-2">
              {profileLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between border-b border-slate-300 py-2 text-sm transition hover:border-cyan-800 hover:text-cyan-900"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </aside>
        </section>

        <section id="news" className="border-y border-slate-900/10 bg-[#e8f4f4] px-5 py-10 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow mb-4 text-cyan-800">Recent news</p>
            <ul className="divide-y divide-slate-900/10">
              {newsItems.map((item) => (
                <li
                  key={`${item.dateTime}-${item.highlight ?? item.text}`}
                  className="grid gap-2 py-3.5 first:pt-0 last:pb-0 md:grid-cols-[120px_1fr_auto] md:items-baseline md:gap-4"
                >
                  <time dateTime={item.dateTime} className="font-mono text-xs font-medium text-cyan-900">
                    {item.date}
                  </time>
                  <p className="text-sm leading-6 text-slate-700 sm:text-base">
                    {item.text}{" "}
                    {item.highlight && <span className="font-semibold text-slate-900">{item.highlight}</span>}{" "}
                    {item.venue}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-800 hover:text-cyan-950 sm:text-sm"
                    >
                      {item.linkLabel ?? "Learn more"} <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <span />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="research" className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="mb-10 max-w-3xl">
            <p className="eyebrow mb-3 text-cyan-800">Research</p>
            <h2 className="font-display text-4xl font-bold">
              Trustworthy ML for scientific data.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              I study uncertainty quantification to make machine learning predictions more
              interpretable and useful. Heliophysics and space weather provide demanding settings
              for this work, alongside foundation models, imbalanced learning, and computer vision.
            </p>
          </div>
          <div className="grid border-t border-slate-300 sm:grid-cols-2">
            {researchAreas.map((area) => {
              const Icon = areaIcons[area.iconName];
              return (
                <article
                  key={area.title}
                  className="group flex flex-col justify-between border-b border-slate-300 p-6 sm:[&:nth-child(odd)]:border-r"
                >
                  <div>
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-xs text-cyan-800">{area.number}</span>
                      <Icon className="h-5 w-5 text-slate-500 transition group-hover:text-cyan-800" />
                    </div>
                    <h3 className="mt-8 text-xl font-semibold">{area.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{area.description}</p>
                  </div>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      {area.methods}
                    </p>
                    <button
                      type="button"
                      onClick={() => handleJumpToArea(area.title)}
                      className="text-xs font-semibold text-cyan-800 transition hover:text-cyan-950"
                    >
                      Related papers →
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="projects" className="border-t border-slate-900/10 bg-white px-5 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-2xl">
              <p className="eyebrow mb-3 text-cyan-800">Research highlights</p>
              <h2 className="font-display text-4xl font-bold">From methods to evidence</h2>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="overflow-hidden border border-slate-300 bg-[#f7f7f4] shadow-[4px_4px_0_0_rgb(8_145_178_/_0.16)]"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFigure(project)}
                    className="group relative block w-full border-b border-slate-300 bg-white text-left"
                    aria-label={`Inspect ${project.title} figure`}
                  >
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="aspect-[16/7] w-full object-contain transition duration-200 group-hover:scale-[1.01]"
                    />
                    <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded bg-slate-900/80 px-2 py-1 text-[11px] font-medium text-white opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                      <Maximize2 className="h-3 w-3" /> Enlarge
                    </span>
                  </button>
                  <div className="p-6">
                    <Code2 className="h-5 w-5 text-cyan-800" />
                    <h3 className="mt-5 text-xl font-semibold leading-7">{project.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{project.description}</p>
                    <p className="mt-5 border-l-2 border-cyan-700 pl-4 text-sm leading-6 text-slate-700">
                      <span className="font-semibold">My contribution:</span> {project.contribution}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-cyan-800">
                      <a
                        href={project.paper}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 hover:text-cyan-950"
                      >
                        Paper <ArrowUpRight className="h-4 w-4" />
                      </a>
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 hover:text-cyan-950"
                      >
                        Code <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-14 border-t border-slate-300 pt-10">
              <p className="eyebrow mb-3 text-cyan-800">Interactive tools</p>
              <article className="flex flex-col gap-6 border border-slate-300 bg-[#f7f7f4] p-6 shadow-[4px_4px_0_0_rgb(8_145_178_/_0.16)] sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div className="max-w-3xl">
                  <h3 className="text-xl font-semibold leading-7">{interactiveTool.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{interactiveTool.description}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {interactiveTool.footnote}
                  </p>
                </div>
                <a
                  href={interactiveTool.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-cyan-800 hover:text-cyan-950"
                >
                  {interactiveTool.linkLabel} <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            </div>
          </div>
        </section>

        <div className="border-t border-slate-900/10">
          <PublicationsSection
            scope={pubScope}
            onScopeChange={setPubScope}
            areaFilter={pubArea}
            onAreaFilterChange={setPubArea}
            scholarHref={scholarHref}
          />
        </div>

        <section
          id="experience"
          className="border-t border-slate-900/10 bg-[#f7f7f4] px-5 py-12 sm:px-8 sm:py-16"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-2xl">
              <p className="eyebrow mb-3 text-cyan-800">Experience & recognition</p>
              <h2 className="font-display text-4xl font-bold">Academic background</h2>
            </div>

            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-8">
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-900">
                    <Award className="h-4 w-4 text-cyan-800" /> Research experience
                  </h3>
                  <div className="mt-4 space-y-5 border-l-2 border-slate-300 pl-5">
                    {researchExperience.map((item) => (
                      <article key={`${item.role}-${item.organization}`}>
                        <p className="font-mono text-xs text-cyan-800">{item.period}</p>
                        <h4 className="mt-1 font-semibold text-slate-900">{item.role}</h4>
                        <p className="text-sm text-slate-700">{item.organization}</p>
                        <p className="mt-1.5 text-sm leading-6 text-slate-600">{item.details}</p>
                      </article>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
                    Grants & computing allocations
                  </h3>
                  <div className="mt-4 space-y-4">
                    {grants.map((grant) => (
                      <article
                        key={grant.title}
                        className="border border-slate-300 bg-white p-5"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="font-mono text-xs text-cyan-800">{grant.period}</span>
                          <span className="rounded-full bg-cyan-50 px-2.5 py-0.5 text-xs font-semibold text-cyan-800">
                            {grant.role}
                          </span>
                        </div>
                        <h4 className="mt-2 font-semibold text-slate-900">{grant.program}</h4>
                        <p className="mt-1 text-sm italic text-slate-700">{grant.title}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{grant.details}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-900">
                    <GraduationCap className="h-4 w-4 text-cyan-800" /> Education
                  </h3>
                  <div className="mt-4 space-y-5 border-l-2 border-slate-300 pl-5">
                    {education.map((item) => (
                      <article key={`${item.degree}-${item.institution}`}>
                        <p className="font-mono text-xs text-cyan-800">{item.period}</p>
                        <h4 className="mt-1 font-semibold text-slate-900">{item.degree}</h4>
                        <p className="text-sm text-slate-700">{item.institution}</p>
                        {item.note && <p className="mt-0.5 text-xs text-slate-500">{item.note}</p>}
                      </article>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
                    Selected presentations & service
                  </h3>
                  <ul className="mt-4 divide-y divide-slate-200 border-y border-slate-200 bg-white px-5">
                    {presentations.map((item) => (
                      <li key={item.title} className="py-3.5">
                        <p className="font-mono text-xs text-cyan-800">{item.year}</p>
                        <p className="mt-1 text-sm font-medium leading-6 text-slate-900">
                          {item.title}
                        </p>
                        <p className="text-xs text-slate-600">{item.venue}</p>
                      </li>
                    ))}
                    {service.map((item) => (
                      <li key={item} className="py-3.5 text-sm text-slate-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="border-t border-slate-900/10 bg-[#e8f4f4] px-5 py-16 sm:px-8"
        >
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="eyebrow mb-3 text-cyan-800">Contact</p>
              <h2 className="font-display text-4xl font-bold">
                Interested in trustworthy and scientific machine learning?
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                I welcome conversations about research collaborations, academic opportunities, and
                machine learning for complex scientific problems.
              </p>
              <p className="mt-3 font-mono text-sm text-cyan-900">{profile.email}</p>
            </div>
            <Button asChild className="bg-slate-900 px-5 text-white hover:bg-slate-700">
              <a href={`mailto:${profile.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                Get in touch
              </a>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 px-5 py-6 text-sm text-slate-400 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span className="flex items-center gap-4">
            <a
              aria-label="GitHub"
              className="hover:text-white"
              href="https://github.com/JinsuHongg"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              aria-label="LinkedIn"
              className="hover:text-white"
              href="https://linkedin.com/in/jinsuhong"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              aria-label={`Email ${profile.name}`}
              className="hover:text-white"
              href={`mailto:${profile.email}`}
            >
              <Mail className="h-4 w-4" />
            </a>
          </span>
        </div>
      </footer>

      <Dialog open={Boolean(activeFigure)} onOpenChange={(open) => !open && setActiveFigure(null)}>
        <DialogContent className="max-w-4xl bg-white sm:max-w-4xl">
          {activeFigure && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-xl">{activeFigure.title}</DialogTitle>
                <DialogDescription>{activeFigure.imageAlt}</DialogDescription>
              </DialogHeader>
              <div className="overflow-hidden rounded border border-slate-200 bg-white p-2">
                <img
                  src={activeFigure.image}
                  alt={activeFigure.imageAlt}
                  className="max-h-[70vh] w-full object-contain"
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
