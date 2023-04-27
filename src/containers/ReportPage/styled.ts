import styled, { css } from 'styled-components';

export const ReportPage = styled.div`
  background: rgba(0, 0, 0, 0.1);
  min-height: 100vh;
  height: max-content;
  padding-bottom: ${({ theme }) => theme.spacing.s15};
`;

export const Page = styled.div`
  padding: ${({ theme }) => `${theme.spacing.s7} ${theme.spacing.s10}`};
  margin: ${({ theme }) => `0px auto ${theme.spacing.s7}`};
  background: #fff;
  width: 776px;
  min-height: 1004px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  box-sizing: border-box;
`;

export const TopPanel = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.s7};
  color: ${({ theme }) => theme.colors.dark};
  height: 50px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
`;

export const Logo = styled.img`
  height: 50px;
  margin-right: 10px;
`;

export const CompanyName = styled.div`
  font-size: 25px;
  font-weight: 600;
  display: flex;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 150px;
`;

export const ReportName = styled.div`
  border-bottom: 6px solid ${({ theme }) => theme.colors.main};
  padding-bottom: ${({ theme }) => theme.spacing.s4};
  font-size: 38px;
  font-weight: 700;
`;

export const ReportDescription = styled.div`
  color: ${({ theme }) => theme.colors.dark};
  padding-top: ${({ theme }) => theme.spacing.s4};
  font-size: 18px;

  b {
    color: #000;
  }
`;

export const PageText = styled.div`
  color: ${({ theme }) => theme.colors.dark};
  line-height: 23px;
`;

export const PageTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.s4};
`;

export const Block = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.s10};
`;

export const TwoBlocks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.s10};

  > div {
    width: 50%;
  }
`;

export const Competitor = styled(PageText)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.s3};
`;

export const SearchButton = styled.button`
  color ${({ theme }) => theme.colors.main};
  background: none;
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 16px;
  font-weight: 600;
`;
