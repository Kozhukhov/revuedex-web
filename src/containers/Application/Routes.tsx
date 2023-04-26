import React, { Suspense } from 'react';
import { Route, Routes as BaseRoutes } from 'react-router-dom';
import { HomePage } from 'containers/HomePage';
import { PageUrl } from 'appConstants';

export const Routes = () => {
  return (
    <BaseRoutes>
      <Route path={PageUrl.HOME_PAGE} element={<HomePage />} />
    </BaseRoutes>
  );
};
