/**
 *
 * create by liangguodong
 *
 * @flow
 */
import lugiax from '@lugia/lugiax';
import React from 'react';

const model = 'setting';
const state = {
  userInfo: {},
};
export default lugiax.register({
  model,
  state,
  mutations: {
    sync: {
      pathChange(state, inParam) {
        const { newValue } = inParam;
        return state.setIn(['userInfo', 'path'], newValue);
      },
    },
    async: {
      async getUserInfo(state, inParam, { mutations }) {
        const result = await fetch('/api/personal/userInfo', { method: 'POST' })
          .then(res => res.json())
          .then(res => {
            return res;
          });
        return state.set('userInfo', result);
      },
    },
  },
});
