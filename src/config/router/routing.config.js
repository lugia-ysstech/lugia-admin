export const topNav = false;

export default [
  {
    id: 'analyse',
    value: '/dashboard/analyse',
    text: '分析页',
    render: () => import('../../pages/dashboard/analyse'),
  },
  {
    id: 'basic-form',
    value: '/form/basic-form',
    text: '基础表单',
    render: () => import('../../pages/form/basic'),
  },
  {
    id: 'step-form',
    value: '/form/step-form',
    text: '分步表单',
    render: () => import('../../pages/form/step'),
  },
  {
    id: 'advanced-form',
    value: '/form/advanced-form',
    text: '高级表单',
    render: () => import('../../pages/form/advanced'),
  },

  {
    id: 'table-list',
    value: '/list/table-list',
    text: '查询表格',
    render: () => import('../../pages/list/table-list'),
  },

  // {
  //   id: 'card-list',
  //   value: '/list/card-list',
  //   text: '卡片列表',
  //   render: () => import('../../../portal/pages/list/card-list'),
  // },

  {
    id: 'basic-detail',
    value: '/detail/basic-detail',
    text: '基础详情页',
    render: () => import('../../pages/detail/basic'),
  },
  {
    id: 'advanced-detail',
    value: '/detail/advanced-detail',
    text: '高级详情页',
    render: () => import('../../pages/detail/advanced'),
  },

  {
    id: 'success',
    value: '/result/success',
    text: '成功页',
    render: () => import('../../pages/result/success'),
  },
  {
    id: 'failed',
    value: '/result/failed',
    text: '失败页',
    render: () => import('../../pages/result/failed'),
  },

  {
    id: '403',
    value: '/abnormal/403',
    text: '403',
    render: () => import('../../pages/abnormal/403'),
  },
  {
    id: '404',
    value: '/abnormal/404',
    text: '404',
    render: () => import('../../pages/abnormal/404'),
  },
  {
    id: '500',
    value: '/abnormal/500',
    text: '500',
    render: () => import('../../pages/abnormal/500'),
  },
  // {
  //   id: 'settings',
  //   value: '/personal/settings',
  //   text: '个人设置',
  //   render: () => import('../../../portal/pages/personal/settings'),
  // },

  {
    id: 'mobilePanel',
    value: '/mobilePanel',
    text: '移动板块',
    render: () => import('../../pages/mobilePanel/mobilePanel'),
  },
];
