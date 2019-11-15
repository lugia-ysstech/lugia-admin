export default [
  {
    value: "/dashboard",
    text: "Dashboard",
    icon: "lugia-icon-financial_sad",
    children: [
      {
        value: "/dashboard/analyse",
        text: "分析页",
        render: () => import("../portal/pages/dashboard/analyse")
      },
      // {
      //   value: "/dashboard/monitor",
      //   text: "监控页",
      //   render: () => import("../portal/pages/dashboard/monitor")
      // },
      // {
      //   value: "/dashboard/desk",
      //   text: "工作台",
      //   render: () => import("../portal/pages/dashboard/desk")
      // }
    ]
  },
  {
    value: "/form",
    text: "表单页",
    icon: "lugia-icon-financial_editor",
    children: [
      {
        value: "/form/basic-form",
        text: "基础表单",
        render: () => import("../portal/pages/form/basic")
      },
      {
        value: "/form/step-form",
        text: "分步表单",
        render: () => import("../portal/pages/form/step")
      },
      {
        value: "/form/advanced-form",
        text: "高级表单",
        render: () => import("../portal/pages/form/advanced")
      }
    ]
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
      },
      // {
      //   value: "/list/search",
      //   text: "搜索列表",
      //   children: [
      //     {
      //       value: "/list/search/article",
      //       text: "文章列表",
      //       render: () => import("../portal/pages/list/article")
      //     },
      //     {
      //       value: "/list/search/projects",
      //       text: "项目列表",
      //       render: () => import("../portal/pages/list/projects")
      //     },
      //     {
      //       value: "/list/search/applications",
      //       text: "应用列表",
      //       render: () => import("../portal/pages/list/applications")
      //     }
      //   ]
      // }
    ]
  },
  {
    value: "/detail",
    text: "详情页",
    icon: "lugia-icon-financial_sad_o",
    children: [
      {
        value: "/detail/basic-detail",
        text: "基础详情页",
        render: () => import("../portal/pages/detail/basic")
      },
      {
        value: "/detail/advanced-detail",
        text: "高级详情页",
        render: () => import("../portal/pages/detail/advanced")
      }
    ]
  },
  {
    value: "/result",
    text: "结果页",
    icon: "lugia-icon-reminder_check_circle_o",
    children: [
      {
        value: "/result/success",
        text: "成功页",
        render: () => import("../portal/pages/result/success")
      },
      {
        value: "/result/failed",
        text: "失败页",
        render: () => import("../portal/pages/result/failed")
      }
    ]
  },
  {
    value: "/abnormal",
    text: "异常页",
    icon: "lugia-icon-reminder_warning",
    children: [
      {
        value: "/abnormal/403",
        text: "403",
        render: () => import("../portal/pages/abnormal/403")
      },
      {
        value: "/abnormal/404",
        text: "404",
        render: () => import("../portal/pages/abnormal/404")
      },
      {
        value: "/abnormal/500",
        text: "500",
        render: () => import("../portal/pages/abnormal/500")
      }
    ]
  },
  {
    value: "/personal",
    text: "个人页",
    icon: "lugia-icon-financial_user",
    children: [
      {
        value: "/personal/center",
        text: "个人中心",
        render: () => import("../portal/pages/personal/center")
      },
      {
        value: "/personal/settings",
        text: "个人设置",
        render: () => import("../portal/pages/personal/settings")
      }
    ]
  },
  // {
  //   value: "/user",
  //   text: "用户管理",
  //   icon: "lugia-icon-financial_user",
  //   render: () => import("../portal/pages/user")
  // },
];
