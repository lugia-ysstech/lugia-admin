const getRouteDataInfo = () => {
  const routeData = [
    {
      id: '1',
      value: '/dashboard',
      text: 'Dashboard',
      icon: 'lugia-icon-financial_monitoring',
      children: [
        {
          id: '1-1',
          value: '/dashboard/analyse',
          text: '分析页',
          render: () => import('../src/pages/dashboard/analyse'),
        },
      ],
    },
    {
      id: '2',
      value: '/form',
      text: '表单页',
      icon: 'lugia-icon-financial_editor',
      children: [
        {
          id: '2-1',
          value: '/form/basic-form',
          text: '基础表单',
          render: () => import('../src/pages/form/basic'),
        },
        {
          id: '2-2',
          value: '/form/step-form',
          text: '分步表单',
          render: () => import('../src/pages/form/step'),
        },
        {
          id: '2-3',
          value: '/form/advanced-form',
          text: '高级表单',
          render: () => import('../src/pages/form/advanced'),
        },
      ],
    },
    {
      id: '3',
      value: '/list',
      text: '列表页',
      icon: 'lugia-icon-financial_table',
      children: [
        {
          id: '3-1',
          value: '/list/table-list',
          text: '查询表格',
          render: () => import('../src/pages/list/table-list'),
        },
        // {
        //   id: '3-2',
        //   value: '/list/basic-list',
        //   text: '标准列表',
        //   render: () => import('../portal/pages/list/basic-list'),
        // },
        // {
        //   id: '3-3',
        //   value: '/list/card-list',
        //   text: '卡片列表',
        //   render: () => import('../portal/pages/list/card-list'),
        // },
      ],
    },
    {
      id: '4',
      value: '/detail',
      text: '详情页',
      icon: 'lugia-icon-financial_questionnaire',
      children: [
        {
          id: '4-1',

          value: '/detail/basic-detail',
          text: '基础详情页',
          render: () => import('../src/pages/detail/basic'),
        },
        {
          id: '4-2',

          value: '/detail/advanced-detail',
          text: '高级详情页',
          render: () => import('../src/pages/detail/advanced'),
        },
      ],
    },
    {
      id: '5',
      value: '/result',
      text: '结果页',
      icon: 'lugia-icon-reminder_check_circle_o',
      children: [
        {
          id: '5-1',

          value: '/result/success',
          text: '成功页',
          render: () => import('../src/pages/result/success'),
        },
        {
          id: '5-2',

          value: '/result/failed',
          text: '失败页',
          render: () => import('../src/pages/result/failed'),
        },
      ],
    },
    {
      id: '6',
      value: '/abnormal',
      text: '异常页',
      icon: 'lugia-icon-reminder_warning',
      children: [
        {
          id: '6-1',

          value: '/abnormal/403',
          text: '403',
          render: () => import('../src/pages/abnormal/403'),
        },
        {
          id: '6-2',

          value: '/abnormal/404',
          text: '404',
          render: () => import('../src/pages/abnormal/404'),
        },
        {
          id: '6-3',

          value: '/abnormal/500',
          text: '500',
          render: () => import('../src/pages/abnormal/500'),
        },
      ],
    },
    {
      id: '7',
      value: '/personal',
      text: '个人页',
      icon: 'lugia-icon-financial_user',
      children: [
        // {
        //   id: '7-2',
        //   value: '/personal/settings',
        //   text: '个人设置',
        //   render: () => import('../portal/pages/personal/settings'),
        // },
      ],
    },

    {
      id: '8',
      value: '/mobilePanel',
      text: '移动板块',
      icon: 'lugia-icon-logo_windows_o',
      render: () => import('../src/pages/mobilePanel/mobilePanel'),
    },
  ];

  return { routeData, };
};

const getUserAccessIdsAndApiUrlsInfo = () => {
  const accessIds = ['1', '2', '4', '5', '6', '7', '8',];
  const apiUrls = [];
  return {
    accessIds,
    apiUrls,
  };
};

export default {
  'POST /api/routeMock': function(req, res) {
    res.json(getRouteDataInfo());
  },
  'POST /api/userAccessIdsAndApiUrls': function(req, res) {
    res.json(getUserAccessIdsAndApiUrlsInfo());
  },
};
