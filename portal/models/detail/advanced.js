/**
 *
 * @flow
 */
import lugiax from "@lugia/lugiax";
import React from "react";
import {message} from '@lugia/lugia-web'

const model = "advanced";
const state = {
  advancedOrderInfo:{},
  advancedUserInfo: [],
  advancedSteps:[],
  advancedTableInfo:[]

};
export default lugiax.register({
  model,
  state,
  mutations: {
    sync: {
    },
    async: {
      async getAdvancedUserInfo (state, inParam,{mutations}){
        const result  = await fetch('/api/advance/getAdvancedUserInfo',{method: 'POST'}).then(res => (res.json())).then(res => {
          return res;
        });
        console.log('result',result);
        return state.set('advancedUserInfo', result.data);
      },
      async getAdvancedTableInfo (state, inParam,{mutations}){
        const result  = await fetch('/api/advance/getOperateLog',{
          method: 'POST',
          body: JSON.stringify({searchInfo:inParam}),
          headers: new Headers({ 'Content-Type': 'application/json' }),
        }).then(res => (res.json())).then(res => {
          return res;
        });
        return state.set('advancedTableInfo', result);

      },
      async getAdvancedOrderInfo (state, inParam,{mutations}){
        const result  = await fetch('/api/advance/getAdvancedOrderInfo',{method: 'POST'}).then(res => (res.json())).then(res => {
          return res;
        });
        return state.set('advancedOrderInfo', result);

      }
    }
  }
});
