import React from 'react';
import { createRoute, Redirect } from '@lugia/lugiax-router';
import { Theme } from '@lugia/lugia-web';
import { load } from '@lugia/lugia-web/dist/css/theme-common-dict';
import Pages from './portal/pages';
import PublicValue from './config/theme/theme.config';

export const firstRouter = {
  '/register/register': {
    exact: true,
    render: async () => import('./portal/pages/register/register'),
  },
  '/register/registerSuccess': {
    exact: true,
    render: async () => import('./portal/pages/register/registerSuccess'),
  },
  '/login': {
    exact: true,
    render: async () => import('./portal/pages/login'),
  },
  '/404': {
    render: async () => import('./portal/components/abnormal/404'),
  },
  '/': {
    // exact: true,
    component: Pages,
    verify() {
      return true;
    },
  },
  NotFound: {
    isHidden: true,
    render: async () => {
      return () => (
        <Redirect
          to={{
            pathname: '/404',
          }}
        />
      );
    },
  },
};

export default () => {
  const { publicValue, theme: { widgetDefaultTheme = {} } = {} } = PublicValue;
  publicValue && load(publicValue);

  return (
    <React.Fragment>
      <Theme config={widgetDefaultTheme}>{createRoute(firstRouter)}</Theme>
    </React.Fragment>
  );
};
