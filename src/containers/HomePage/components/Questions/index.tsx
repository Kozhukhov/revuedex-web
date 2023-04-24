import React from 'react';
import { BlockTitle } from 'components/Titles';
import * as Styled from './styled';
import { QuestionsConfig } from './constants';

export const Questions = () => {
  return (
    <Styled.Questions>
      <BlockTitle>
        Got Questions? Check Out Our FAQs
      </BlockTitle>
      <Styled.Wrapper>
        {QuestionsConfig.map(({ id, question, answer }) => (
          <Styled.Block key={id}>
            <Styled.Question>{question}</Styled.Question>
            <Styled.Answer>{answer}</Styled.Answer>
          </Styled.Block>
        ))}
      </Styled.Wrapper>
    </Styled.Questions>
  );
};
