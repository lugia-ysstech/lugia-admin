import React from 'react';
import {createRoute, Redirect} from '@lugia/lugiax-router';
import Pages from './portal/pages';

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
  return <React.Fragment>{createRoute(firstRouter)}</React.Fragment>;
};
