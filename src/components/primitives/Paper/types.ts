export enum PaperVariants {
  Contained = 'contained',
}

export interface PaperProps {
  variant?: PaperVariants;
  children: React.ReactNode;
}

export const DEFAULT_PAPER_VARIANT = PaperVariants.Contained;
