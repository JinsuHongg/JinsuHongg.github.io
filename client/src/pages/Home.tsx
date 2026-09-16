import { Button } from "@/components/ui/button";
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  FileText,
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

const selectedPublications = [
  {
    year: "2026",
    title: "SDOFMv2: A Multi-Instrument Foundation Model for the Solar Dynamics Observatory with Transferable Downstream Applications",
    venue: "Solar Physics, 301, Article 137",
    area: "Foundation models",
    authors: ["Jinsu Hong", "Daniela Martin", "Joseph Gallego"],
    href: "https://doi.org/10.1007/s11207-026-02740-z",
  },
  {
    year: "2025",
    title: "Uncertainty-Aware Solar Flare Regression",
    venue: "IEEE ICDM Workshops",
    area: "Uncertainty quantification",
    authors: ["Jinsu Hong", "Chetraj Pandey", "Berkay Aydin"],
    href: "https://ieeexplore.ieee.org/abstract/document/11415454/",
  },
  { year: "2023", title: "An Innovative Solar Flare Metadata Collection for Space Weather Analytics", venue: "IEEE ICMLA", area: "Imbalanced learning" },
  { year: "2023", title: "Beyond Traditional Flare Forecasting: A Data-driven Labeling Approach for High-fidelity Predictions", venue: "DaWaK", area: "Data-centric AI" },
];

