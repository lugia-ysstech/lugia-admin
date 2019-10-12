/**
 *
 * @flow
 */
import lugiax from "@lugia/lugiax";
import React from "react";
import {message} from '@lugia/lugia-web'

const model = "basic";
const state = {
  basicDetailInfo:[],
  basicTableInfo: {
    returnGoods:{},
    userInfo:{}

  }

};
export default lugiax.register({
  model,
  state,
  mutations: {
    sync: {
    },
    async: {
      async getUserInfo (state, inParam,{mutations}){
        const result  = await fetch('/api/basic/userInfo',{method: 'POST'}).then(res => (res.json())).then(res => {
          return res;
        });
        return state.set('basicDetailInfo', result.data);
      },
      async getTableUserInfo (state, inParam,{mutations}){
        const result  = await fetch('/api/basic/tableUserInfo',{method: 'POST'}).then(res => (res.json())).then(res => {
          return res;
        });
        const states = state.setIn(['basicTableInfo', 'userInfo'], result);

        const returnGoodsResult  = await fetch('/api/basic/returnGoods',{method: 'POST'}).then(res => (res.json())).then(res => {
          return res;
        });
        return states.setIn(['basicTableInfo', 'returnGoods'], returnGoodsResult);

      }
    }
  }
});
