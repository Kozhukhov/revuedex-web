import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.s30};
    padding-top: ${theme.spacing.s10};
    padding-bottom: ${theme.spacing.s10};

    @media (max-width: 800px) {
      margin-top: ${theme.spacing.s15};
      padding-top: ${theme.spacing.s5};
      padding-bottom: ${theme.spacing.s5};
    }
  `}

  border-top: 1px solid rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Link = styled.a`
  ${({ theme }) => css`
    padding: ${theme.spacing.s2};
    color: ${theme.colors.dark};
    transition: all 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.main};
    }
  `}

  font-size: 14px;
  cursor: pointer;
`;
