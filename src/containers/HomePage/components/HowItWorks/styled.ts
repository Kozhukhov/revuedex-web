import styled from 'styled-components';

export const HowItWorks = styled.div`
  max-width: 900px;
  margin: auto;
  margin-top: ${({ theme }) => theme.spacing.s30};
`;

export const Steps = styled.div`
  display: flex;
  gap: 40px;
  margin-top: ${({ theme }) => theme.spacing.s15};
`;

export const Step = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 33.33%;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing.s5};
  transition: all 0.2s;

  &:hover {
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  }
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  margin: ${({ theme }) => `0px 0px ${theme.spacing.s4}`};
`;

export const Content = styled.p`
  margin: 0px;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.dark};
`;
