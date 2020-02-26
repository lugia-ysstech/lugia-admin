/**
 *
 * @flow
 */
import lugiax from '@lugia/lugiax';
import React from 'react';

const model = 'application';
const state = {
  applicationInfo: [],

};
export default lugiax.register({
  model,
  state,
  mutations: {
    sync: {
    },
    async: {
      async getApplicationInfo (state, inParam,{mutations,}){
        const result  = await fetch('/api/personal/getApplicationInfo',{method: 'POST',}).then(res => (res.json())).then(res => {
          return res;
        });

        return state.set('applicationInfo', result);

      },
    },
  },
});
