import styled, { css } from 'styled-components';

export const Promo = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border-radius: ${theme.borderRadius.r1};
    padding: ${theme.spacing.s5};
    margin-top: ${theme.spacing.s30};

    @media (max-width: 800px) {
      margin-top: ${theme.spacing.s15};
    }
  `}

  display: flex;
  text-align: left !important;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled.img`
  max-width: 492px;
  width: 50%;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Content = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
    margin-bottom: ${theme.spacing.s10};
    margin-top: ${theme.spacing.s6};

    @media (max-width: 800px) {
      font-size: 16px;
      text-align: center;
      margin-bottom: ${theme.spacing.s5};
      margin-top: 0px;
    }
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

  @media (max-width: 800px) {
    font-size: 30px;
    text-align: center;
  }
`;

export const Wrapper = styled.div`
  width: 50%;

  @media (max-width: 800px) {
    width: 100%;
  }
`;
