import styled, { css } from 'styled-components';

export const Partners = styled.div`
  height: 125px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-top: -62px;
  background: #fff;
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
`;

export const Partner = styled.div`
  position: relative;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Soon = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.peach};
    padding: ${theme.spacing.s1} ${theme.spacing.s2};
    border-radius: ${theme.borderRadius.r1};
  `}

  position: absolute;
  top: -13px;
  right: -20px;
  font-size: 13px;
  line-height: 17px;
  font-weight: 600;
  color: #fff;
`;
