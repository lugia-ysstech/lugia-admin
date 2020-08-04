import Iframe from '../../portal/components/iframe';

export default [
  {
    id: 'innerBaidu',
    value: '/www.baidu.com',
    text: '内部跳转百度',
    innerLink: true,
    component: Iframe,
  },
  {
    id: 'outBaidu',
    value: '/lugia.tech',
    text: '跳转到Lugia官网',
    innerLink: false,
    component: Iframe,
  },
];
