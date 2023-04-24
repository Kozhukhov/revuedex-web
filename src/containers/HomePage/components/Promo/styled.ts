import styled, { css } from 'styled-components';

export const Promo = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border-radius: ${theme.borderRadius.r1};
    padding: ${theme.spacing.s5};
    margin-top: ${theme.spacing.s30};
  `}

  display: flex;
  text-align: left !important;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
    margin-bottom: ${theme.spacing.s10};
    margin-top: ${theme.spacing.s6};
  `}

  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`;

export const Title = styled.p`
  font-weight: 800;
  font-size: 42px;
  line-height: 50px;
  margin: 0px;
`;

export const Wrapper = styled.div`
  width: 50%;
`;
