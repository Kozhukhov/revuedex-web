import React from 'react';
import * as Styled from './styled';
import { PartnersConfig } from './constants';

export const Partners = () => {
  return (
    <Styled.Partners>
      {PartnersConfig.map(({ id, image, isActive }) => (
        <Styled.Partner key={id} >
          <img src={image} alt={id} />
          {!isActive && <Styled.Soon>soon</Styled.Soon>}
        </Styled.Partner>
      ))}
    </Styled.Partners>
  );
};
