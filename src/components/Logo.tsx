import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div`
  font-weight: 600;
  font-size: 24px;

  span {
    color: ${({ theme }) => theme.colors.main};
  }
`;

export const Logo = () => (
  <StyledLogo>
    Revue<span>Dex</span>
  </StyledLogo>
);
