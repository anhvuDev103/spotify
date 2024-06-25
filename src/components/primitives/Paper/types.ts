import { DivAttrs } from '@utils/types';

export enum PaperVariantsEnum {
  Contained = 'contained',
  Alpha = 'alpha',
}

export type PaperVariants = `${PaperVariantsEnum}`;

export interface PaperProps extends DivAttrs {
  variant?: PaperVariants;
  children: React.ReactNode;
}

export const DEFAULT_PAPER_VARIANT = PaperVariantsEnum.Contained;
