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
  basicStepsInfo: {
    steps:[],
    data:[]
  },
  eggTest:{},
  studentGrades:{}

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
      async getStepsInfo (state, inParam,{mutations}){
        const result  = await fetch('/api/basic/getStepsInfo',{method: 'POST'}).then(res => (res.json())).then(res => {
          return res;
        });
        state.set('basicStepsInfo', {...result});
        const states = state.setIn(['basicStepsInfo', 'data'], result.data);
        return states.setIn(['basicStepsInfo', 'steps'], result.steps);
      },
      async getEggTest (state, inParam,{mutations}){
        const {page,limit,searchInfo} = inParam;
        const result  = await fetch('http://127.0.0.1:7001/getFundInfo',{
          method: 'POST',
          body: JSON.stringify({searchInfo,page,limit}),
          headers: new Headers({ 'Content-Type': 'application/json' }),
        }).then(res => (res.json())).then(res => {
          return res;
        });
        return state.set('eggTest', result);
      },
      async setEggTest (state, inParam,{mutations}){
        const result  = await fetch('http://127.0.0.1:7001/setFundInfo',{
          method: 'POST',
          body: JSON.stringify({info: { fundCode: '82341', fundName: '8234银行', stock: '12', capitalizedCost: '20', marketValue: '60', ratio: '8' }}),
          headers: new Headers({ 'Content-Type': 'application/json' }),
        }).then(res => (res.json())).then(res => {
          return res;
        });
        return state.set('eggTest', result);
      },
      async getStudentGrades (state, inParam,{mutations}){
        const {page,limit,searchInfo} = inParam;
        const result  = await fetch('http://127.0.0.1:7001/getStudentGrades',{
          method: 'POST',
          body: JSON.stringify({searchInfo,page,limit}),
          headers: new Headers({ 'Content-Type': 'application/json' }),
        }).then(res => (res.json())).then(res => {
          return res;
        });
        return state.set('studentGrades', result);
      },
    },
  }
});
