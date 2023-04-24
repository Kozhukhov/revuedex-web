import React from 'react';
import { BlockTitle } from 'components/Titles';
import * as Styled from './styled';
import { StepsConfig } from './constants';

export const HowItWorks = () => {
  return (
    <Styled.HowItWorks>
      <BlockTitle>How does it work?</BlockTitle>
      <Styled.Steps>
        {StepsConfig.map(({ id, image, title, content }) => (
          <Styled.Step key={id}>
            <img src={image} alt={id} />
            <div>
              <Styled.Title>{title}</Styled.Title>
              <Styled.Content>{content}</Styled.Content>
            </div>
          </Styled.Step>
        ))}
      </Styled.Steps>
    </Styled.HowItWorks>
  );
};
