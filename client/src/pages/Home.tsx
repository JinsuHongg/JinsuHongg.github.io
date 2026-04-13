/*
Design philosophy for this file: Atmospheric scientific minimalism.
Use an asymmetric editorial layout, observatory-inspired depth, luminous dividers,
and calm but high-contrast typography that reinforces a research-forward identity.
*/
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Atom,
  BookOpen,
  BrainCircuit,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Microscope,
  Orbit,
  Sparkles,
} from "lucide-react";

const profileLinks = [
  {
    label: "Email",
    href: "mailto:jinsuhong.knight@gmail.com",
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=_sb6QZMAAAAJ&hl=en",
  },
  {
    label: "GitHub",
    href: "https://github.com/JinsuHongg",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/jinsuhong",
  },
  {
    label: "ORCID",
    href: "https://orcid.org/0009-0002-4383-1376",
  },
];

const researchInterests = [
  {
    title: "Solar flare forecasting",
    description:
      "Building machine learning systems for reliable solar event forecasting across active-region and full-disk settings.",
    icon: Orbit,
  },
  {
    title: "Uncertainty quantification",
    description:
      "Designing trustworthy predictive pipelines with conformal methods and interval-aware evaluation for high-stakes scientific use.",
    icon: Sparkles,
  },
  {
    title: "Computer vision for heliophysics",
    description:
      "Using imagery, segmentation, and representation learning to extract structure from solar observations and magnetic field data.",
    icon: Microscope,
  },
  {
    title: "Foundation models for space weather",
    description:
      "Exploring scalable learned representations and transfer across multimodal scientific datasets for forecasting and interpretation.",
    icon: BrainCircuit,
  },
];

const selectedWorks = [
  {
    year: "2025",
    venue: "IEEE ICDMW",
    title: "Uncertainty-Aware Solar Flare Regression",
    summary:
      "Develops a reliability-aware forecasting perspective for solar flare prediction, emphasizing calibrated predictive uncertainty.",
  },
  {
    year: "2023",
    venue: "ICMLA",
    title: "An Innovative Solar Flare Metadata Collection for Space Weather Analytics",
    summary:
      "Introduces improved metadata design for machine learning workflows in space weather analytics and solar flare modeling.",
  },
  {
    year: "2023",
    venue: "CogMI",
    title: "Enhancing Solar Flare Prediction with Innovative Data-Driven Labels",
    summary:
      "Reconsiders label construction for flare prediction to improve fidelity beyond conventional operational definitions.",
  },
  {
    year: "2023",
    venue: "DaWaK",
    title: "Beyond Traditional Flare Forecasting: A Data-driven Labeling Approach for High-fidelity Predictions",
    summary:
      "Frames data-driven labeling as a core methodological lever for more useful and realistic flare forecasting performance.",
  },
];

const projectHighlights = [
  {
    title: "Data-driven labeling for solar flare prediction",
    description:
      "This research revisits the assumptions behind GOES-based flare labels and introduces alternative labeling regimes that better reflect relative flux changes and cumulative behavior over prediction windows. The resulting framework reduces false positives and supports more faithful modeling under difficult solar-cycle conditions.",
    technologies: "Python, NumPy, Pandas, scikit-learn, GOES satellite data",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663548443080/RvKZMg7N95RvnjQgkags5B/jinsu-research-panel-solar-AHTTwdb9dsasZUBx7AXdWH.webp",
  },
  {
    title: "Conformal prediction for trustworthy space weather forecasting",
    description:
      "By applying conformal prediction to solar flare forecasting, this line of work focuses on making model outputs more actionable. Instead of only asking whether an event will occur, it asks how much trust one should place in the prediction, enabling better decision support in the presence of skewed and uncertain data.",
    technologies: "PyTorch, deep learning, conformal prediction, quantile regression",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663548443080/RvKZMg7N95RvnjQgkags5B/jinsu-about-atmosphere-CqVY4JrF2D4ZzbxiBN9PUp.webp",
  },
];

const education = [
  {
    degree: "Ph.D. in Computer Science",
    school: "Georgia State University",
    period: "Aug. 2023 – Present",
  },
  {
    degree: "M.S. in Data Science and Analytics",
    school: "Georgia State University",
    period: "Aug. 2021 – May 2023",
  },
  {
    degree: "B.E. in Advanced Material Science and Engineering",
    school: "SungKyunKwan University",
    period: "Mar. 2010 – Jan. 2017",
  },
];

