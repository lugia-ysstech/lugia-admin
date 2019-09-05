import Personal from "../portal/pages/personal";
import Form from "../portal/pages/form";
import Detail from "../portal/pages/detail";
import Result from "../portal/pages/result.lugiad";
import List from "../portal/pages/list";

export default [
  {
    value: "/Dashboard",
    text: "Dashboard",
    icon: "lugia-icon-financial_sad",
    children: [
      {
        value: "/Dashboard/analyse",
        text: "分析页",
        render: () => import("../portal/pages/Dashboard/analyse")
      },
      {
        value: "/Dashboard/monitor",
        text: "监控页",
        render: () => import("../portal/pages/Dashboard/monitor")
      },
      {
        value: "/Dashboard/desk",
        text: "工作台",
        render: () => import("../portal/pages/Dashboard/desk")
      }
    ]
  },
  {
    value: "/user",
    text: "用户管理",
    icon: "lugia-icon-financial_user",
    render: () => import("../portal/pages/user")
  },
  {
    value: "/form",
    text: "表单页",
    icon: "lugia-icon-financial_editor",
    component: Form
  },
  {
    value: "/list",
    text: "列表页",
    icon: "lugia-icon-financial_table",
    children: [
      {
        value: "/list/table-list",
        text: "查询表格",
        render: () => import("../portal/pages/list/table-list")
      },
      {
        value: "/list/basic-list",
        text: "标准列表",
        render: () => import("../portal/pages/list/basic-list")
      },
      {
        value: "/list/card-list",
        text: "卡片列表",
        render: () => import("../portal/pages/list/card-list")
      }
    ]
  },
  {
    value: "/detail",
    text: "详情页",
    icon: "lugia-icon-financial_sad_o",
    component: Detail
  },
  {
    value: "/result",
    text: "结果页",
    icon: "lugia-icon-reminder_check_circle_o",
    component: Result
  },
  {
    value: "/abnormal",
    text: "异常页",
    icon: "lugia-icon-reminder_warning",
    children: [
      {
        value: "/abnormal/403",
        text: "403",
        render: () => import("../portal/components/abnormal/403")
      },
      {
        value: "/abnormal/404",
        text: "404",
        render: () => import("../portal/components/abnormal/404")
      },
      {
        value: "/abnormal/500",
        text: "500",
        render: () => import("../portal/components/abnormal/500")
      }
    ]
  },
  {
    value: "/personal",
    text: "个人页",
    icon: "lugia-icon-financial_user",
    component: Personal
  }
];
