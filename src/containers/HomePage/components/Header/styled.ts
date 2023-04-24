import styled, { css } from 'styled-components';
import mainImage from './images/main.png';

export const Header = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    padding-top: ${theme.spacing.s6};
    padding-bottom: ${theme.spacing.s25};
  `}
`;

export const TopPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.s10};
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

export const MenuItem = styled.li`
  cursor: pointer;
  margin-left: ${({ theme }) => theme.spacing.s8};
  font-weight: 600;
  font-size: 16px;
  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.main};
  }
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 44px;
  margin-top: 0px;
  margin-bottom: ${({ theme }) => theme.spacing.s5};
`;

export const Subtitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
    margin-bottom: ${theme.spacing.s10};
  `}
  font-weight: 400;
  font-size: 18px;
  max-width: 450px;
  line-height: 25px;
`;

export const Image = styled.img.attrs({
  src: mainImage,
})`
  margin-right: -${({ theme }) => theme.spacing.s10};
  width: 600px;
  height: 400px;
`;

export const CentralPanel = styled.div`
  display: flex;
  align-items: center;
`;