const updates = [
  {
    date: "Nov 2025",
    text: 'Paper "Uncertainty-Aware Solar Flare Regression" accepted at ICDMW 2025.',
  },
  {
    date: "Dec 2024",
    text: "Presented a poster at AGU Fall Meeting 2024 on conformal prediction for solar flares.",
  },
  {
    date: "2025",
    text: "Presented work on active region and polarity inversion line segmentation with heliophysics foundation models.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="scientific-noise pointer-events-none fixed inset-0 opacity-70" />
      <div className="pointer-events-none fixed inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(94,213,255,0.14),transparent_55%)]" />

      <div className="relative mx-auto max-w-[1600px] px-4 pb-16 pt-4 sm:px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)] xl:grid-cols-[340px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-4 lg:self-start">
            <div className="glass-panel overflow-hidden">
              <div className="border-b border-white/10 px-6 py-6">
                <p className="eyebrow">Jinsu Hong</p>
                <h1 className="mt-3 font-display text-[2.9rem] leading-[0.92] text-white sm:text-[3.3rem] lg:text-[3.65rem]">
                  Machine learning for space weather forecasting.
                </h1>
              </div>

              <div className="space-y-6 px-6 py-6">
                <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5">
                  <img
                    src="https://jinsuhongg.github.io/images/Savanah_Jinsu.png"
                    alt="Portrait of Jinsu Hong"
                    className="h-[220px] w-full object-cover object-center"
                  />
                </div>

                <div className="space-y-3 text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="mt-0.5 h-4 w-4 text-cyan-300" />
                    <p>Ph.D. Student in Computer Science at Georgia State University</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Atom className="mt-0.5 h-4 w-4 text-cyan-300" />
                    <p>Researching machine learning, uncertainty quantification, and solar event forecasting</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 text-cyan-300" />
                    <p>Atlanta, Georgia</p>
                  </div>
                </div>

                <div className="space-y-2 border-t border-white/10 pt-5">
                  {profileLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:bg-white/8"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="h-4 w-4 text-cyan-200 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <main className="space-y-6">
            <section className="hero-shell overflow-hidden rounded-[2rem] border border-white/10">
              <div className="relative min-h-[580px] overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-12">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663548443080/RvKZMg7N95RvnjQgkags5B/jinsu-hero-observatory-EEwoFMWnvey8gBV8bATRgA.webp"
                  alt="Abstract observatory-inspired solar forecasting artwork"
                  className="absolute inset-0 h-full w-full object-cover opacity-55"
                />
                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(3,7,18,0.92)_0%,rgba(3,7,18,0.76)_48%,rgba(3,7,18,0.58)_100%)]" />
                <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-[linear-gradient(90deg,transparent,rgba(8,15,30,0.36))] lg:block" />

                <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_280px] lg:items-end">
                  <div className="max-w-3xl space-y-6">
                    <p className="eyebrow text-cyan-200">Computational heliophysics · trustworthy AI · data-centric modeling</p>
                    <h2 className="font-display text-5xl leading-[0.95] tracking-tight text-white sm:text-6xl xl:text-7xl">
                      Building reliable forecasting systems for severe space weather events.
                    </h2>
                    <p className="max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                      I am Jinsu Hong, a Computer Science Ph.D. student at Georgia State University advised by Dr. Berkay Aydin. My work bridges artificial intelligence and space weather, with a focus on solar flare prediction, uncertainty-aware modeling, computer vision, and scientific machine learning methods that support credible decision-making.
                    </p>

                    <div className="flex flex-wrap gap-3 pt-2">
                      <a href="#research-focus">
                        <Button className="rounded-full bg-cyan-300 px-6 text-slate-950 hover:bg-cyan-200">
                          Explore research
                        </Button>
                      </a>
                      <a
                        href="https://jinsuhongg.github.io/CV_2025_new_JinsuHong-r1%20(2).docx"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button
                          variant="outline"
                          className="rounded-full border-white/20 bg-white/6 px-6 text-white hover:bg-white/12"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Download CV
                        </Button>
                      </a>
                    </div>
                  </div>

                  <div className="grid gap-3 self-end">
                    {[
                      ["Focus", "Machine learning, uncertainty quantification, and solar forecasting"],
                      ["Advisor", "Dr. Berkay Aydin"],
                      ["Approach", "Data-centric, reliability-aware, and application-driven"],
                    ].map(([label, value]) => (
                      <div key={label} className="glass-card p-4">
                        <p className="text-[0.72rem] uppercase tracking-[0.22em] text-cyan-200/80">{label}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-100">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_320px]">
              <div className="glass-panel p-6 sm:p-8">
                <p className="eyebrow">Research narrative</p>
                <h3 className="section-title mt-4 text-white">A research agenda centered on trustworthy scientific forecasting.</h3>
                <div className="mt-6 space-y-5 text-base leading-8 text-slate-300">
                  <p>
                    My research explores how machine learning can be made more useful for space weather forecasting, especially in settings where data imbalance, event rarity, and operational trust all matter. I am particularly interested in designing models that do not simply optimize benchmark accuracy, but also communicate reliability and remain meaningful under scientific constraints.
                  </p>
                  <p>
                    This work spans data-centric labeling strategies, solar imagery and magnetic field representations, conformal prediction, and emerging foundation-model approaches for heliophysics. Across these threads, the broader aim is consistent: to build forecasting systems that scientists and practitioners can trust when decisions have real downstream consequences.
                  </p>
                </div>
              </div>

              <div className="glass-panel flex flex-col justify-between bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6">
                <div>
                  <p className="eyebrow">Current direction</p>
                  <h3 className="mt-4 font-display text-3xl text-white">Research at the intersection of AI and heliophysics.</h3>
                </div>
                <p className="mt-6 text-sm leading-7 text-slate-300">
                  From label design to calibrated prediction intervals, the website now foregrounds the methodological coherence of the research rather than presenting publications as isolated outputs.
                </p>
              </div>
            </section>

            <section id="research-focus" className="glass-panel p-6 sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
                <div>
                  <p className="eyebrow">Research interests</p>
                  <h3 className="section-title mt-4 text-white">Core themes shaping the work.</h3>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {researchInterests.map((item) => {
                    const Icon = item.icon;
                    return (
                      <article
                        key={item.title}
                        className="group rounded-[1.6rem] border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/7"
                      >
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/12 text-cyan-200">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                        <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                      </article>
                    );
                  })}
                </div>
              </div>
            </section>

            <section className="grid gap-6 2xl:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
              {projectHighlights.map((project) => (
                <article key={project.title} className="glass-panel overflow-hidden">
                  <div className="relative h-56 overflow-hidden border-b border-white/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(3,7,18,0.75))]" />
                  </div>
                  <div className="p-6 sm:p-8">
                    <p className="eyebrow">Featured project</p>
                    <h3 className="mt-4 font-display text-3xl text-white">{project.title}</h3>
                    <p className="mt-5 text-sm leading-8 text-slate-300">{project.description}</p>
                    <p className="mt-5 border-t border-white/10 pt-5 text-xs uppercase tracking-[0.16em] text-slate-400">
                      {project.technologies}
                    </p>
                  </div>
                </article>
              ))}
            </section>

            <section className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
              <div className="glass-panel overflow-hidden">
                <div className="relative border-b border-white/10 px-6 py-6 sm:px-8">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663548443080/RvKZMg7N95RvnjQgkags5B/jinsu-publication-texture-SggEUhZcpuWgKWp2k75FaB.webp"
                    alt="Abstract publication section background"
                    className="absolute inset-0 h-full w-full object-cover opacity-25"
                  />
                  <div className="relative">
                    <p className="eyebrow">Selected publications</p>
                    <h3 className="section-title mt-4 text-white">Recent work and representative contributions.</h3>
                  </div>
                </div>
                <div className="divide-y divide-white/10">
                  {selectedWorks.map((work) => (
                    <article key={work.title} className="grid gap-4 px-6 py-6 sm:grid-cols-[88px_minmax(0,1fr)] sm:px-8">
                      <div>
                        <p className="font-display text-3xl text-cyan-200">{work.year}</p>
                        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-500">{work.venue}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">{work.title}</h4>
                        <p className="mt-3 text-sm leading-7 text-slate-300">{work.summary}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <section className="glass-panel p-6 sm:p-8">
                  <p className="eyebrow">Recent updates</p>
                  <h3 className="section-title mt-4 text-white">What’s new.</h3>
                  <div className="mt-6 space-y-5">
                    {updates.map((update) => (
                      <article key={`${update.date}-${update.text}`} className="border-l border-cyan-300/40 pl-4">
                        <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">{update.date}</p>
                        <p className="mt-2 text-sm leading-7 text-slate-300">{update.text}</p>
                      </article>
                    ))}
                  </div>
                </section>

                <section className="glass-panel p-6 sm:p-8">
                  <p className="eyebrow">Education</p>
                  <h3 className="section-title mt-4 text-white">Academic background.</h3>
                  <div className="mt-6 space-y-5">
                    {education.map((item) => (
                      <article key={item.degree} className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
                        <h4 className="text-base font-semibold text-white">{item.degree}</h4>
                        <p className="mt-2 text-sm text-slate-300">{item.school}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">{item.period}</p>
                      </article>
                    ))}
                  </div>
                </section>
              </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
              <div className="glass-panel p-6 sm:p-8">
                <p className="eyebrow">Research outlook</p>
                <h3 className="section-title mt-4 text-white">Toward dependable, data-driven forecasting models.</h3>
                <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
                  The long-term goal of this work is to help build forecasting systems that do more than detect patterns. They should quantify what they know, communicate what they do not know, and remain useful for researchers and practitioners navigating complex space weather phenomena.
                </p>
              </div>

              <div className="glass-panel p-6">
                <p className="eyebrow">Contact</p>
                <h3 className="mt-4 font-display text-3xl text-white">Let’s connect.</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  For research collaboration, academic conversation, or project inquiries, feel free to reach out by email or through the public research profiles linked here.
                </p>
                <div className="mt-6 space-y-3">
                  <a
                    href="mailto:jinsuhong.knight@gmail.com"
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:bg-white/8"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Mail className="h-4 w-4 text-cyan-200" />
                      jinsuhong.knight@gmail.com
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-cyan-200 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href="https://github.com/JinsuHongg"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:bg-white/8"
                  >
                    <span className="inline-flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-cyan-200" />
                      View code and research repositories
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-cyan-200 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
