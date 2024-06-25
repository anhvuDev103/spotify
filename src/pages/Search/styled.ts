import styled from 'styled-components';

export const SearchInput = styled.div`
  width: 364px;
  height: 48px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.palette.paper.alpha.main};
  margin-inline: 8px auto;

  position: relative;

  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 12px;
  }

  input {
    padding: 6px 36px;
    ${({ theme }) => theme.typography.regular14};

    position: absolute;
    inset: 0;

    &::placeholder {
      color: ${({ theme }) => theme.palette.text.muted1};
    }
  }
`;

export const SearchFrame = styled.div`
  padding: 0 24px;
  margin-top: 16px;

  .Search-label {
    ${({ theme }) => theme.typography.bold20};
  }
`;
