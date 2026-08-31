import { Button } from "@/components/ui/button";
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Orbit,
  ScanSearch,
  Sparkles,
} from "lucide-react";

const profileLinks = [
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=_sb6QZMAAAAJ&hl=en" },
  { label: "ORCID", href: "https://orcid.org/0009-0002-4383-1376" },
  { label: "GitHub", href: "https://github.com/JinsuHongg" },
  { label: "LinkedIn", href: "https://linkedin.com/in/jinsuhong" },
];

const researchAreas = [
  {
    number: "01",
    title: "Uncertainty quantification",
    description:
      "Building calibrated predictive systems that communicate what models know, what they do not know, and when their outputs should be trusted.",
    methods: "Conformal prediction · quantile regression · calibration",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Foundation models",
    description:
      "Studying transferable representations and efficient adaptation for scientific, multimodal, and data-limited machine learning problems.",
    methods: "Representation learning · transfer learning · multimodal ML",
    icon: BrainCircuit,
  },
  {
    number: "03",
    title: "Imbalanced learning",
    description:
      "Developing data-centric approaches for rare-event prediction, including better targets, loss functions, and evaluation under skewed distributions.",
    methods: "Rare events · ordinal learning · data-centric AI",
    icon: Orbit,
  },
  {
    number: "04",
    title: "Computer vision",
    description:
      "Using visual representation learning and segmentation to extract reliable signals from complex scientific imagery and spatiotemporal data.",
    methods: "Segmentation · deep learning · scientific imaging",
    icon: ScanSearch,
  },
];

// Add a URL to `links` as papers, code, and datasets become available.
const selectedPublications = [
  { year: "2026", title: "Uncertainty-Aware Solar Flare Regression", venue: "Preprint", area: "Uncertainty quantification" },
  { year: "2023", title: "An Innovative Solar Flare Metadata Collection for Space Weather Analytics", venue: "IEEE ICMLA", area: "Imbalanced learning" },
  { year: "2023", title: "Beyond Traditional Flare Forecasting: A Data-driven Labeling Approach for High-fidelity Predictions", venue: "DaWaK", area: "Data-centric AI" },
];

