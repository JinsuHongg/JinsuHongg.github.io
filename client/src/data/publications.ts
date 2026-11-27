import type { ResearchAreaKey } from "./research";

export type PublicationType = "Journal" | "Conference" | "Workshop" | "Preprint";

export interface Publication {
  id: string;
  year: string;
  title: string;
  authors: string[];
  venue: string;
  type: PublicationType;
  area: ResearchAreaKey;
  selected: boolean;
  href?: string;
  code?: string;
  bibtex: string;
}

export const publications: Publication[] = [
  {
    id: "hong2026sdofmv2",
    year: "2026",
    title:
      "SDOFMv2: A Multi-Instrument Foundation Model for the Solar Dynamics Observatory with Transferable Downstream Applications",
    authors: ["Jinsu Hong", "Daniela Martin", "Joseph Gallego"],
    venue: "Solar Physics, 301, Article 137",
    type: "Journal",
    area: "Foundation models",
    selected: true,
    href: "https://doi.org/10.1007/s11207-026-02740-z",
    code: "https://github.com/Joaggi/sdofmv2",
    bibtex: `@article{hong2026sdofmv2,
  author  = {Hong, Jinsu and Martin, Daniela and Gallego, Joseph},
  title   = {SDOFMv2: A Multi-Instrument Foundation Model for the Solar Dynamics Observatory with Transferable Downstream Applications},
  journal = {Solar Physics},
  volume  = {301},
  pages   = {137},
  year    = {2026},
  doi     = {10.1007/s11207-026-02740-z}
}`,
  },
  {
    id: "hong2025uncertainty",
    year: "2025",
    title: "Uncertainty-Aware Solar Flare Regression",
    authors: ["Jinsu Hong", "Chetraj Pandey", "Berkay Aydin"],
    venue: "IEEE International Conference on Data Mining Workshops (ICDMW), pp. 1976–1984",
    type: "Workshop",
    area: "Uncertainty quantification",
    selected: true,
    href: "https://doi.org/10.1109/ICDMW69685.2025.00238",
    code: "https://github.com/JinsuHongg/flare_reg_cp",
    bibtex: `@inproceedings{hong2025uncertainty,
  author    = {Hong, Jinsu and Pandey, Chetraj and Aydin, Berkay},
  title     = {Uncertainty-Aware Solar Flare Regression},
  booktitle = {2025 IEEE International Conference on Data Mining Workshops (ICDMW)},
  pages     = {1976--1984},
  year      = {2025},
  doi       = {10.1109/ICDMW69685.2025.00238}
}`,
  },
  {
    id: "roy2025surya",
    year: "2025",
    title: "Surya: Foundation Model for Heliophysics",
    authors: ["S. Roy", "J. Schmude", "R. Lal", "et al., including Jinsu Hong"],
    venue: "arXiv preprint arXiv:2508.14112",
    type: "Preprint",
    area: "Foundation models",
    selected: true,
    href: "https://arxiv.org/abs/2508.14112",
    bibtex: `@article{roy2025surya,
  author  = {Roy, S. and Schmude, J. and Lal, R. and others},
  title   = {Surya: Foundation Model for Heliophysics},
  journal = {arXiv preprint arXiv:2508.14112},
  year    = {2025}
}`,
  },
  {
    id: "pandey2025ordinal",
    year: "2025",
    title: "Ordinal Encoding as a Regularizer in Binary Loss for Solar Flare Prediction",
    authors: ["Chetraj Pandey", "Jinsu Hong", "A. Ji", "R. A. Angryk", "Berkay Aydin"],
    venue: "IEEE International Conference on Data Mining Workshops (ICDMW), pp. 1890–1895",
    type: "Workshop",
    area: "Imbalanced learning",
    selected: false,
    href: "https://doi.org/10.1109/ICDMW69685.2025.00227",
    bibtex: `@inproceedings{pandey2025ordinal,
  author    = {Pandey, Chetraj and Hong, Jinsu and Ji, A. and Angryk, R. A. and Aydin, Berkay},
  title     = {Ordinal Encoding as a Regularizer in Binary Loss for Solar Flare Prediction},
  booktitle = {2025 IEEE International Conference on Data Mining Workshops (ICDMW)},
  pages     = {1890--1895},
  year      = {2025},
  doi       = {10.1109/ICDMW69685.2025.00227}
}`,
  },
  {
    id: "pandey2024ecml",
    year: "2024",
    title: "Advancing Solar Flare Prediction Using Deep Learning with Active Region Patches",
    authors: ["Chetraj Pandey", "T. Adeyeha", "Jinsu Hong", "R. A. Angryk", "Berkay Aydin"],
    venue: "ECML PKDD 2024 (Applied Data Science Track), pp. 50–65",
    type: "Conference",
    area: "Computer vision",
    selected: true,
    href: "https://doi.org/10.1007/978-3-031-70381-2_4",
    bibtex: `@inproceedings{pandey2024advancing,
  author    = {Pandey, Chetraj and Adeyeha, T. and Hong, Jinsu and Angryk, R. A. and Aydin, Berkay},
  title     = {Advancing Solar Flare Prediction Using Deep Learning with Active Region Patches},
  booktitle = {Machine Learning and Knowledge Discovery in Databases (ECML PKDD 2024)},
  pages     = {50--65},
  year      = {2024},
  doi       = {10.1007/978-3-031-70381-2_4}
}`,
  },
  {
    id: "hong2023dawak",
    year: "2023",
    title: "Beyond Traditional Flare Forecasting: A Data-driven Labeling Approach for High-fidelity Predictions",
    authors: ["Jinsu Hong", "A. Ji", "Chetraj Pandey", "Berkay Aydin"],
    venue: "DaWaK (LNCS), pp. 380–385",
    type: "Conference",
    area: "Imbalanced learning",
    selected: true,
    href: "https://doi.org/10.1007/978-3-031-39831-5_34",
    bibtex: `@inproceedings{hong2023beyond,
  author    = {Hong, Jinsu and Ji, A. and Pandey, Chetraj and Aydin, Berkay},
  title     = {Beyond Traditional Flare Forecasting: A Data-driven Labeling Approach for High-fidelity Predictions},
  booktitle = {Big Data Analytics and Knowledge Discovery (DaWaK 2023)},
  series    = {Lecture Notes in Computer Science},
  pages     = {380--385},
  year      = {2023},
  doi       = {10.1007/978-3-031-39831-5_34}
}`,
  },
  {
    id: "hong2023icmla",
    year: "2023",
    title: "An Innovative Solar Flare Metadata Collection for Space Weather Analytics",
    authors: ["Jinsu Hong", "Chetraj Pandey", "A. Ji", "Berkay Aydin"],
    venue: "22nd IEEE International Conference on Machine Learning and Applications (ICMLA), pp. 408–413",
    type: "Conference",
    area: "Imbalanced learning",
    selected: false,
    bibtex: `@inproceedings{hong2023metadata,
  author    = {Hong, Jinsu and Pandey, Chetraj and Ji, A. and Aydin, Berkay},
  title     = {An Innovative Solar Flare Metadata Collection for Space Weather Analytics},
  booktitle = {2023 International Conference on Machine Learning and Applications (ICMLA)},
  pages     = {408--413},
  year      = {2023}
}`,
  },
  {
    id: "hong2023cogmi",
    year: "2023",
    title: "Enhancing Solar Flare Prediction with Innovative Data-Driven Labels",
    authors: ["Jinsu Hong", "A. Ji", "Chetraj Pandey", "Berkay Aydin"],
    venue: "5th IEEE International Conference on Cognitive Machine Intelligence (CogMI)",
    type: "Conference",
    area: "Imbalanced learning",
    selected: false,
    bibtex: `@inproceedings{hong2023cogmi,
  author    = {Hong, Jinsu and Ji, A. and Pandey, Chetraj and Aydin, Berkay},
  title     = {Enhancing Solar Flare Prediction with Innovative Data-Driven Labels},
  booktitle = {2023 IEEE 5th International Conference on Cognitive Machine Intelligence (CogMI)},
  year      = {2023}
}`,
  },
];
