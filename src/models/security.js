/**
 *
 * create by ligx
 *
 * @flow
 */

import lugiax from '@lugia/lugiax';

const state = {
  loginName: '',
  userName: '',
  token: '',
  allRouteData: [],
  routeData: [],
  userMenus: [],
  accessIds: [11, 12, 23],
  apiUrls: [],
  powerList: ['apply', 'delete', ''], // 功能权限
};

const security = lugiax.register({
  model: 'security',
  state,
  mutations: {
    sync: {
      setAllRouteData(state, routeData) {
        return state.set('allRouteData', routeData);
      },

      setRouteData(state, routeData) {
        return state.set('routeData', routeData);
      },
    },

    async: {
      setMenus() {},
      login() {},
    },
  },
});

export function isLogin() {
  return true;
}

export function canAccess(url) {
  return true;
}

export default security;
