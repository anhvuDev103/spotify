import styled, { css } from 'styled-components';

import { PopoverOptionItemFrameProps } from './types';

export const PopoverFrame = styled.div`
  background-color: ${({ theme }) => theme.palette.background.popover};
  border-radius: 4px;
`;

export const PopoverOptionGroupFrame = styled.div`
  min-width: 160px;
  max-width: 350px;
  padding: 4px;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  .PopoverOptionGroup-label {
    height: 40px;
    padding: 12px 8px 12px 12px;

    ${({ theme }) => theme.typography.medium10};
  }
`;

export const PopoverOptionItemFrame = styled.div<PopoverOptionItemFrameProps>`
  height: 40px;
  padding: 12px 8px 12px 12px;
  border-radius: 2px;

  display: flex;
  align-items: center;
  gap: 12px;

  ${({ theme }) => theme.typography.regular14};
  color: ${({ theme }) => theme.palette.text.main};

  &:hover {
    background-color: ${({ theme }) => theme.palette.action.hover1};

    cursor: pointer;
  }

  ${({ $active }) =>
    $active &&
    css`
      color: ${({ theme }) => theme.palette.primary.main};

      .PopoverOptionItem-endIcon {
        display: flex !important;
      }
    `};

  ${({ $disabled }) =>
    $disabled &&
    css`
      color: ${({ theme }) => theme.palette.text.muted};

      pointer-events: none;
    `};

  .PopoverOptionItem-icon {
    display: flex;

    svg {
      font-size: 1.6rem;
    }
  }

  .PopoverOptionItem-startIcon {
  }

  .PopoverOptionItem-endIcon {
    margin-left: auto;

    display: none;
  }
`;

export const PopoverOptionDividerFrame = styled.div`
  align-self: stretch;

  height: 1px;
  background-color: ${({ theme }) => theme.palette.divider};
`;
