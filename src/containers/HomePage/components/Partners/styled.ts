import styled, { css } from 'styled-components';

export const Partners = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-top: -62px;
  background: #fff;
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.spacing.s5} 0px;

  @media (max-width: 800px) {
    padding: ${({ theme }) => theme.spacing.s2} 0px;
  }
`;

export const Partner = styled.div`
  position: relative;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing.s1} ${theme.spacing.s8}`};

  img {
    max-width: 100%;
  }

  @media (max-width: 800px) {
    max-width: 100px;

    padding: ${({ theme }) => `0px ${theme.spacing.s3}`};
  }
`;

export const Soon = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.peach};
    padding: 2px 4px;
    border-radius: ${theme.borderRadius.r1};
  `}

  position: absolute;
  top: -3px;
  right: 15px;
  font-size: 10px;
  line-height: 17px;
  font-weight: 600;
  color: #fff;

  @media (max-width: 800px) {
    top: -4px;
    right: 0px;
  }
`;
