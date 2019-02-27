
import React from 'react';
import Abnormal from "./pages/abnormal";
import Personal from "./pages/personal";
import Form from "./pages/form";
import Detail from "./pages/detail";
import Result from "./pages/result";
import List from "./pages/list";


export default [
  {
    value: "Dashboard",
    text: "Dashboard",
    icon: "lugia-icon-financial_sad",
    children: [
      {
        value: "/pages/analyse",
        text: "分析页",
        path:'./pages/Dashboard/analyse',
      },
      {
        value: "/pages/monitor",
        text: "监控页",
        path:'./pages/Dashboard/monitor',
      },
      {
        value: "/pages/desk",
        text: "工作台",
        path:'./pages/Dashboard/desk',
      }
    ]
  },
  { value: "/pages/user", text: "用户管理", icon: "lugia-icon-financial_user", path:'./pages/user', },
  { value: "/pages/form", text: "表单页", icon: "lugia-icon-financial_editor", component: Form },
  { value: "/pages/list", text: "列表页", icon: "lugia-icon-financial_table" ,component: List},
  { value: "/pages/detail", text: "详情页", icon: "lugia-icon-financial_sad_o" ,component: Detail},
  {
    value: "/pages/result",
    text: "结果页",
    icon: "lugia-icon-reminder_check_circle_o",
    component: Result
  },
  { value: "/pages/abnormal", text: "异常页", icon: "lugia-icon-reminder_warning" , component: Abnormal},
  { value: "/pages/personal", text: "个人页", icon: "lugia-icon-financial_user" ,component: Personal}
];

