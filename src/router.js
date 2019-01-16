import { Redirect } from '@lugia/lugiax-router/target/lib';
import React from 'react';
import menuData from './menu'

const getMenuRouter = (menuData,routes) => {
  const rout = routes || {};
  menuData.forEach( item => {
    const {component,value,path} = item;
    if(component){
      rout[value] = {
        exact: true,
        component: component
      };
    }else if(path){
      rout[value] = {
        exact: true,
        render: () => import(`${path}`),
      };
    }else{
      const {children} = item;
      if(children){
        return getMenuRouter(children,rout);
      }
    }
  });
  return rout;

};
export default  {
  '/': {
    exact: true,
    render: async () => {
      return  () => <Redirect
        to={{
          pathname: '/analyse',
        }}
      />;
    },
  },
  ...getMenuRouter(menuData),
  '/404': {
    exact: true,
    render: async () => import('./components/404'),
  },
  NotFound: {
    isHidden: true,
    render: async () => {
      return  () => <Redirect
        to={{
          pathname: '/404',
        }}
      />;
    },
  }
};
