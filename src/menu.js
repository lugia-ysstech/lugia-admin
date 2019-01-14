import { Redirect } from '@lugia/lugiax-router/target/lib';
import React from 'react';

import Abnormal from "./pages/abnormal";
import Personal from "./pages/personal";
import Form from "./pages/form";
import Detail from "./pages/detail";
import Result from "./pages/result";
import List from "./pages/list";

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


const menuData = [
  {
    value: "Dashboard",
    text: "Dashboard",
    icon: "lugia-icon-financial_sad",
    children: [
      {
        value: "/analyse",
        text: "分析页",
        path:'./pages/Dashboard/analyse',
      },
      {
        value: "/monitor",
        text: "监控页",
        path:'./pages/Dashboard/monitor',
      },
      {
        value: "/desk",
        text: "工作台",
        path:'./pages/Dashboard/desk',
      }
    ]
  },
  { value: "/user", text: "用户管理", icon: "lugia-icon-financial_user", path:'./pages/user', },
  { value: "/form", text: "表单页", icon: "lugia-icon-financial_editor", component: Form },
  { value: "/list", text: "列表页", icon: "lugia-icon-financial_table" ,component: List},
  { value: "/detail", text: "详情页", icon: "lugia-icon-financial_sad_o" ,component: Detail},
  {
    value: "/result",
    text: "结果页",
    icon: "lugia-icon-reminder_check_circle_o",
    component: Result
  },
  { value: "/abnormal", text: "异常页", icon: "lugia-icon-reminder_warning" , component: Abnormal},
  { value: "/personal", text: "个人页", icon: "lugia-icon-financial_user" ,component: Personal}
];

const router = {
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

export default  {menuData,router};
