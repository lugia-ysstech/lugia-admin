/**
 *  create by szfeng
 * @flow
 */
import lugiax from '@lugia/lugiax';
import React from 'react';

const model = 'analyse';
const state = {
  headerInfo: {},
  intervalData: [],
  secInfo: {},
  interactData: [],
};

export default lugiax.register({
  model,
  state,
  mutations: {
    async: {
      async getHeaderInfo(state, inParam, { mutations }) {
        const result = await fetch('/api/dashboard/headerInfo', {
          method: 'POST',
        })
          .then(res => res.json())
          .then(res => {
            return res;
          });
        return state.set('headerInfo', result);
      },

      async getContentInfo(state, inParam, { mutations }) {
        const result = await fetch('/api/dashboard/contentInfo', {
          method: 'POST',
        })
          .then(res => res.json())
          .then(res => {
            return res;
          });
        return state.set('intervalData', result.intervalData);
      },

      async getSecInfo(state, inParam, { mutations }) {
        const result = await fetch('/api/dashboard/secInfo', {
          method: 'POST',
        })
          .then(res => res.json())
          .then(res => {
            return res;
          });
        return state.set('secInfo', result);
      },

      async getFooterInfo(state, inParam, { mutations }) {
        const result = await fetch('/api/dashboard/footerInfo', {
          method: 'POST',
        })
          .then(res => res.json())
          .then(res => {
            return res;
          });
        return state.set('interactData', result.interactData);
      },
    },
  },
});
