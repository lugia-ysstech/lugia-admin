/**
 *
 * @flow
 */
import lugiax from '@lugia/lugiax';
import React from 'react';

const model = 'article';
const state = {
  articleInfo: [],
};
export default lugiax.register({
  model,
  state,
  mutations: {
    sync: {
    },
    async: {
      async getArticleInfo (state, inParam,{mutations}){
        const result  = await fetch('/api/personal/getArticleInfo',{method: 'POST'}).then(res => (res.json())).then(res => {
          return res;
        });

        return state.set('articleInfo', result);

      },
    },
  },
});
