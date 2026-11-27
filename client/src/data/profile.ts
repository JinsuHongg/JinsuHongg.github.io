export interface ProfileLink {
  label: string;
  href: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  details: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  note?: string;
}

export interface GrantItem {
  title: string;
  program: string;
  period: string;
  role: string;
  details: string;
}

export interface PresentationItem {
  year: string;
  title: string;
  venue: string;
}

export const profile = {
  name: "Jinsu Hong",
  eyebrow: "Trustworthy ML · uncertainty quantification · scientific AI",
  tagline: "Trustworthy machine learning for complex scientific data.",
  role: "Ph.D. Candidate",
  department: "Department of Computer Science",
  institution: "Georgia State University",
  lab: "Data Mining Laboratory",
  advisor: "Berkay Aydin",
  location: "Atlanta, Georgia",
  email: "jhong36@gsu.edu",
  portrait: "/images/symslake_JS_20260419_fixed.png",
  cvPath: "/cv/",
  bio: [
    "I am a Ph.D. candidate in Computer Science at Georgia State University, working in the Data Mining Laboratory advised by Berkay Aydin. My research centers on uncertainty quantification for reliable machine learning, with work in foundation models, imbalanced learning, and computer vision.",
    "My current work uses heliophysics and space weather as demanding real-world settings for creating reliable, transferable, and data-centric AI systems.",
  ],
};

export const profileLinks: ProfileLink[] = [
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=_sb6QZMAAAAJ&hl=en" },
  { label: "ORCID", href: "https://orcid.org/0009-0002-4383-1376" },
  { label: "GitHub", href: "https://github.com/JinsuHongg" },
  { label: "LinkedIn", href: "https://linkedin.com/in/jinsuhong" },
];

export const researchExperience: ExperienceItem[] = [
  {
    role: "Research Assistant",
    organization: "Data Mining Laboratory, Georgia State University",
    period: "Jan 2022 – Present",
    details:
      "Research on conformal prediction, imbalanced and ordinal learning, multimodal solar imagery pipelines (HMI/AIA), and fine-tuning heliophysics foundation models.",
  },
  {
    role: "Researcher Intern",
    organization: "Frontier Development Lab (FDL.AI)",
    period: "Jun 2025 – Aug 2025",
    details:
      "Contributed to the 2025 “Decoding Solar Wind Structure” challenge, fine-tuning a heliophysics foundation model and building ML-ready multi-source solar-wind datasets.",
  },
];

export const grants: GrantItem[] = [
  {
    title: "Fine-Tuning the Surya Heliophysics Foundation Model for Enhanced Solar Flare Forecasting",
    program: "NSF ACCESS Explore Allocation",
    period: "2025 – 2026",
    role: "Principal Investigator",
    details: "Awarded 400,000 ACCESS Credits (initial allocation and approved supplement) for large-scale model training and evaluation.",
  },
];

export const education: EducationItem[] = [
  {
    degree: "Ph.D. in Computer Science",
    institution: "Georgia State University",
    period: "2023 – Present",
    note: "Advisor: Berkay Aydin",
  },
  {
    degree: "M.S. in Data Science and Analytics",
    institution: "Georgia State University",
    period: "2021 – 2023",
  },
  {
    degree: "B.E. in Advanced Materials Science and Engineering",
    institution: "Sungkyunkwan University",
    period: "2010 – 2017",
  },
];

export const presentations: PresentationItem[] = [
  {
    year: "2025",
    title: "Evaluating the Effectiveness of Active Region/Polarity Inversion Line Segmentation with Heliophysics Foundation Models",
    venue: "AGU Presentation / ESS Open Archive",
  },
  {
    year: "2024",
    title: "Enhancing Solar Flare Prediction with Integrated Multi-wavelength Imagery and Conformal Prediction",
    venue: "AGU Annual Meeting",
  },
];

export const service: string[] = [
  "Reviewer, IEEE International Conference on Machine Learning and Applications (ICMLA), 2023 & 2024",
];
