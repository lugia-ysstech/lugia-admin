import { Redirect } from '@lugia/lugiax-router/target/lib';
import React from 'react';
import routingConfig from './routing.config';

const getRouter  = (routingConfig,routes) => {
  const rout = routes || {};
  routingConfig.forEach( item => {
    const {component,value,path} = item;
    if(component){
      rout[value] = {
        // exact: true,
        component: component
      };
    }else if(path){
      rout[value] = {
        // exact: true,
        render: () => import(`${path}`),
      };
    }else{
      const {children} = item;
      if(children){
        return getRouter (children,rout);
      }
    }
  });
  return rout;

};
export default  {
  '/pages': {
    render:  async () => import('./pages/user'),
    exact: true,
  },
  ...getRouter(routingConfig),
  '/pages/404': {
    render: async () => import('./components/404'),
  },
  '/pages/403': {
    render: async () => import('./components/abnormal/403'),
  },
  '/pages/500': {
    render: async () => import('./components/abnormal/500'),
  },
  NotFound: {
    isHidden: true,
    render: async () => {
      return  () => <Redirect
        to={{
          pathname: '/pages/404',
        }}
      />;
    },
  }
};
