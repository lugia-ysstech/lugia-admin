export default [
  {
    value: '/dashboard/analyse',
    render: () => import('../portal/pages/dashboard/analyse'),
  },

  {
    value: '/form/basic-form',
    render: () => import('../portal/pages/form/basic'),
  },
  {
    value: '/form/step-form',
    render: () => import('../portal/pages/form/step'),
  },
  {
    value: '/form/advanced-form',
    render: () => import('../portal/pages/form/advanced'),
  },

  {
    value: '/list/table-list',
    render: () => import('../portal/pages/list/table-list'),
  },

  {
    value: '/list/card-list',
    render: () => import('../portal/pages/list/card-list'),
  },

  {
    value: '/detail/basic-detail',
    render: () => import('../portal/pages/detail/basic'),
  },
  {
    value: '/detail/advanced-detail',
    render: () => import('../portal/pages/detail/advanced'),
  },

  {
    value: '/result/success',
    render: () => import('../portal/pages/result/success'),
  },
  {
    value: '/result/failed',
    render: () => import('../portal/pages/result/failed'),
  },

  {
    value: '/abnormal/403',
    render: () => import('../portal/pages/abnormal/403'),
  },
  {
    value: '/abnormal/404',
    render: () => import('../portal/pages/abnormal/404'),
  },
  {
    value: '/abnormal/500',
    render: () => import('../portal/pages/abnormal/500'),
  },

  {
    value: '/personal/center',
    render: () => import('../portal/pages/personal/center'),
  },
  {
    value: '/personal/settings',
    render: () => import('../portal/pages/personal/settings'),
  },

  {
    value: '/mobilePanel',
    render: () => import('../portal/pages/mobilePanel/mobilePanel'),
  },
];
