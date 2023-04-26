import React, { useCallback, useState } from 'react';
import { Layout } from 'components/Layout';
import { Logo } from 'components/Logo';
import { TextField } from 'components/Field';
import { useDispatch, useSelector } from 'store';
import { companySelector } from 'containers/Application/selectors';
import {
  setCompany as setCompanyAction,
  startSearchProcess as startSearchProcessAction,
} from 'containers/Application/actions';
import * as Styled from './styled';
import { Menu } from './constants';
import closeIcon from './images/close.svg';
import hamburgerIcon from './images/hamburger.svg';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dispatch = useDispatch();

  const company = useSelector(companySelector);

  const action = useCallback(() => {
    dispatch(startSearchProcessAction());
  }, []);

  const setValue = useCallback((value: string) => {
    dispatch(setCompanyAction(value));
  }, []);

  return (
    <Styled.Header>
      <Layout>
        <Styled.TopPanel>
          <Logo />
          <Styled.Hamburger
            src={hamburgerIcon}
            alt="menu"
            onClick={() => setIsMenuOpen(true)}
          />
          <Styled.Menu $isMenuOpen={isMenuOpen}>
            <Styled.Close src={closeIcon} alt="close" onClick={() => setIsMenuOpen(false)} />
            {Menu.map(({ key, label }) => (
              <Styled.MenuItem key={key}>{label}</Styled.MenuItem>
            ))}
          </Styled.Menu>
        </Styled.TopPanel>
        <Styled.CentralPanel>
          <div>
            <Styled.Title>
              Get Valuable Insights from Reviews with AI TT
            </Styled.Title>
            <Styled.Subtitle>
              Get the inside scoop on products and services with our expert
              review analysis across the top platforms. Say goodbye to the noise
              and hello to the main points!
            </Styled.Subtitle>
            <TextField
              value={company}
              setValue={setValue}
              actionLabel="Collect"
              action={action}
              placeholder="Company Name"
            />
          </div>
          <Styled.Image />
        </Styled.CentralPanel>
      </Layout>
    </Styled.Header>
  );
};
