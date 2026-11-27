export interface ProjectItem {
  title: string;
  description: string;
  contribution: string;
  tags: string[];
  image: string;
  imageAlt: string;
  paper: string;
  code: string;
}

export interface InteractiveTool {
  title: string;
  description: string;
  footnote: string;
  href: string;
  linkLabel: string;
}

export const projects: ProjectItem[] = [
  {
    title: "SDOFMv2: A Multi-Instrument Foundation Model",
    description:
      "SDOFMv2 is a multi-instrument foundation model pretrained with self-supervised learning on Atmospheric Imaging Assembly (AIA) and Helioseismic and Magnetic Imager (HMI) observations from the Solar Dynamics Observatory. The project investigates whether pretrained solar representations can support a range of downstream tasks, including missing-channel reconstruction, F10.7 regression, and solar-wind classification.",
    contribution:
      "Built and organized the project repository, trained the models, and consolidated the experimental results.",
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
    contribution:
      "Led model development, experimental analysis, and manuscript preparation.",
    tags: ["Conformal prediction", "Prediction intervals", "Space weather"],
    image: "/images/conformal-prediction-hmi-overview.png",
    imageAlt: "Solar flare regression and conformal prediction workflow",
    paper: "https://doi.org/10.1109/ICDMW69685.2025.00238",
    code: "https://github.com/JinsuHongg/flare_reg_cp",
  },
];

export const interactiveTool: InteractiveTool = {
  title: "Solar Arcade — Mission Control",
  description:
    "An interactive, Sun-centered explorer for viewing the positions of Earth, SDO, STEREO-A, and STEREO-B from 2010 to 2026, with date and time controls, playback, and a rotatable 3D view.",
  footnote: "NASA positions · SDO spacing enlarged · Object sizes not to scale",
  href: "https://solar-arcade.pages.dev/",
  linkLabel: "Open Solar Arcade",
};
