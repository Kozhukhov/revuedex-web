import styled from 'styled-components';

export const Questions = styled.div`
  margin-top: ${({ theme }) => theme.spacing.s30};

  @media (max-width: 800px) {
    margin-top: ${({ theme }) => theme.spacing.s15};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: ${({ theme }) =>
    `${theme.spacing.s15} -${theme.spacing.s6} 0px -${theme.spacing.s6}`};

  @media (max-width: 800px) {
    margin-top: ${({ theme }) => theme.spacing.s6};
  }
`;

export const Block = styled.div`
  width: 50%;
  padding: ${({ theme }) => theme.spacing.s6};
  box-sizing: border-box;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Question = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  margin-top: 0px;
  margin-bottom: ${({ theme }) => theme.spacing.s3};

  @media (max-width: 800px) {
    font-size: 16px;
    margin-bottom: ${({ theme }) => theme.spacing.s1};
  }
`;

export const Answer = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  margin: 0px;
  color: ${({ theme }) => theme.colors.dark};

  @media (max-width: 800px) {
    font-size: 14px;
  }
`;
