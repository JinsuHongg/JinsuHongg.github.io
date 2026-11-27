export interface NewsItem {
  date: string;
  dateTime: string;
  text: string;
  highlight?: string;
  venue?: string;
  href?: string;
  linkLabel?: string;
}

export const newsItems: NewsItem[] = [
  {
    date: "Sep 2026",
    dateTime: "2026-09-10",
    text: "Our paper",
    highlight: "SDOFMv2",
    venue: "has been published in Solar Physics.",
    href: "https://doi.org/10.1007/s11207-026-02740-z",
    linkLabel: "Read paper",
  },
  {
    date: "2025 – 2026",
    dateTime: "2025-12",
    text: "Awarded",
    highlight: "NSF ACCESS Explore Allocation (400,000 credits)",
    venue: "as Principal Investigator for fine-tuning the Surya heliophysics foundation model.",
  },
  {
    date: "Nov 2025",
    dateTime: "2025-11",
    text: "Two papers published at",
    highlight: "IEEE ICDM Workshops 2025",
    venue: "on uncertainty-aware solar flare regression and ordinal regularization.",
    href: "https://doi.org/10.1109/ICDMW69685.2025.00238",
    linkLabel: "View paper",
  },
  {
    date: "Aug 2025",
    dateTime: "2025-08",
    text: "Co-authored",
    highlight: "Surya: Foundation Model for Heliophysics",
    venue: "and completed summer research internship at Frontier Development Lab (FDL.AI).",
    href: "https://arxiv.org/abs/2508.14112",
    linkLabel: "arXiv",
  },
];
