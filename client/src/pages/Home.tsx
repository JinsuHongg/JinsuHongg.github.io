/*
Design philosophy for this file: Clean, minimal white aesthetic.
Simple, readable, professional. Focus on content clarity with soft spacing and subtle accents.
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
  },
  {
    title: "Conformal prediction for trustworthy space weather forecasting",
    description:
      "By applying conformal prediction to solar flare forecasting, this line of work focuses on making model outputs more actionable. Instead of only asking whether an event will occur, it asks how much trust one should place in the prediction, enabling better decision support in the presence of skewed and uncertain data.",
    technologies: "PyTorch, deep learning, conformal prediction, quantile regression",
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
    <div className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header / Intro Section */}
        <div className="mb-16 grid gap-12 lg:grid-cols-[280px_1fr]">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <div className="space-y-6">
              {/* Name and Title */}
              <div>
                <p className="eyebrow mb-2">Jinsu Hong</p>
                <h1 className="font-display text-3xl font-bold leading-tight text-slate-900">
                  Machine learning for space weather forecasting.
                </h1>
              </div>

              {/* Portrait */}
              <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                <img
                  src="https://jinsuhongg.github.io/images/Savanah_Jinsu.png"
                  alt="Portrait of Jinsu Hong"
                  className="h-56 w-full object-cover object-center"
                />
              </div>

              {/* Bio Info */}
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <GraduationCap className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400" />
                  <p>Ph.D. Student in Computer Science at Georgia State University</p>
                </div>
                <div className="flex items-start gap-3">
                  <Atom className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400" />
                  <p>Researching machine learning, uncertainty quantification, and solar event forecasting</p>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400" />
                  <p>Atlanta, Georgia</p>
                </div>
              </div>

              {/* Profile Links */}
              <div className="space-y-2 border-t border-slate-200 pt-4">
                {profileLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 transition hover:border-slate-400 hover:bg-white"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-400 transition group-hover:text-slate-600" />
                  </a>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="space-y-12">
            {/* Hero Section */}
            <section className="rounded-lg border border-slate-200 overflow-hidden">
              <div className="relative min-h-[500px] bg-gradient-to-br from-slate-900 to-slate-800 p-8 sm:p-10">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663548443080/RvKZMg7N95RvnjQgkags5B/sdo-aia-coronal-loops_c214f1bf.jpg"
                  alt="SDO AIA coronal loops - solar active region"
                  className="absolute inset-0 h-full w-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent" />
                <div className="relative z-10 space-y-6 max-w-2xl">
                  <p className="eyebrow text-slate-300">Computational heliophysics · trustworthy AI · data-centric modeling</p>
                  <h2 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
                    Building reliable forecasting systems for severe space weather events.
                  </h2>
                  <p className="text-base leading-relaxed text-slate-200 sm:text-lg">
                    I am Jinsu Hong, a Computer Science Ph.D. student at Georgia State University advised by Dr. Berkay Aydin. My work bridges artificial intelligence and space weather, with a focus on solar flare prediction, uncertainty-aware modeling, computer vision, and scientific machine learning methods that support credible decision-making.
                  </p>

                  <div className="flex flex-wrap gap-3 pt-4">
                    <a href="#research-focus">
                      <Button className="rounded-lg bg-cyan-500 px-6 text-white hover:bg-cyan-600">
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
                        className="rounded-lg border-slate-400 bg-slate-700/50 px-6 text-white hover:bg-slate-600"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download CV
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Research Focus Section */}
            <section id="research-focus" className="space-y-8">
              <div>
                <p className="eyebrow mb-2">Research Focus</p>
                <h3 className="font-display text-2xl font-bold text-slate-900">
                  Research Interests
                </h3>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {researchInterests.map((interest) => {
                  const IconComponent = interest.icon;
                  return (
                    <div key={interest.title} className="rounded-lg border border-slate-200 bg-white p-6 hover:border-slate-300 hover:shadow-sm transition">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                        <IconComponent className="h-5 w-5 text-slate-900" />
                      </div>
                      <h4 className="mb-2 font-semibold text-slate-900">{interest.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{interest.description}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Selected Works Section */}
            <section className="space-y-8">
              <div>
                <p className="eyebrow mb-2">Publications</p>
                <h3 className="font-display text-2xl font-bold text-slate-900">
                  Selected Works
                </h3>
              </div>

              <div className="space-y-4">
                {selectedWorks.map((work, idx) => (
                  <div key={idx} className="rounded-lg border border-slate-200 bg-white p-6 hover:border-slate-300 hover:shadow-sm transition">
                    <div className="mb-3 flex items-start justify-between">
                      <div>
                        <p className="text-sm font-semibold text-slate-500">{work.year} · {work.venue}</p>
                      </div>
                    </div>
                    <h4 className="mb-2 font-semibold text-slate-900">{work.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{work.summary}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects Section */}
            <section className="space-y-8">
              <div>
                <p className="eyebrow mb-2">Projects</p>
                <h3 className="font-display text-2xl font-bold text-slate-900">
                  Research Projects
                </h3>
              </div>

              <div className="space-y-6">
                {projectHighlights.map((project, idx) => (
                  <div key={idx} className="rounded-lg border border-slate-200 bg-white p-6 hover:border-slate-300 hover:shadow-sm transition">
                    <h4 className="mb-3 font-semibold text-slate-900">{project.title}</h4>
                    <p className="mb-4 text-sm text-slate-600 leading-relaxed">{project.description}</p>
                    <p className="text-xs text-slate-500">
                      <span className="font-semibold">Technologies:</span> {project.technologies}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Updates Section */}
            <section className="space-y-8">
              <div>
                <p className="eyebrow mb-2">News</p>
                <h3 className="font-display text-2xl font-bold text-slate-900">
                  Recent Updates
                </h3>
              </div>

              <div className="space-y-4">
                {updates.map((update, idx) => (
                  <div key={idx} className="rounded-lg border border-slate-200 bg-white p-4 hover:border-slate-300 hover:shadow-sm transition">
                    <p className="text-xs font-semibold text-slate-500 mb-1">{update.date}</p>
                    <p className="text-sm text-slate-700">{update.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section className="space-y-8">
              <div>
                <p className="eyebrow mb-2">Background</p>
                <h3 className="font-display text-2xl font-bold text-slate-900">
                  Education
                </h3>
              </div>

              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="rounded-lg border border-slate-200 bg-white p-6 hover:border-slate-300 hover:shadow-sm transition">
                    <h4 className="font-semibold text-slate-900">{edu.degree}</h4>
                    <p className="text-sm text-slate-600">{edu.school}</p>
                    <p className="text-xs text-slate-500 mt-1">{edu.period}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Footer / Contact */}
            <section className="border-t border-slate-200 pt-12">
              <div className="rounded-lg bg-slate-50 p-8 text-center">
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Get in touch</h3>
                <p className="text-slate-600 mb-6">
                  Feel free to reach out for collaborations or just a friendly hello.
                </p>
                <a href="mailto:jinsuhong.knight@gmail.com">
                  <Button className="rounded-lg bg-slate-900 px-6 text-white hover:bg-slate-800">
                    <Mail className="mr-2 h-4 w-4" />
                    Send me an email
                  </Button>
                </a>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