const projects = [
  {
    title: "Trustworthy rare-event forecasting",
    description:
      "Methods for producing useful prediction intervals and evaluating reliability when high-impact events are scarce.",
    tags: ["Conformal prediction", "Calibration", "Regression"],
  },
  {
    title: "Data-centric learning for scientific ML",
    description:
      "Investigating how target definitions, label structure, and imbalance-aware objectives change model behavior and scientific utility.",
    tags: ["Label design", "Ordinal learning", "Evaluation"],
  },
  {
    title: "Foundation models for heliophysics",
    description:
      "Evaluating and adapting learned representations for solar imagery, segmentation, and space-weather forecasting tasks.",
    tags: ["Foundation models", "Vision", "Scientific AI"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f7f4] text-slate-900">
      <header className="border-b border-slate-900/10 bg-[#f7f7f4]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="font-display text-lg font-bold tracking-tight">Jinsu Hong</a>
          <nav aria-label="Primary navigation" className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a className="transition hover:text-slate-950" href="#research">Research</a>
            <a className="transition hover:text-slate-950" href="#publications">Publications</a>
            <a className="transition hover:text-slate-950" href="#projects">Projects</a>
            <a className="transition hover:text-slate-950" href="#contact">Contact</a>
          </nav>
          <a href="mailto:jinsuhong.knight@gmail.com" className="text-sm font-semibold text-cyan-800 transition hover:text-cyan-950">
            Email <ArrowUpRight className="inline h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_280px] lg:py-24">
          <div>
            <p className="eyebrow mb-5 text-cyan-800">Computer science · machine learning · scientific AI</p>
            <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Reliable machine learning for complex scientific data.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
              I am a Ph.D. candidate in Computer Science at Georgia State University. I develop machine learning methods for uncertainty-aware prediction, foundation models, imbalanced learning, and computer vision.
            </p>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              My current work uses heliophysics and space weather as demanding real-world settings for creating reliable, transferable, and data-centric AI systems.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#publications"><Button className="bg-slate-900 px-5 text-white hover:bg-slate-700">View publications <ArrowDownRight className="ml-2 h-4 w-4" /></Button></a>
              <a href="https://docs.google.com/document/d/10wwfyt6xXfqchFDT2vKoVh60gNVXzsmA/edit?usp=sharing&ouid=117414335558668737707&rtpof=true&sd=true" target="_blank" rel="noreferrer">
                <Button variant="outline" className="border-slate-300 bg-transparent px-5 hover:bg-white"><Download className="mr-2 h-4 w-4" />Download CV</Button>
              </a>
            </div>
          </div>

          <aside className="border-l-2 border-cyan-700 pl-5 lg:pt-3">
            <img src="/images/symslake_JS_20260419_fixed.png" alt="Portrait of Jinsu Hong" className="mb-6 aspect-square w-40 rounded-full object-cover object-center shadow-sm" />
            <p className="font-semibold">Jinsu Hong</p>
            <p className="mt-1 text-sm leading-6 text-slate-600">Ph.D. Candidate<br />Department of Computer Science<br />Georgia State University</p>
            <div className="mt-5 flex items-center gap-2 text-sm text-slate-600"><MapPin className="h-4 w-4 text-cyan-800" />Atlanta, Georgia</div>
            <div className="mt-6 space-y-2">
              {profileLinks.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="flex items-center justify-between border-b border-slate-300 py-2 text-sm transition hover:border-cyan-800 hover:text-cyan-900"><span>{link.label}</span><ArrowUpRight className="h-3.5 w-3.5" /></a>)}
            </div>
          </aside>
        </section>

        <section className="border-y border-slate-900/10 bg-slate-900 px-5 py-12 text-slate-100 sm:px-8">
          <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-[280px_1fr] lg:gap-12">
            <p className="eyebrow mb-5 text-cyan-300">Research vision</p>
            <p className="max-w-3xl font-display !text-slate-100 text-2xl leading-relaxed sm:text-3xl">I study how machine learning systems can remain accurate, calibrated, and useful when observations are uncertain, events are rare, and data are rich but difficult to interpret.</p>
          </div>
        </section>

        <section id="research" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="mb-10 max-w-2xl"><p className="eyebrow mb-3 text-cyan-800">Research</p><h2 className="font-display text-4xl font-bold">Methods first. Applications with impact.</h2><p className="mt-4 leading-7 text-slate-600">My work is motivated by challenges in scientific data, but aims to produce machine learning methods with broader relevance.</p></div>
          <div className="grid border-t border-slate-300 sm:grid-cols-2">
            {researchAreas.map((area) => { const Icon = area.icon; return <article key={area.title} className="group border-b border-slate-300 p-6 sm:[&:nth-child(odd)]:border-r"><div className="flex items-start justify-between"><span className="font-mono text-xs text-cyan-800">{area.number}</span><Icon className="h-5 w-5 text-slate-500 transition group-hover:text-cyan-800" /></div><h3 className="mt-9 text-xl font-semibold">{area.title}</h3><p className="mt-3 leading-7 text-slate-600">{area.description}</p><p className="mt-5 text-xs font-semibold uppercase tracking-wide text-slate-500">{area.methods}</p></article>; })}
          </div>
        </section>

        <section id="publications" className="bg-white px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-6xl"><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow mb-3 text-cyan-800">Publications</p><h2 className="font-display text-4xl font-bold">Selected work</h2></div><a href="https://scholar.google.com/citations?user=_sb6QZMAAAAJ&hl=en" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-800 hover:text-cyan-950">View complete Google Scholar profile <ExternalLink className="h-4 w-4" /></a></div>
            <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
              {selectedPublications.map((publication) => <article key={publication.title} className="grid gap-3 py-6 md:grid-cols-[90px_1fr_auto]"><p className="font-mono text-sm text-cyan-800">{publication.year}</p><div><h3 className="text-lg font-semibold leading-7">{publication.title}</h3><p className="mt-1 text-sm text-slate-600">{publication.venue} · {publication.area}</p></div><span className="self-start rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">Details coming soon</span></article>)}
            </div>
            <p className="mt-5 text-sm text-slate-500">Paper links, authors, abstracts, code, and datasets will be added here as they are prepared.</p>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-5 py-20 sm:px-8"><div className="mb-10"><p className="eyebrow mb-3 text-cyan-800">Research projects</p><h2 className="font-display text-4xl font-bold">From methods to evidence</h2></div><div className="grid gap-5 lg:grid-cols-3">{projects.map((project) => <article key={project.title} className="border border-slate-300 bg-white p-6 shadow-[4px_4px_0_0_rgb(8_145_178_/_0.16)]"><Code2 className="h-5 w-5 text-cyan-800" /><h3 className="mt-10 text-xl font-semibold">{project.title}</h3><p className="mt-3 leading-7 text-slate-600">{project.description}</p><div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-slate-200 px-2.5 py-1 text-xs text-slate-600">{tag}</span>)}</div></article>)}</div></section>

        <section id="contact" className="border-t border-slate-900/10 bg-[#e8f4f4] px-5 py-16 sm:px-8"><div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_auto] md:items-end"><div><p className="eyebrow mb-3 text-cyan-800">Contact</p><h2 className="max-w-2xl font-display text-4xl font-bold">Interested in trustworthy and scientific machine learning?</h2><p className="mt-4 max-w-xl leading-7 text-slate-600">I welcome conversations about research collaborations, academic opportunities, and machine learning for complex scientific problems.</p></div><a href="mailto:jinsuhong.knight@gmail.com"><Button className="bg-slate-900 px-5 text-white hover:bg-slate-700"><Mail className="mr-2 h-4 w-4" />Get in touch</Button></a></div></section>
      </main>
      <footer className="bg-slate-900 px-5 py-6 text-sm text-slate-400 sm:px-8"><div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3"><span>© {new Date().getFullYear()} Jinsu Hong</span><span className="flex items-center gap-4"><a className="hover:text-white" href="https://github.com/JinsuHongg" target="_blank" rel="noreferrer"><Github className="h-4 w-4" /></a><a className="hover:text-white" href="https://linkedin.com/in/jinsuhong" target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" /></a><a className="hover:text-white" href="mailto:jinsuhong.knight@gmail.com"><Mail className="h-4 w-4" /></a></span></div></footer>
    </div>
  );
}
