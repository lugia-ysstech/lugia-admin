/**
 *
 * @flow
 */
import lugiax from '@lugia/lugiax';
import React from 'react';

const model = 'registerSuccess';
const state = {
  userInfo:{}  ,

};
export default lugiax.register({
  model,
  state,
  mutations: {
    sync: {
    },
    async: {
      async getUserInfo (state, inParam,{mutations,}){
        const result  = await fetch('/api/personal/userInfo',{method: 'POST',}).then(res => (res.json())).then(res => {
          return res;
        });
        return state.set('userInfo', result);
      },
    },
  },
});
