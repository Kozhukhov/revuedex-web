import React from 'react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { history } from 'containers/Router/history';
import { Routes } from './Routes';

export const Application = () => {
  return (
    // @ts-ignore
    <HistoryRouter history={history}>
      <Routes />
    </HistoryRouter>
  );
};
