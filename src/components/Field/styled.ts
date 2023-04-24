import styled, { css } from 'styled-components';

export const Action = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.main};
    padding-left: ${theme.spacing.s6};
    padding-right: ${theme.spacing.s6};
    border-radius: 0px ${theme.borderRadius.r1} ${theme.borderRadius.r1} 0px;

    &:hover {
      background: ${theme.colors.purple};
    }
  `};

  transition: all 0.2s;
  cursor: pointer;
  height: 100%;
  color: #fff;
  outline: none;
  border: none;
  font-size: 16px;
  font-weight: 600;

  @media (max-width: 800px) {
    margin: auto;
    font-size: 14px;
  }
`;

export const TextField = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.borderRadius.r1};
  `};

  align-items: center;
  display: flex;
  width: fit-content;
  height: 44px;

  @media (max-width: 800px) {
    margin: auto;
  }
`;

export const Input = styled.input`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.main};
    border-radius: ${theme.borderRadius.r1} 0px 0px ${theme.borderRadius.r1};
    padding: 0px 0px 0px ${theme.spacing.s4};
  `};

  box-sizing: border-box;
  height: 100%;
  outline: none;
  width: 250px;
  font-size: 16px;

  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 800px) {
    font-size: 14px;
  }
`;
