/**
 *
 * @flow
 */
import lugiax from '@lugia/lugiax';
import React from 'react';

const model = 'center';
const state = {
  projectInfo: [],
};
export default lugiax.register({
  model,
  state,
  mutations: {
    sync: {},
    async: {
      async getProjectInfo(state, inParam, { mutations, }) {
        const result = await fetch('/api/personal/getProjectInfo', { method: 'POST', })
          .then(res => res.json())
          .then(res => {
            return res;
          });

        return state.set('projectInfo', result);
      },
    },
  },
});
