import styled from 'styled-components';

export const HowItWorks = styled.div`
  max-width: 900px;
  margin: auto;
  margin-top: ${({ theme }) => theme.spacing.s30};

  @media (max-width: 800px) {
    margin-top: ${({ theme }) => theme.spacing.s15};
  }
`;

export const Steps = styled.div`
  display: flex;
  gap: 40px;
  margin-top: ${({ theme }) => theme.spacing.s15};

  @media (max-width: 800px) {
    margin-top: ${({ theme }) => theme.spacing.s2};
    flex-direction: column;
    gap: 20px;
  }
`;

export const Step = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  width: 33.33%;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing.s5};
  transition: all 0.2s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }

  @media (max-width: 800px) {
    box-shadow: none!important;
    width: 100%;
    padding: 0px;
    margin-bottom: ${({ theme }) => theme.spacing.s7};
  
    img {
      max-width: 95px;
    }
  }
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  margin: ${({ theme }) => `0px 0px ${theme.spacing.s4}`};

  @media (max-width: 800px) {
    font-size: 16px;
    margin: ${({ theme }) => `0px 0px ${theme.spacing.s2}`};
  }
`;

export const Content = styled.p`
  margin: 0px;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.dark};

  @media (max-width: 800px) {
    font-size: 14px;
  }
`;
