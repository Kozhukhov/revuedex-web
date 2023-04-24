import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'store';
import { companySelector } from 'containers/Application/selectors';
import {
  setCompany as setCompanyAction,
  startSearchProcess as startSearchProcessAction,
} from 'containers/Application/actions';
import { TextField } from 'components/Field';
import * as Styled from './styled';
import mainImage from './images/main.png';

export const Promo = () => {
  const dispatch = useDispatch();

  const company = useSelector(companySelector);

  const action = useCallback(() => {
    dispatch(startSearchProcessAction());
  }, []);

  const setValue = useCallback((value: string) => {
    dispatch(setCompanyAction(value));
  }, []);

  return (
    <Styled.Promo>
      <img src={mainImage} alt="free" />
      <Styled.Wrapper>
        <Styled.Title>Try It Free</Styled.Title>
        <Styled.Content>
          Gain valuable insights from reviews on top platforms like g2crowd,
          capterra, gartner, and more. Try it today and make informed decisions
          based on customer feedback.
        </Styled.Content>
        <TextField
          value={company}
          setValue={setValue}
          actionLabel="Try it free"
          action={action}
          placeholder="Company Name"
        />
      </Styled.Wrapper>
    </Styled.Promo>
  );
};