const projects = [
  {
    title: "SDOFMv2: A Multi-Instrument Foundation Model",
    description:
      "SDOFMv2 is a multi-instrument foundation model pretrained with self-supervised learning on Atmospheric Imaging Assembly (AIA) and Helioseismic and Magnetic Imager (HMI) observations from the Solar Dynamics Observatory. The project investigates whether pretrained solar representations can support a range of downstream tasks, including missing-channel reconstruction, F10.7 regression, and solar-wind classification.",
    contribution: "Built and organized the project repository, trained the models, and consolidated the experimental results.",
    tags: ["Self-supervised learning", "Foundation models", "Heliophysics"],
    image: "/images/sdofmv2-model.png",
    imageAlt: "SDOFMv2 masked autoencoder architecture",
    paper: "https://doi.org/10.1007/s11207-026-02740-z",
    code: "https://github.com/Joaggi/sdofmv2",
  },
  {
    title: "Uncertainty-Aware Solar Flare Regression",
    description:
      "This work studies full-disk solar flare regression from HMI magnetograms and augments point predictions of peak X-ray flux with prediction intervals. It compares conformal prediction, quantile regression, and conformalized quantile regression to assess the trade-off between empirical coverage and interval length.",
    contribution: "Led model development, experimental analysis, and manuscript preparation.",
    tags: ["Conformal prediction", "Prediction intervals", "Space weather"],
    image: "/images/conformal-prediction-hmi-overview.png",
    imageAlt: "Solar flare regression and conformal prediction workflow",
    paper: "https://ieeexplore.ieee.org/abstract/document/11415454/",
    code: "https://github.com/JinsuHongg/flare_reg_cp",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f7f4] text-slate-900">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:p-3">Skip to content</a>
      <header className="border-b border-slate-900/10 bg-[#f7f7f4]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a href="#top" className="font-display text-lg font-bold tracking-tight">Jinsu Hong</a>
          <nav aria-label="Primary navigation" className="order-last flex w-full flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-600 md:order-none md:w-auto">
            <a className="transition hover:text-slate-950" href="#news">News</a>
            <a className="transition hover:text-slate-950" href="#publications">Publications</a>
            <a className="transition hover:text-slate-950" href="#research">Research</a>
            <a className="transition hover:text-slate-950" href="#projects">Projects</a>
            <a className="transition hover:text-slate-950" href="#contact">Contact</a>
          </nav>
          <a href="mailto:jinsuhong.knight@gmail.com" className="text-sm font-semibold text-cyan-800 transition hover:text-cyan-950">
            Email <ArrowUpRight className="inline h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section id="top" className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1fr_240px] md:py-14">
          <div>
            <p className="eyebrow mb-5 text-cyan-800">Computer science · machine learning · scientific AI</p>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Jinsu Hong
            </h1>
            <p className="mt-4 text-xl leading-8 text-slate-700">Reliable machine learning for complex scientific data.</p>
            <p className="mt-5 max-w-2xl leading-7 text-slate-600">
              I am a Ph.D. candidate in Computer Science at Georgia State University. I develop machine learning methods for uncertainty-aware prediction, foundation models, imbalanced learning, and computer vision.
            </p>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              My current work uses heliophysics and space weather as demanding real-world settings for creating reliable, transferable, and data-centric AI systems.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild className="bg-slate-900 px-5 text-white hover:bg-slate-700"><a href="#publications">View publications <ArrowDownRight className="ml-2 h-4 w-4" /></a></Button>
              <Button asChild variant="outline" className="border-slate-300 bg-transparent px-5 hover:bg-white"><a href="/cv/"><FileText className="mr-2 h-4 w-4" />View CV</a></Button>
            </div>
          </div>

          <aside className="border-l-2 border-cyan-700 pl-5 md:pt-3">
            <img src="/images/symslake_JS_20260419_fixed.png" alt="Portrait of Jinsu Hong" width={160} height={160} className="mb-6 aspect-square w-40 rounded-full object-cover object-center shadow-sm" />
            <p className="font-semibold">Jinsu Hong</p>
            <p className="mt-1 text-sm leading-6 text-slate-600">Ph.D. Candidate<br />Department of Computer Science<br />Georgia State University</p>
            <div className="mt-5 flex items-center gap-2 text-sm text-slate-600"><MapPin className="h-4 w-4 text-cyan-800" />Atlanta, Georgia</div>
            <div className="mt-6 space-y-2">
              {profileLinks.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="flex items-center justify-between border-b border-slate-300 py-2 text-sm transition hover:border-cyan-800 hover:text-cyan-900"><span>{link.label}</span><ArrowUpRight className="h-3.5 w-3.5" /></a>)}
            </div>
          </aside>
        </section>

        <section id="news" className="border-b border-slate-900/10 bg-[#e8f4f4] px-5 py-10 sm:px-8">
          <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-[180px_1fr_auto] md:items-center">
            <div><p className="eyebrow text-cyan-800">Recent news</p><time dateTime="2026-09-10" className="mt-2 block font-mono text-sm text-slate-600">10 Sep 2026</time></div>
            <p className="max-w-3xl text-lg leading-7 text-slate-700">Our paper <span className="font-semibold">SDOFMv2</span> has been published in <span className="italic">Solar Physics</span>.</p>
            <a href="https://doi.org/10.1007/s11207-026-02740-z" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-800 hover:text-cyan-950">Read the paper <ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </section>

        <section id="publications" className="bg-white px-5 py-12 sm:py-16 sm:px-8">
          <div className="mx-auto max-w-6xl"><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow mb-3 text-cyan-800">Publications</p><h2 className="font-display text-4xl font-bold">Selected work</h2></div><a href="https://scholar.google.com/citations?user=_sb6QZMAAAAJ&hl=en" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-800 hover:text-cyan-950">View complete Google Scholar profile <ExternalLink className="h-4 w-4" /></a></div>
            <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
              {selectedPublications.map((publication) => <article key={publication.title} className="grid gap-3 py-6 md:grid-cols-[90px_1fr_auto]"><p className="font-mono text-sm text-cyan-800">{publication.year}</p><div><h3 className="text-lg font-semibold leading-7">{publication.title}</h3>{publication.authors && <p className="mt-1 text-sm text-slate-700">{publication.authors.map((author, index) => <span key={author}>{index > 0 && ", "}{author === "Jinsu Hong" ? <strong>{author}</strong> : author}</span>)}</p>}<p className="mt-1 text-sm text-slate-600">{publication.venue} · {publication.area}</p></div>{publication.href ? <a href={publication.href} target="_blank" rel="noreferrer" className="self-start rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-800 transition hover:bg-cyan-100" aria-label={`Read ${publication.title}`}>Read paper <ArrowUpRight className="inline h-3 w-3" /></a> : null}</article>)}
            </div>
          </div>
        </section>

        <section id="research" className="mx-auto max-w-7xl px-5 py-12 sm:py-16 sm:px-8">
          <div className="mb-10 max-w-4xl"><p className="eyebrow mb-3 text-cyan-800">Research</p><h2 className="font-display text-4xl font-bold">Methods first. Applications with impact.</h2><p className="mt-4 leading-7 text-slate-600">My work is motivated by challenges in scientific data, but aims to produce machine learning methods with broader relevance.</p></div>
          <div className="grid border-t border-slate-300 sm:grid-cols-2">
            {researchAreas.map((area) => { const Icon = area.icon; return <article key={area.title} className="group border-b border-slate-300 p-6 sm:[&:nth-child(odd)]:border-r"><div className="flex items-start justify-between"><span className="font-mono text-xs text-cyan-800">{area.number}</span><Icon className="h-5 w-5 text-slate-500 transition group-hover:text-cyan-800" /></div><h3 className="mt-9 text-xl font-semibold">{area.title}</h3><p className="mt-3 leading-7 text-slate-600">{area.description}</p><p className="mt-5 text-xs font-semibold uppercase tracking-wide text-slate-500">{area.methods}</p></article>; })}
          </div>
        </section>

        <section id="projects" className="bg-white px-5 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-2xl">
              <p className="eyebrow mb-3 text-cyan-800">Research highlights</p>
              <h2 className="font-display text-4xl font-bold">From methods to evidence</h2>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              {projects.map((project) => (
                <article key={project.title} className="overflow-hidden border border-slate-300 bg-[#f7f7f4] shadow-[4px_4px_0_0_rgb(8_145_178_/_0.16)]">
                  <img src={project.image} alt={project.imageAlt} className="aspect-[16/7] w-full border-b border-slate-300 bg-white object-contain" />
                  <div className="p-6">
                    <Code2 className="h-5 w-5 text-cyan-800" />
                    <h3 className="mt-6 text-xl font-semibold leading-7">{project.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{project.description}</p>
                    <p className="mt-5 border-l-2 border-cyan-700 pl-4 text-sm leading-6 text-slate-700"><span className="font-semibold">My contribution:</span> {project.contribution}</p>
                    <div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-600">{tag}</span>)}</div>
                    <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-cyan-800">
                      <a href={project.paper} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-cyan-950">Paper <ArrowUpRight className="h-4 w-4" /></a>
                      <a href={project.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-cyan-950">Code <ArrowUpRight className="h-4 w-4" /></a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-slate-900/10 bg-[#e8f4f4] px-5 py-16 sm:px-8"><div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-end"><div><p className="eyebrow mb-3 text-cyan-800">Contact</p><h2 className="max-w-none font-display text-4xl font-bold">Interested in trustworthy and scientific machine learning?</h2><p className="mt-4 max-w-2xl leading-7 text-slate-600">I welcome conversations about research collaborations, academic opportunities, and machine learning for complex scientific problems.</p></div><Button asChild className="bg-slate-900 px-5 text-white hover:bg-slate-700"><a href="mailto:jinsuhong.knight@gmail.com"><Mail className="mr-2 h-4 w-4" />Get in touch</a></Button></div></section>
      </main>
      <footer className="bg-slate-900 px-5 py-6 text-sm text-slate-400 sm:px-8"><div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3"><span>© {new Date().getFullYear()} Jinsu Hong</span><span className="flex items-center gap-4"><a aria-label="GitHub" className="hover:text-white" href="https://github.com/JinsuHongg" target="_blank" rel="noreferrer"><Github className="h-4 w-4" /></a><a aria-label="LinkedIn" className="hover:text-white" href="https://linkedin.com/in/jinsuhong" target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" /></a><a aria-label="Email Jinsu Hong" className="hover:text-white" href="mailto:jinsuhong.knight@gmail.com"><Mail className="h-4 w-4" /></a></span></div></footer>
    </div>
  );
}
