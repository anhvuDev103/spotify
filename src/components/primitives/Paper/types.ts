export const PAPER_VARIANTS = {
  CONTAINED: 'contained'
} as const;

export type PaperVariant = (typeof PAPER_VARIANTS)[keyof typeof PAPER_VARIANTS];

export interface PaperProps {
  variant?: PaperVariant;
  children: React.ReactNode;
}
