/**
 *
 * @flow
 */
import lugiax from '@lugia/lugiax';
import React from 'react';

const model = 'center';
const state = {
  userInfo:{}  ,
  articleInfo: [],
  projectInfo: [],
  applicationInfo: [],

};
export default lugiax.register({
  model,
  state,
  mutations: {
    sync: {
    },
    async: {
      async getUserInfo (state, inParam,{mutations}){
        const result  = await fetch('/api/personal/userInfo',{method: 'POST'}).then(res => (res.json())).then(res => {
          return res;
        });
        return state.set('userInfo', result);
      },
      async getArticleInfo (state, inParam,{mutations}){
        const result  = await fetch('/api/personal/getArticleInfo',{method: 'POST'}).then(res => (res.json())).then(res => {
          return res;
        });

        return state.set('articleInfo', result);

      },
      async getApplicationInfo (state, inParam,{mutations}){
        const result  = await fetch('/api/personal/getApplicationInfo',{method: 'POST'}).then(res => (res.json())).then(res => {
          return res;
        });

        return state.set('applicationInfo', result);

      },
      async getProjectInfo (state, inParam,{mutations}){
        const result  = await fetch('/api/personal/getProjectInfo',{method: 'POST'}).then(res => (res.json())).then(res => {
          return res;
        });

        return state.set('projectInfo', result);

      },
    },
  },
});
