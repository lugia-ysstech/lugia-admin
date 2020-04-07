export const topNav = false;
export default [
  {
    id: 'analyse',
    value: '/dashboard/analyse',
    render: () => import('../portal/pages/dashboard/analyse'),
  },

  {
    id: 'basic-form',
    value: '/form/basic-form',
    render: () => import('../portal/pages/form/basic'),
  },
  {
    id: 'step-form',
    value: '/form/step-form',
    render: () => import('../portal/pages/form/step'),
  },
  {
    id: 'advanced-form',
    value: '/form/advanced-form',
    render: () => import('../portal/pages/form/advanced'),
  },

  {
    id: 'table-list',
    value: '/list/table-list',
    render: () => import('../portal/pages/list/table-list'),
  },

  {
    id: 'card-list',
    value: '/list/card-list',
    render: () => import('../portal/pages/list/card-list'),
  },

  {
    id: 'basic-detail',
    value: '/detail/basic-detail',
    render: () => import('../portal/pages/detail/basic'),
  },
  {
    id: 'advanced-detail',
    value: '/detail/advanced-detail',
    render: () => import('../portal/pages/detail/advanced'),
  },

  {
    id: 'success',
    value: '/result/success',
    render: () => import('../portal/pages/result/success'),
  },
  {
    id: 'failed',
    value: '/result/failed',
    render: () => import('../portal/pages/result/failed'),
  },

  {
    id: '403',
    value: '/abnormal/403',
    render: () => import('../portal/pages/abnormal/403'),
  },
  {
    id: '404',
    value: '/abnormal/404',
    render: () => import('../portal/pages/abnormal/404'),
  },
  {
    id: '500',
    value: '/abnormal/500',
    render: () => import('../portal/pages/abnormal/500'),
  },

  {
    id: 'center',
    value: '/personal/center',
    render: () => import('../portal/pages/personal/center'),
  },
  {
    id: 'settings',
    value: '/personal/settings',
    render: () => import('../portal/pages/personal/settings'),
  },

  {
    id: 'mobilePanel',
    value: '/mobilePanel',
    render: () => import('../portal/pages/mobilePanel/mobilePanel'),
  },
];
