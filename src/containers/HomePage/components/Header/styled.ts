import styled, { css } from 'styled-components';
import mainImage from './images/main.png';

interface MenuProps {
  $isMenuOpen: boolean;
}

export const Header = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    padding-top: ${theme.spacing.s6};
    padding-bottom: ${theme.spacing.s25};

    @media (max-width: 800px) {
      padding-top: ${theme.spacing.s5};
    }
  `}
`;

export const TopPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.s10};
`;

export const Menu = styled.ul<MenuProps>`
  display: flex;
  list-style: none;
  position: relative;

  @media (max-width: 800px) {
    background: #fff;
    flex-direction: column;
    gap: 8px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: ${({ theme }) =>
      `${theme.spacing.s6} ${theme.spacing.s15} ${theme.spacing.s6} ${theme.spacing.s6}`};
    position: absolute;
    top: 2px;
    right: 13px;
    transition: all 0.2s;
    opacity: ${({ $isMenuOpen }) => ($isMenuOpen ? '1' : '0')};
    pointer-events: ${({ $isMenuOpen }) => ($isMenuOpen ? 'auto' : 'none')};
  }
`;

export const Close = styled.img`
  display: none;

  @media (max-width: 800px) {
    display: block;
    width: 15px;
    height: 15px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
`;

export const Hamburger = styled.img`
  display: none;

  @media (max-width: 800px) {
    display: block;
    cursor: pointer;
    width: 20px;
    height: 20px;
  }
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

  @media (max-width: 800px) {
    margin-left: 0px;
  }
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 44px;
  margin-top: 0px;
  margin-bottom: ${({ theme }) => theme.spacing.s5};

  @media (max-width: 800px) {
    font-size: 32px;
    text-align: center;
  }
`;

export const Subtitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
    margin-bottom: ${theme.spacing.s10};

    @media (max-width: 800px) {
      text-align: center;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: ${theme.spacing.s5};
    }
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
  max-width: 600px;
  width: 50%;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const CentralPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
