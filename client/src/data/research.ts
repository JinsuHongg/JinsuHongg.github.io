export type ResearchAreaKey =
  | "Uncertainty quantification"
  | "Foundation models"
  | "Imbalanced learning"
  | "Computer vision";

export interface ResearchArea {
  number: string;
  title: ResearchAreaKey;
  description: string;
  methods: string;
  iconName: "sparkles" | "brain" | "orbit" | "scan";
}

export const researchAreas: ResearchArea[] = [
  {
    number: "01",
    title: "Uncertainty quantification",
    description:
      "Building calibrated predictive systems that communicate what models know, what they do not know, and when their outputs should be trusted.",
    methods: "Conformal prediction · quantile regression · calibration",
    iconName: "sparkles",
  },
  {
    number: "02",
    title: "Foundation models",
    description:
      "Studying transferable representations and efficient adaptation for scientific, multimodal, and data-limited machine learning problems.",
    methods: "Representation learning · transfer learning · multimodal ML",
    iconName: "brain",
  },
  {
    number: "03",
    title: "Imbalanced learning",
    description:
      "Developing data-centric approaches for rare-event prediction, including better targets, loss functions, and evaluation under skewed distributions.",
    methods: "Rare events · ordinal learning · data-centric AI",
    iconName: "orbit",
  },
  {
    number: "04",
    title: "Computer vision",
    description:
      "Using visual representation learning and segmentation to extract reliable signals from complex scientific imagery and spatiotemporal data.",
    methods: "Segmentation · deep learning · scientific imaging",
    iconName: "scan",
  },
];
